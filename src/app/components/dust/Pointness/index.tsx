/**
 *
 * Pointness
 *
 */
import React, { Fragment, memo } from 'react';
import styled from 'styled-components/macro';

interface Props {}

export const Pointness = memo((props: Props) => {
  return (
    <Container>
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
