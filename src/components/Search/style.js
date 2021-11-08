import styled from 'styled-components';

export const S = {
  Header: styled.div`
    text-align: center;
  `,
  SearchButtom: styled.button`
    outline: none;
    border: none;
    background: transparent;
  `,
  SearchInput: styled.input`
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
  `,
  SearchWrapper: styled.div`
    border: 2px solid #666;
    border-radius: 30px;
    padding: 10px 20px;
    width: 25rem;
    display: flex;
    justify-content: space-between;
  `,
};
