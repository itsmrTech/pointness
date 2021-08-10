/**
 *
 * Point
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

interface Props {}

export const Point = memo((props: Props) => {
  return <Div></Div>;
});

const Div = styled.div`
  border-radius: 150px;
  background-image: linear-gradient(
    135deg,
    ${props => props.theme.colors.disabled_gradient[0]},
    ${props => props.theme.colors.disabled_gradient[1]}
  );
  width: 35px;
  height: 35px;
`;
