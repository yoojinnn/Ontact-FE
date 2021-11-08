import styled from 'styled-components';

export const S = {
  AppHeader: styled.div`
    padding: 30px;
    background: #ce11260d;
  `,

  h1: styled.div`
    font-size: 50px;
    color: #666;
    font-weight: bold;
  `,

  Information: styled.div`
    text-align: center;
    margin-bottom: 30px;
  `,

  Analyze: styled.div`
    font-size: 35px;
    margin: 20px;
  `,

  Temperature: styled.span`
    color: red;
    font-weight: bold;
  `,

  Result: styled.span`
    font-size: 22px;
  `,

  Table: styled.div`
    width: 100%;
    text-align: -webkit-center;
  `,

  Degree: styled.tr`
    text-align: left;
  `,

  Warm: styled.th`
    font-size: 30px;
    color: #f0adad;
  `,

  Mid: styled.th`
    font-size: 30px;
    color: #404041;
    padding: 0px 80px;
  `,

  Cold: styled.th`
    font-size: 30px;
    color: #8db3e2;
  `,

  MidTextArea: styled.td`
    padding: 0px 80px;
  `,

  textarea: styled.textarea`
    resize: none;
    border-radius: 8px;
    border: 3px solid darkslategrey;
  `,
  Spinner: styled.div`
    margin: auto;
    /* position: absolute;
    top: 50%;
    right: 50%; */
    /* transform: translate(-50%, -50%); */
  `,
  SpinnerWrapper: styled.div`
    display: flex;
    height: calc(100vh - 61.83px);
    background: #ce11260d;
  `,
};
