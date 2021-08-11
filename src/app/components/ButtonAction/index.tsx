/**
 *
 * ButtonAction
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { darken } from 'polished';

interface Props {
  title: string;
  icon?: string;
  onClick?: Function;
}

export const ButtonAction = memo((props: Props) => {
  return (
    <Div
      onClick={() => {
        if (props.onClick) props.onClick();
      }}
    >
      {props.title}
    </Div>
  );
});

const Div = styled.div`
  background-color: ${props => props.theme.colors.neutral_light};
  height: fit-content;
  width: fit-content;
  padding: 6px;
  border-radius: 2px;
  font-size: 15px;
  white-space: nowrap;
  margin: 6px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  :hover {
    background-color: ${props => darken(0.1, props.theme.colors.neutral_light)};
  }
`;
