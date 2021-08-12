import React, { useState, useEffect } from 'react';
// import { render } from 'react-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styled from 'styled-components';
import { getDates } from '../../api';

export const StyleWrapper = styled.div`
  margin: 30px;
`;
export const HeaderWrapper = styled.div`
  font-size: 50px;
  color: #718ac0;
  font-weight: bold;
`;

export const FooterWrapper = styled.div`
  font-size: 50px;
  margin: 20px;
  text-align: center;
`;

function Calendar() {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDates(localStorage.getItem('userId'));
      setDates(response.data.data);
    };
    fetchData();
  }, []);

  return (
    <StyleWrapper>
      <HeaderWrapper>온도 캘린더</HeaderWrapper>
      <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} events={dates} />
      <FooterWrapper>이 달의 평균 온도는 53&deg;C 입니다.</FooterWrapper>
    </StyleWrapper>
  );
}

export default Calendar;
