/**
 *
 * EditableInput
 *
 */
import React, { Fragment, memo, useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';

interface Props {
  children: React.ReactNode;
  onChange: Function;
  placeholder: string;
  defaultValue?: string;
}

export const EditableInput = memo((props: Props) => {
  const { onChange } = props;
  const inputRef = useRef<any>(null);
  const [lastValue, setLastValue] = useState('');
  const [defaultValue, setDefaultValue] = useState('');
  useEffect(() => {
    if (defaultValue.length === 0 && lastValue.length === 0)
      setDefaultValue(props.defaultValue ? props.defaultValue : '');
  }, [defaultValue.length, lastValue.length, props.defaultValue]);
  let inputChildren = React.Children.toArray(props.children);
  if (inputChildren.length > 1) {
    throw Error('No more than one children');
  }
  const onMouseUp = () => {
    const value = inputRef.current?.value || inputRef.current?.innerText;
    if (value !== lastValue) onChange(value);
    setLastValue(value);
  };
  useEffect(() => {
    const value = inputRef.current?.value || inputRef.current?.innerText;

    // onChange(value);
  }, []);

  let result = React.cloneElement(inputChildren[0] as React.ReactElement<any>, {
    contentEditable: true,
    suppressContentEditableWarning: true,
    ref: inputRef,
    onKeyUp: onMouseUp,
    placeholder: props.placeholder,
    className: 'editable',
    children: defaultValue,
  });
  return <Fragment>{result}</Fragment>;
});

const Div = styled.div``;
