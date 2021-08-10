/**
 *
 * Item
 *
 */
import React, { memo, useRef } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Point } from '../dust/Point';
import { EditableInput } from '../EditableInput';

interface Props {}

export const Item = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  // const inputRef = useRef(null);
  return (
    <Div>
      <Point />
      {/* {t('')} */}
      <EditableInput
        onChange={value => {
          console.log(value);

          // console.log(inputRef.current.innerHTML);
        }}
        placeholder={t(...messages.placeholder())}
      >
        <Input></Input>
      </EditableInput>
    </Div>
  );
});

const Div = styled.div`
  padding: 24px;
  display: flex;
  /* background-color: purple; */
`;
const Input = styled.div`
  border: none;
  outline: none;
  width: fit-content;
  min-width: 50%;
  height: 200px;
  font-size: 40px;
  margin-top: -10px;
  margin-left: 20px;
`;
