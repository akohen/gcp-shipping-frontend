// @flow
import React from 'react';
import styled from 'styled-components';
import theme from '../style';

const InputWrapper = styled.div`
  display: inline-block;
  border: 1px solid #777;
  border-radius: 4px;
  padding: 0;
  width: 250px;
  background-color: #fff;
  position: relative;
  height: 45px;
  margin: 5px 15px;
`;

const InputLabel = styled.label`
  font-size: 9px;
  text-transform: uppercase;
  color: ${theme.secondary};
  padding: 0 8px;  
  position: absolute;
  top: 0px;
`;

const Select = styled.select`
  cursor: pointer;
  padding: 15px 10px 10px;
  border: 0px;
  height: 45px;
  font-size: 16px;
  background-color: transparent;
  width: 100%;
`;

const Input = styled.input`
  cursor: pointer;
  padding: 15px 10px 10px;
  border: 0px;
  height: 20px;
  font-size: 16px;
  background-color: transparent;
  width: calc(100% - 20px);
`;

type StyledSelectType = {
  label: string,
  options: {name: string}[],
  value: string,
  onChange: (event: SyntheticInputEvent<HTMLSelectElement>) => void
};

const StyledSelect = ({ label, options = [], value, onChange }: StyledSelectType) => (
  <InputWrapper>
    <InputLabel>{label}</InputLabel>
    <Select value={value} onChange={onChange}>
      { options.map(({ name }: {name: string}) => (
        <option key={name}>{name}</option>
      ))}
    </Select>
  </InputWrapper>
);


type StyledInputType = {
  label: string,
  value: number,
  onChange: (event: SyntheticInputEvent<HTMLInputElement>) => void
};

const StyledNumberInput = ({ label, value, onChange }: StyledInputType) => (
  <InputWrapper>
    <InputLabel>{label}</InputLabel>
    <Input type="number" value={value} onChange={onChange} />
  </InputWrapper>
);
export { InputWrapper, InputLabel, StyledSelect, StyledNumberInput };
