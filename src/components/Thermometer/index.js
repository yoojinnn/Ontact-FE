import React, { useState, useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { S } from './style';
import { deduplicateArray, removeOneWords } from '../../util/words';
import { getWords, getDatas, getTem } from '../../api';
import LoadingSpinner from '../LoadingSpinner';
import WarningDialog from '../WarningDialog';
import { useHistory } from 'react-router-dom';

const options = {
  colors: [
    '#862A5C',
    '#F4A548',
    '#862A5C',
    '#3F51B5',
    '#3F51B5',
    '#E7A85E',
    '#476777',
    '#7398A1',
    '#98BAC3',
  ],
  enableTooltip: true,
  deterministic: false,
  fontFamily: 'NanumBarunpenR',
  fontSizes: [15, 80],
  fontStyle: 'normal',
  fontWeight: 'normal',
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 0],
  scale: 'sqrt',
  spiral: 'archimedean',
  transitionDuration: 500,
};

function Thermometer({ changeSearch }) {
  const history = useHistory();
  const [words, setWords] = useState([]);
  const [avg, setAvg] = useState([]);
  const [tem, setTem] = useState([]);

  useEffect(() => {
    const fetchWordsData = async () => {
      const response = await getWords(localStorage.getItem('userId'));
      if (response) setWords(removeOneWords(deduplicateArray(response.data.data)));
      else handleClickOpen();
    };

    const fetchAvgData = async () => {
      const response = await getDatas(localStorage.getItem('userId'));
      if (response) setAvg(response.data.avg);
    };

    const fetchTemData = async () => {
      const response = await getTem(localStorage.getItem('userId'));
      if (response) setTem(response.data);
    };
    fetchWordsData();
    fetchAvgData();
    fetchTemData();
  }, []);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    changeSearch();
    history.push('/');
  };

  return (
    <>
      {words.length === 0 || avg.length === 0 || tem.length === 0 ? (
        <S.SpinnerWrapper>
          <S.Spinner>
            <LoadingSpinner />
            <div style={{ textAlign: 'center', fontSize: '20px', color: '#666' }}>분석 중</div>
          </S.Spinner>
        </S.SpinnerWrapper>
      ) : (
        <S.AppHeader>
          <S.h1>온도계</S.h1>
          <div>
            <S.Information>
              <S.Analyze>
                최근 게시글 {avg.total_sen}개의 평균온도는{' '}
                <S.Temperature>{Math.round(avg.title__avg * 100) / 100}&deg;C</S.Temperature>{' '}
                입니다.
              </S.Analyze>
              <S.Result>총 {avg.total_sen}개의 글 분석 결과</S.Result>
            </S.Information>

            <S.Table>
              <table>
                <tbody>
                  <S.Degree>
                    <S.Warm>溫온</S.Warm>
                    <S.Mid>中중</S.Mid>
                    <S.Cold>冷냉</S.Cold>
                  </S.Degree>
                  <tr style={{ fontSize: '20px' }}>
                    <td>
                      <S.textarea
                        cols="30"
                        rows="10"
                        fontSize="20px"
                        value={tem.warm && tem.warm.join(', ')}
                        readOnly
                      ></S.textarea>
                    </td>
                    <S.MidTextArea>
                      <S.textarea
                        cols="30"
                        rows="10"
                        value={tem.normal && tem.normal.join(', ')}
                        readOnly
                      ></S.textarea>
                    </S.MidTextArea>
                    <td>
                      <S.textarea
                        cols="30"
                        rows="10"
                        value={tem.cold && tem.cold.join(', ')}
                        readOnly
                      ></S.textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
            </S.Table>

            <div style={{ height: 600 }}>
              <S.h1>나의 단어</S.h1>
              <ReactWordcloud options={options} words={words} />
            </div>
          </div>
        </S.AppHeader>
      )}
      <WarningDialog open={open} handleClose={handleClose} text="존재하지 않는 아이디입니다." />
    </>
  );
}

export default Thermometer;
