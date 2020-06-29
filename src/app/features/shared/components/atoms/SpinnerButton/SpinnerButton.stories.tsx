import React from "react"
import { withKnobs } from "@storybook/addon-knobs"

import SpinnerButton from "./SpinnerButton"

export default {
  title: "Shared/Atoms/SpinnerButton",
  decorators: [withKnobs]
}

const handleClick = () => new Promise((resolve) => setTimeout(resolve, 2000))

export const Example = () =>
  <>
    <p>Shows a spinner as long as the <code>Promise</code> returned by <code>onClick</code> was not resolved.</p>
    <SpinnerButton onClick={handleClick}>Click me!</SpinnerButton>
  </>
