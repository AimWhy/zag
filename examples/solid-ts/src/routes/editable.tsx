import * as editable from "@zag-js/editable"
import { editableControls } from "@zag-js/shared"
import { normalizeProps, useMachine } from "@zag-js/solid"
import { Show, createMemo, createUniqueId } from "solid-js"
import { StateVisualizer } from "~/components/state-visualizer"
import { Toolbar } from "~/components/toolbar"
import { useControls } from "~/hooks/use-controls"

export default function Page() {
  const controls = useControls(editableControls)

  const [state, send] = useMachine(
    editable.machine({
      id: createUniqueId(),
      value: "Hello World",
    }),
    { context: controls.context },
  )

  const api = createMemo(() => editable.connect(state, send, normalizeProps))

  return (
    <>
      <main class="editable">
        <div {...api().getRootProps()}>
          <div {...api().getAreaProps()}>
            <input data-testid="input" {...api().getInputProps()} />
            <span data-testid="preview" {...api().getPreviewProps()} />
          </div>
          <div {...api().getControlProps()}>
            <Show when={!api().editing}>
              <button data-testid="edit-button" {...api().getEditTriggerProps()}>
                Edit
              </button>
            </Show>
            <Show when={api().editing}>
              <>
                <button data-testid="save-button" {...api().getSubmitTriggerProps()}>
                  Save
                </button>
                <button data-testid="cancel-button" {...api().getCancelTriggerProps()}>
                  Cancel
                </button>
              </>
            </Show>
          </div>
        </div>
      </main>

      <Toolbar controls={controls.ui}>
        <StateVisualizer state={state} />
      </Toolbar>
    </>
  )
}
