import React, { useState, useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { S } from './style';
// import { deduplicateArray, removeOneWords } from '../../util/words';
// import { getWords, getDatas, getTem } from '../../api';
import LoadingSpinner from '../LoadingSpinner';

const options = {
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
  enableTooltip: true,
  deterministic: false,
  fontFamily: 'sans-serif',
  fontSizes: [15, 80],
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: 'sqrt',
  spiral: 'archimedean',
  transitionDuration: 500,
};

function Thermometer() {
  const [words, setWords] = useState(null);
  const [avg, setAvg] = useState(null);
  const [tem, setTem] = useState(null);

  useEffect(() => {
    setWords(JSON.parse(localStorage.getItem('words')));
    setAvg(JSON.parse(localStorage.getItem('datas')));
    setTem(JSON.parse(localStorage.getItem('tem')));
    // const isNew = localStorage.getItem('isNew');
    // console.log(isNew);
    // if (isNew === 'true') {
    //   const fetchWordsData = async () => {
    //     const response = await getWords(localStorage.getItem('userId'));
    //     setWords(removeOneWords(deduplicateArray(response.data.data)));
    //   };

    //   const fetchAvgData = async () => {
    //     const response = await getDatas(localStorage.getItem('userId'));
    //     setAvg(response.data.avg);
    //   };

    //   const fetchTemData = async () => {
    //     const response = await getTem(localStorage.getItem('userId'));
    //     setTem(response.data);
    //   };
    //   fetchWordsData();
    //   fetchAvgData();
    //   fetchTemData();
    // }
  }, []);

  return (
    <S.AppHeader>
      <S.h1>온도계</S.h1>
      {(!words || !avg || !tem) ? (
        <S.Spinner>
          <LoadingSpinner></LoadingSpinner>
          <div style={{ textAlign: 'center', fontSize: '20px' }}>분석 중..</div>
        </S.Spinner>
      ) : (
        <div>
          <S.Information>
            <S.Analyze>
              최근 게시글 {avg.total_sen}개의 평균온도는{' '}
              <S.Temperature>{Math.round(avg.title__avg * 100) / 100}&deg;C</S.Temperature> 입니다.
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
      )}
    </S.AppHeader>
  );
}

export default Thermometer;
