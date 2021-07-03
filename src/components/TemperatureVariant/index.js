import React from "react";
import ReactDOM from "react-dom";
import Line from './line';
import S from './style';


function TemperatureVariant() {
  return (
      <S.AppHeader>
        <S.h>
          온도 변화
        </S.h>
    <S.Header>
     <Line />
    </S.Header>
    </S.AppHeader>
  );
}


export default TemperatureVariant;