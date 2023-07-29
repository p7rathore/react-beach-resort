import React from "react";
import styled from "styled-components";
import { useThemeContext } from "../../themeContext";

const Switch = styled.div`
  display: flex;
  flex-shrink: 0px;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: ${({ theme }) => theme.switchWidth};
  height: ${({ theme }) => theme.switchHeight};
  border-radius: 50em;
  padding: ${({ theme }) => theme.switchPadding} 0px;

  .switch_input,
  .switch_label {
    position: absolute;
    left: 0;
    top: 0;
  }

  .switch_input {
    margin: 0;
    padding: 0;
    opacity: 0;
    height: 0;
    width: 0;
    pointer-events: none;

    &:checked + .switch_label {
      background-color: ${({ theme }) => theme.colorWidth};
    }

    &:checked + .switch_label + .switch_marker {
      left: calc(
        100% - (${({ theme }) => theme.switchHeight}) +
          (${({ theme }) => theme.switchPadding})
      );
    }

    &:focus + .switch_label,
    &:active + .switch_label {
      box-shadow: 0 0 0 3px alpha(${({ theme }) => theme.primary}, 0.2);
    }
  }

  .switch_label {
    width: 100%;
    height: 100%;
    color: transparent;
    user-select: none;
    background-color: ${({ theme }) => theme.textColor};
    border-radius: inherit;
    z-index: 1;
    transition: background ${({ theme }) => theme.switchAnimationDuration};
  }

  .switch_marker {
    position: relative;
    background-color: ${({ theme }) => theme.primary};
    width: calc(
      (${({ theme }) => theme.switchHeight}) -
        (${({ theme }) => theme.switchPadding}) * 2
    );
    height: calc(
      (${({ theme }) => theme.switchHeight}) -
        (${({ theme }) => theme.switchPadding}) * 2
    );
    border-radius: 50%;
    box-shadow: 0 1px 1px hsla(0, 0%, 0%, 0.25);
    left: ${({ theme }) => theme.switchPadding};
    transition: left ${({ theme }) => theme.switchAnimationDuration};
    will-change: left;
  }
`;
const Button = styled.button`
  background-color: ${({ mode }) => (mode === "dark" ? "#FFF" : "#302C40")};
  border-radius: 20px;
  cursor: pointer;
  width: 40px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: ${({ mode }) =>
    mode === "dark" ? "flex-end" : "flex-start"};
`;

const Circle = styled.div`
  background-color: ${({ mode }) => (mode === "dark" ? "#302C40" : "#FFF")};
  width: 14px;
  height: 14px;
  border-radius: 10px;
`;
const ToggleSwitch = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <Switch>
      {/* <input
        className="switch_input"
        type="checkbox"
        id="switchCheckbox1"
        onClick={() => {
          toggleTheme();
        }}
      />
      <lable
        aria-hidden="false"
        className="switch_label"
        htmlFor="switchCheckbox1"
        onClick={() => {
          toggleTheme();
        }}
      >
        On
      </lable>
      <div
        aria-hidden="false"
        className="switch_marker"
        onClick={() => {
          alert("lastfiv");
          toggleTheme();
        }}
      ></div> */}

      <Button
        type="button"
        onClick={() => {
          toggleTheme();
        }}
        mode={theme}
      >
        <Circle mode={theme} />
      </Button>
    </Switch>
  );
};

export default ToggleSwitch;
