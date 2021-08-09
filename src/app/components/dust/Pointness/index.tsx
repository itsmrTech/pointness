/**
 *
 * Pointness
 *
 */
import React, { Fragment, memo } from 'react';
import styled, { CSSProperties } from 'styled-components/macro';

interface Props {
  style?: CSSProperties;
  className?: string;
}

export const Pointness = memo((props: Props) => {
  return (
    <Container style={props.style} className={props.className}>
      Point<Span>ness</Span>
    </Container>
  );
});

const Container = styled.h1`
  font-style: italic;
  font-weight: bold;
  font-size: 60px;
  width: fit-content;
  word-wrap: normal;
  margin-top: 50px;
`;
const Span = styled.span`
  font-weight: lighter;
`;
