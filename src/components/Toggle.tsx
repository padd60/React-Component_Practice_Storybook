import styled from 'styled-components';
import React, { ChangeEvent } from 'react';
import useToggle from '../hooks/useToggle';

type propsType = {
  name:string,
  on:boolean,
  disabled:boolean,
  onChange: any,
}

const ToggleContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  user-select: none;
`;

const ToggleSwitch = styled.div`
  width: 64px;
  height: 30px;
  padding: 2px;
  box-sizing: border-box;
  background-color: #ccc;
  transition: background-color .2s ease-out;
  border-radius: 15px;

  &:after{
    content: '';
    position: relative;
    left: 0;
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: white;
    transition: left .2s ease-out;
  }
`;

const ToggleInput = styled.input`
  display: none;

  &:checked + div{
    background: lightgreen;
  }

  &:checked + div:after{
    left: calc(100% - 26px);
  }

  &:disabled + div{
    opacity: .7;
    cursor: not-allowed;

    &:after{
      opacity: .7;
    }
  }
`;

const Toggle = ({
  name, on = false, disabled, onChange, ...props
}:propsType) => {
  const [checked, toggle] = useToggle(on) as [boolean, ()=>void];

  const handleChange = (e:ChangeEvent) => {
    toggle();
    // eslint-disable-next-line no-unused-expressions
    onChange && onChange();
  };

  return (
    <ToggleContainer {...props}>
      <ToggleInput
        checked={checked}
        disabled={disabled}
        name={name}
        onChange={handleChange}
        style={{ display: 'none' }}
        type="checkbox"
      />
      <ToggleSwitch />
    </ToggleContainer>
  );
};

export default Toggle;
