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
      <Pointness />
      {/*  {t(...messages.someThing())}  */}
    </Div>
  );
});

const Div = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Logo = styled.img`
  max-width: 200px;
  height: auto;
`;
