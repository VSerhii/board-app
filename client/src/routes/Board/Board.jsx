import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { getBoardById, addBoardCard, addBoardCardItem } from '../../helpers/ajax';
import InputAdd from '../InputAdd/InputAdd';

function Board() {
  const { boardId } = useParams();
  const { data, setData } = useFetch(() => getBoardById(boardId));

  if (!data) return null;
  const { name: boardName, lists } = data;

  return (
    <>
      <SpanBoardName>
        {boardName}
      </SpanBoardName>
      <GridContainer>
        {
          lists?.map(({ id, name, items }) => (
            <DivContainer key={id}>
              {name}
              {items?.map((item) => <div key={item.id}>{item.name}</div>)}
              <InputAdd
                ajax={(inputVal) => addBoardCardItem(boardId, {
                  cardId: id,
                  ...inputVal,
                })}
                callback={(res) => {
                  const board = res.boards.find(({ id: _id }) => _id === boardId);
                  setData(() => board.lists.find(({ id: _id }) => _id === id) && board);
                }}
                iconSize={40}
              />
            </DivContainer>
          ))
        }
        <InputAdd
          ajax={(inputVal) => addBoardCard(boardId, inputVal)}
          callback={(res) => {
            setData(res.boards.find(({ id }) => id === boardId));
          }}
        />
      </GridContainer>
    </>
  );
}

const SpanBoardName = styled.span`
  display: flex;
  align-self: center;
  padding-bottom: 20px;
  font-size: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
  margin: 0 20px;
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #e7e7e7;
  border-radius: 4px;
  height: 100%;
  color: white;
  text-decoration: none;
`;

export default Board;
