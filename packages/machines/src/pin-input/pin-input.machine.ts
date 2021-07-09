import { createMachine, guards, ref } from "@ui-machines/core"
import { nextTick } from "@ui-machines/utils"
import { WithDOM } from "../type-utils"
import { collection } from "./pin-input.dom"

const { not } = guards

export type PinInputMachineContext = WithDOM<{
  disabled?: boolean
  direction?: "ltr" | "rtl"
  placeholder?: string
  autoFocus?: boolean
  invalid?: boolean
  otp?: boolean
  value: string[]
  type?: "alphanumeric" | "number"
  focusedIndex: number
  onComplete?(values: string[]): void
}>

export type PinInputMachineState = {
  value: "idle" | "focused"
}

export const pinInputMachine = createMachine<
  PinInputMachineContext,
  PinInputMachineState
>(
  {
    id: "pin-input",
    initial: "idle",
    context: {
      uid: "pin-input",
      value: [],
      focusedIndex: -1,
    },
    states: {
      idle: {
        on: {
          CLEAR: {
            actions: ["clearValue", "setFocusIndexToFirst", "focusInput"],
          },
          MOUNT: {
            actions: [
              "setId",
              "initializeValue",
              "setOwnerDocument",
              "autoFocus",
            ],
          },
          FOCUS: {
            target: "focused",
            actions: "setFocusedIndex",
          },
        },
      },
      focused: {
        on: {
          TYPE: [
            {
              cond: "isLastValueBeforeComplete",
              actions: ["setValue", "invokeComplete"],
            },
            {
              cond: "isEventValueEmpty",
              actions: "setValue",
            },
            {
              cond: not("isLastInputFocused"),
              actions: ["setValue", "setNextFocusedIndex", "focusInput"],
            },
          ],
          BLUR: {
            target: "idle",
            actions: "resetFocusedIndex",
          },
          BACKSPACE: [
            {
              cond: "hasValue",
              actions: "clearValueAtFocusedIndex",
            },
            {
              actions: [
                "setPrevFocusIndex",
                "clearValueAtFocusedIndex",
                "focusInput",
              ],
            },
          ],
        },
      },
    },
  },
  {
    guards: {
      isEventValueEmpty: (ctx, evt) => {
        return evt.value === "" && !!ctx.value[ctx.focusedIndex + 1]
      },
      hasValue: (ctx) => {
        return Boolean(ctx.value[ctx.focusedIndex])
      },
      isValueComplete: (ctx) => {
        return ctx.value.every(Boolean)
      },
      isLastValueBeforeComplete: (ctx) => {
        const inputs = collection(ctx)
        return ctx.value.filter(Boolean).length === inputs.length - 1
      },
      isLastInputFocused: (ctx) => {
        const inputs = collection(ctx)
        return ctx.focusedIndex === inputs.length - 1
      },
    },
    actions: {
      setId: (ctx, evt) => {
        ctx.uid = evt.id
      },
      initializeValue: (ctx) => {
        nextTick(() => {
          const inputs = collection(ctx)
          const empty = [...new Array(inputs.length).fill("")]
          ctx.value = ctx.value.length === 0 ? ref(empty) : ctx.value
        })
      },
      setOwnerDocument: (ctx, evt) => {
        ctx.doc = ref(evt.doc)
      },
      focusInput: (ctx) => {
        const inputs = collection(ctx)
        const input = inputs.itemAt(ctx.focusedIndex)
        nextTick(() => input.focus())
      },
      invokeComplete: (ctx) => {
        ctx.onComplete?.(ctx.value)
      },
      resetFocusedIndex: (ctx) => {
        ctx.focusedIndex = -1
      },
      setFocusedIndex: (ctx, event) => {
        ctx.focusedIndex = event.index
      },
      setValue: (ctx, event) => {
        let eventValue = String(event.value)

        // handles pasting scenarios
        if (event.value.length > 2) {
          const clipboardData = eventValue
            .split("")
            .filter((_, index) => index < ctx.value.length)

          ctx.value = clipboardData

          if (clipboardData.length === ctx.value.length) {
            ctx.onComplete?.(clipboardData)
          }
        } else {
          ctx.value[ctx.focusedIndex] =
            eventValue.length > 1 ? eventValue.charAt(1) : eventValue.charAt(0)
        }
      },
      clearValue: (ctx) => {
        ctx.value = ctx.value.map(() => "")
      },
      clearValueAtFocusedIndex: (ctx) => {
        ctx.value[ctx.focusedIndex] = ""
      },
      setFocusIndexToFirst: (ctx) => {
        ctx.focusedIndex = 0
      },
      autoFocus: (ctx) => {
        if (!ctx.autoFocus) return
        ctx.focusedIndex = 0
        nextTick(() => {
          const dom = collection(ctx)
          dom.first?.focus()
        })
      },
      setNextFocusedIndex: (ctx, evt, { guards }) => {
        if (guards?.isValueComplete(ctx, evt)) return
        const inputs = collection(ctx)
        let nextIndex = Math.min(ctx.focusedIndex + 1, inputs.length)
        ctx.focusedIndex = nextIndex
      },
      setPrevFocusIndex: (ctx) => {
        let prevIndex = Math.max(ctx.focusedIndex - 1, 0)
        ctx.focusedIndex = prevIndex
      },
    },
  },
)
