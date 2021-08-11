/**
 *
 * Item
 *
 */
import React, { Fragment, memo, useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Point } from '../dust/Point';
import { EditableInput } from '../EditableInput';
import { ButtonAction } from '../ButtonAction';

interface Props {
  color: [string, string];
  onInsertBelow: Function;
  onInsertInside: Function;
  title?: string;
  onChange: Function;
}

export const Item = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [title, setTitle] = useState('');

  // const inputRef = useRef(null);
  return (
    <Container>
      <Div>
        <Point
          color={props.color}
          disabled={props.title === undefined || props.title.length === 0}
        />
        {/* {t('')} */}
        <EditableInput
          onChange={value => {
            console.log(value);
            setTitle(value);
            props.onChange(value);
            // console.log(inputRef.current.innerHTML);
          }}
          placeholder={t(...messages.placeholder())}
          defaultValue={props.title}
        >
          <Input></Input>
        </EditableInput>
      </Div>
      <Actions>
        <ButtonAction
          onClick={() => {
            props.onInsertBelow();
          }}
          title={'Insert Below'}
        />
        <ButtonAction
          onClick={() => {
            props.onInsertInside();
          }}
          title={'Insert Inside'}
        />
      </Actions>
    </Container>
  );
});
const Actions = styled.div`
  display: none;
  flex-direction: column;
  margin-left: 64px;
`;
const Container = styled.div`
  :hover > ${Actions} {
    display: flex;
  }
`;

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
  /* height: 200px; */
  font-size: 40px;
  margin-top: -10px;
  margin-left: 20px;
`;
