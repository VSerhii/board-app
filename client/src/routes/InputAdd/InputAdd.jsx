import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line react/prop-types
function InputAdd({ ajax, callback, iconSize }) {
  const [isAddPressed, setIsAddPressed] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    !isAddPressed
      ? <AddBoard iconSize={iconSize} onClick={() => setIsAddPressed(!isAddPressed)}>+</AddBoard>
      : (
        <DivInputContainer>
          <Input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
          <DivButtons>
            <button type="button" onClick={() => setIsAddPressed(false)}>Cancel</button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                const id = uuidv4();

                ajax({ id, name: inputValue }).then((res) => {
                  callback(res);
                  setIsAddPressed(false);
                  setInputValue('');
                });
              }}
            >
              Add
            </button>
          </DivButtons>
        </DivInputContainer>
      )
  );
}

const AddBoard = styled.div`
  font-size: ${({ iconSize }) => (iconSize ? `${iconSize}px` : '60px')};
  cursor: pointer;
`;

const DivInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #e7e7e7;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  margin: 5px 10px 0 10px;
`;

const DivButtons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

export default InputAdd;
