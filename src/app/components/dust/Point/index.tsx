/**
 *
 * Point
 *
 */
import React, { memo, useContext, useEffect, useState } from 'react';
import styled, { ThemeContext, keyframes } from 'styled-components/macro';

interface Props {
  color: [string, string];
  disabled?: boolean;
}

export const Point = memo((props: Props) => {
  const theme = useContext(ThemeContext);
  const [prevBackgroundColors, setPrevBackgroundColors] = useState([
    ...theme.colors.disabled_gradient,
  ] as [string, string]);
  const [backgroundColors, setBackgroundColors] = useState([
    ...theme.colors.disabled_gradient,
  ] as [string, string]);
  useEffect(() => {
    if (props.disabled) {
      if (
        backgroundColors[0] !== theme.colors.disabled_gradient[0] ||
        backgroundColors[1] !== theme.colors.disabled_gradient[1]
      )
        setPrevBackgroundColors([...backgroundColors]);
      setBackgroundColors([...theme.colors.disabled_gradient] as [
        string,
        string,
      ]);
    } else {
      if (
        backgroundColors[0] !== props.color[0] ||
        backgroundColors[1] !== props.color[1]
      )
        setPrevBackgroundColors([...backgroundColors]);
      setBackgroundColors([...props.color]);
    }
  }, [props.color, props.disabled, theme.colors.disabled_gradient]);
  return (
    <Div
      backgroundColors={backgroundColors}
      prevBackgroundColors={prevBackgroundColors}
      backgroundAnimation={keyframes`
        from {
          background-image: linear-gradient(
            135deg,
            ${prevBackgroundColors[0]},
            ${prevBackgroundColors[1]},
            ${backgroundColors[0]},
            ${backgroundColors[1]}
          );
          background-position: 0% 0%;
        }
        to {
          background-image: linear-gradient(
            135deg,
            ${prevBackgroundColors[0]},
            ${prevBackgroundColors[1]},
            ${backgroundColors[0]},
            ${backgroundColors[1]}
          );
          background-position: 100% 100%;

        }
      `}
    ></Div>
  );
});

const Div = styled.div<{
  backgroundColors: [string, string];
  prevBackgroundColors: [string, string];
  backgroundAnimation: any;
}>`
  border-radius: 150px;
  background-size: 250% 250%;
  background-position: 0% 0%;
  background-image: linear-gradient(
    135deg,
    ${props => props.prevBackgroundColors[0]},
    ${props => props.prevBackgroundColors[1]},
    ${props => props.backgroundColors[0]},
    ${props => props.backgroundColors[1]}
  );
  width: 36px;
  height: 36px;
  transition: all 2s;
  animation-timing-function: cubic-bezier(0.09, 0.22, 0.84, 0.31);
  animation-name: ${props => props.backgroundAnimation};
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  /* animation-timing-function: ease-in-out; */
`;
