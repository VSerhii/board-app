import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { getBoards, addBoard } from '../../helpers/ajax';
import InputAdd from '../InputAdd/InputAdd';

function Boards() {
  const { data, setData } = useFetch(getBoards);

  if (!data) return null;

  return (
    <GridContainer>
      {data.boards.map(({ id, name }) => <LinkCard to={id} key={id}>{name}</LinkCard>)}
      <InputAdd ajax={addBoard} callback={setData} />
    </GridContainer>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
  margin: 0 20px;
`;

const LinkCard = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #e7e7e7;
  border-radius: 4px;
  height: 10vh;
  color: white;
  text-decoration: none;
`;

export default Boards;
