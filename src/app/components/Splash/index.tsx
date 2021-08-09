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
    <Div>
      <Logo src={logoFile} />
      <PointnessTitle />
      {/*  {t(...messages.someThing())}  */}
    </Div>
  );
});

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
      /* font-size: 20px; */
      margin: 0px;
      transform: translate(-100px, 0px);
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
      transform: scale(0.5) translate(calc(-50% - 30px), -50%);
    }
  }
`;
const Logo = styled.img`
  max-width: 200px;
  height: auto;
  animation-name: toNavigation;
  animation-duration: 2s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;

  @keyframes logoToNavigation {
    from {
    }
    to {
      max-width: 50px;
    }
  }
`;
