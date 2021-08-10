/**
 *
 * Splash
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import logoFile from '../../assets/images/logo-large.png';
import { Pointness } from '../dust/Pointness';

interface Props {}

export const Splash = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Background>
      <Div>
        <Logo src={logoFile} />
        <PointnessTitle />
        {/*  {t(...messages.someThing())}  */}
      </Div>
    </Background>
  );
});
const Background = styled.div`
  background-color: ${props => props.theme.colors.light};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  animation-name: fadeOut;

  animation-duration: 1s;
  animation-delay: 5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  @keyframes fadeOut {
    from {
    }
    to {
      background-color: rgba(0, 0, 0, 0);
      display: none;
      height: 00vh;
    }
  }
`;
const PointnessTitle = styled(Pointness)`
  animation-name: titleToNavigation;
  animation-duration: 2s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  @keyframes titleToNavigation {
    from {
    }
    to {
      font-size: 50px;
      margin: 0px;
      /* transform: translate(-25px, 0px); */
    }
  }
`;
const Div = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  animation-name: toNavigation;
  animation-duration: 2s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;

  @keyframes toNavigation {
    from {
    }
    to {
      top: 0px;
      left: 0px;
      transform: scale(0.5) translate(calc(-50% - 25px), 0%);
    }
  }
`;
const Logo = styled.img`
  max-width: 200px;
  height: 200px;
  animation-name: logoToNavigation;
  animation-duration: 2s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;

  @keyframes logoToNavigation {
    from {
    }
    to {
      max-width: 50px;
      height: 50px;
      transform: translate(0px, 20%);
    }
  }
`;
