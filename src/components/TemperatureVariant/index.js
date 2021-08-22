import React from 'react';
import { S } from './style';
import { getGraph } from '../../api';
import { useState, useEffect } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { makeData } from '../../util/makeData';

function TemperatureVariant() {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getGraph(localStorage.getItem('userId'));
      const data = {
        id: '온도',
        color: 'hsl(135, 70%, 50%)',
        data: makeData(response.data.m_avg),
      };
      setDatas(data);
    };
    fetchData();
  }, []);

  return (
    <S.AppHeader>
      <S.h>온도 변화</S.h>
      <S.Header>
        {datas && (
          <ResponsiveLine
            data={[datas]}
            margin={{ top: 50, right: 110, bottom: 50, left: 100 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: '10', max: '90', stacked: true, reverse: false }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: '',
              legendOffset: 36,
              legendPosition: 'middle',
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: '온도( ºC)',
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            colors={{ scheme: 'pink_yellowGreen' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor', modifiers: [] }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 101,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 10,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemBackground: 'rgba(0, 0, 0, .03)',
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        )}
      </S.Header>
    </S.AppHeader>
  );
}

export default TemperatureVariant;
