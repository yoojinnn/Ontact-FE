import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import data from './data';

// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.
const Line = () => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 100 }}
    xScale={{ type: 'point' }}
    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
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
);

export default Line;
