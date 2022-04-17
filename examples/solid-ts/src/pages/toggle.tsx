import { injectGlobal } from "@emotion/css"
import { normalizeProps, PropTypes, useMachine, useSetup } from "@zag-js/solid"
import * as toggle from "@zag-js/toggle"
import { createMemo, createUniqueId } from "solid-js"
import { toggleStyle } from "../../../../shared/style"
import { StateVisualizer } from "../components/state-visualizer"

injectGlobal(toggleStyle)

export default function Page() {
  const [state, send] = useMachine(toggle.machine({ label: "toggle italic" }))

  const ref = useSetup({ send, id: createUniqueId() })
  const api = createMemo(() => toggle.connect<PropTypes>(state, send, normalizeProps))

  return (
    <div ref={ref}>
      <button className="toggle" {...api().buttonProps}>
        B
      </button>
      <StateVisualizer state={state} />
    </div>
  )
}
