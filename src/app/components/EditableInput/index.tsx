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
}

export const EditableInput = memo((props: Props) => {
  const { onChange } = props;
  const inputRef = useRef<any>(null);
  const [lastValue, setLastValue] = useState('');
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
  });
  return <Fragment>{result}</Fragment>;
});

const Div = styled.div``;
