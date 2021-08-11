import { Item } from 'app/components/Item';
import { Splash } from 'app/components/Splash';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHomePageSlice } from './slice';
import { selectItems } from './slice/selectors';
import shortid from 'shortid';
import { genRandomColor, splitColor } from 'tools/color';

export function HomePage() {
  const { actions } = useHomePageSlice();
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const [colorRange, setColorRange] = useState(genRandomColor());
  const [itemsElements, setItemsElements] = useState([
    <Item
      onInsertBelow={() => {}}
      onInsertInside={() => {}}
      color={['#903AE5', '#C62727']}
      onChange={() => {}}
    />,
  ]);
  useEffect(() => {
    dispatch(actions.getAllItems({}));
    setColorRange(genRandomColor());
  }, []);
  useEffect(() => {
    let colors = splitColor(colorRange, items.length);
    let elems = items.map((item, ind) => {
      return (
        <Item
          onInsertBelow={() => {}}
          onInsertInside={() => {}}
          // color={['#903AE5', '#C62727']}
          color={colors[ind]}
          title={item.title}
          onChange={value => {
            onItemTitleChanged(item.id, value);
          }}
          mode={'normal'}
        />
      );
    });
    let id = shortid.generate();
    elems.push(
      <Item
        onInsertBelow={() => {}}
        onInsertInside={() => {}}
        color={colors[colors.length - 1]}
        onChange={value => {
          onItemTitleChanged(id, value);
        }}
        mode={elems.length === 0 ? 'first' : 'last'}
      />,
    );
    return setItemsElements(elems);
  }, [items]);

  const onItemTitleChanged = (id, title) => {
    let ind = items.findIndex(a => a.id === id);

    let item = {};
    if (ind >= 0) item = { ...items[ind], title };
    else item = { id, title };
    dispatch(actions.updateItem({ item }));
  };
  return (
    <>
      <Helmet>
        <title>Pointness</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Splash />
      <Content>{itemsElements}</Content>
    </>
  );
}
const Content = styled.div`
  margin-top: 70px;
`;
