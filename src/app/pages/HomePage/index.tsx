import { Item } from 'app/components/Item';
import { Splash } from 'app/components/Splash';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Splash />
      <Content>
        <Item color={['#903AE5', '#C62727']} />
      </Content>
    </>
  );
}
const Content = styled.div`
  margin-top: 70px;
`;
