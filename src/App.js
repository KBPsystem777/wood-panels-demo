import React, { useState } from "react"
import Waveform from "./waveform"
import pianoClip from "./piano.mp3"
import reverb from "./reverb.mp3"
import noReverb from "./noReverb.mp3"

import styled from "styled-components"

const ToggleSwitchContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-top: 5em;
`

const SwitchInput = styled.input`
  display: none;
`

const Slider = styled.span`
  position: relative;
  width: 40px;
  height: 20px;
  background-color: green;
  border-radius: 20px;
  transition: background-color 0.3s;

  &::before {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: white;
    top: 1px;
    left: 1px;
    transition: transform 0.3s;
  }
`

const Text = styled.span`
  margin-left: 10px;
`

const App = () => {
  const [isReverb, setIsReverb] = useState(!false)

  return (
    <main style={{ padding: "16px" }}>
      <h1>WoodPanels Demo</h1>
      <Waveform audio={isReverb ? reverb : noReverb} />

      {/* <button
        onClick={() => {
          console.log("isReverb: ", isReverb)
          setIsReverb(!isReverb)
        }}
      >
        No reverb
      </button> */}

      <ToggleSwitchContainer>
        <SwitchInput
          type="checkbox"
          checked={isReverb}
          onChange={() => {
            console.log("isReverb: ", isReverb)
            setIsReverb(!isReverb)
          }}
        />
        <Slider />
        <Text>{!isReverb ? "No reverb" : "With reverb"}</Text>
      </ToggleSwitchContainer>
    </main>
  )
}

export default App
