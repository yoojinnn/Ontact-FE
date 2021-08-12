import React, { useState } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { S } from './style';
import { deduplicateArray, removeOneWords } from '../../util/words';
import { getWords, getDatas, getTem } from '../../api';
import { useEffect } from 'react';

const options = {
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
  enableTooltip: true,
  deterministic: false,
  fontFamily: 'sans-serif',
  fontSizes: [10, 100],
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: 'sqrt',
  spiral: 'archimedean',
  transitionDuration: 500,
};

function Thermometer() {
  const [words, setWords] = useState([]);
  const [avg, setAvg] = useState([]);
  const [tem, setTem] = useState([]);

  useEffect(() => {
    const fetchWordsData = async () => {
      const response = await getWords(localStorage.getItem('userId'));
      setWords(removeOneWords(deduplicateArray(response.data.data)));
    };
    fetchWordsData();

    const fetchAvgData = async () => {
      const response = await getDatas(localStorage.getItem('userId'));
      setAvg(response.data.avg);
    };
    fetchAvgData();

    const fetchTemData = async () => {
      const response = await getTem(localStorage.getItem('userId'));
      setTem(response.data);
    };
    fetchTemData();
  }, []);

  return (
    <S.AppHeader>
      <S.h1>온도계</S.h1>
      <S.Information>
        <S.Analyze>
          최근 게시글 {avg.total_sen}개의 평균온도는{' '}
          <S.Temperature>{avg.title__avg}&deg;C</S.Temperature> 입니다.
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
            <tr>
              <td>
                <S.textarea cols="30" rows="10" value={tem.warm} readOnly></S.textarea>
              </td>
              <S.MidTextArea>
                <S.textarea cols="30" rows="10" value={tem.normal} readOnly></S.textarea>
              </S.MidTextArea>
              <td>
                <S.textarea cols="30" rows="10" value={tem.cold} readOnly></S.textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </S.Table>

      <div style={{ height: 600 }}>
        <S.h1>나의 단어</S.h1>
        <ReactWordcloud options={options} words={words} />
      </div>
    </S.AppHeader>
  );
}

export default Thermometer;
