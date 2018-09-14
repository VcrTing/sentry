import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {number, boolean, text} from '@storybook/addon-knobs';

import LineChart from 'app/components/charts/lineChart';
import BarChart from 'app/components/charts/barChart';

const stories = storiesOf('Charts Playground (Echarts)');
stories
  .add(
    'Line Chart',
    withInfo('Description')(() => (
      <div style={{backgroundColor: 'white', padding: 12}}>
        <LineChart
          series={[
            {
              seriesName: text('Line 1', 'sentry:user'),
              data: [
                {value: 18, name: 'Aug 15th'},
                {value: 31, name: 'Aug 16th'},
                {value: 9, name: 'Aug 22nd'},
                {value: 100, name: 'Sep 5th'},
                {value: 12, name: 'Sep 6th'},
              ],
            },
            {
              seriesName: text('Line 2', 'environment'),
              data: [
                {value: 84, name: 'Aug 15th'},
                {value: 1, name: 'Aug 16th'},
                {value: 28, name: 'Aug 22nd'},
                {value: 1, name: 'Sep 5th'},
                {value: 1, name: 'Sep 6th'},
              ],
            },
            {
              seriesName: text('Line 3', 'browser'),
              data: [
                {value: 108, name: 'Aug 15th'},
                {value: 1, name: 'Aug 16th'},
                {value: 36, name: 'Aug 22nd'},
                {value: null, name: 'Sep 5th'},
                {value: 1, name: 'Sep 6th'},
              ],
            },
          ]}
          showLegend={boolean('Legend', true)}
          tooltip={{
            filter: value => value !== null,
            truncate: 80,
          }}
          legend={{
            data: [
              text('Line 1 Legend (match Line 1)', 'sentry:user'),
              text('Line 2 Legend (match Line 2)', 'environment'),
              text('Line 3 Legend (match Line 3)', 'browser'),
            ],
          }}
          height={number('height', 300)}
          grid={{
            top: text('grid:top', 24),
            bottom: text('grid:bottom', 40),
            left: text('grid:left', '10%'),
            right: text('grid:right', '10%'),
          }}
        />
      </div>
    ))
  )
  .add(
    'Bar Chart',
    withInfo('Description')(() => (
      <div style={{backgroundColor: 'white', padding: 12}}>
        <BarChart
          stacked={boolean('stacked', true)}
          series={[
            {
              seriesName: text('Line 1', 'sentry:user'),
              data: [
                {value: 18, name: 'Aug 15th'},
                {value: 31, name: 'Aug 16th'},
                {value: 9, name: 'Aug 22nd'},
                {value: 100, name: 'Sep 5th'},
                {value: 12, name: 'Sep 6th'},
              ],
            },
            {
              seriesName: text('Line 2', 'environment'),
              data: [
                {value: 84, name: 'Aug 15th'},
                {value: 1, name: 'Aug 16th'},
                {value: 28, name: 'Aug 22nd'},
                {value: 1, name: 'Sep 5th'},
                {value: 1, name: 'Sep 6th'},
              ],
            },
            {
              seriesName: text('Line 3', 'browser'),
              data: [
                {value: 108, name: 'Aug 15th'},
                {value: 1, name: 'Aug 16th'},
                {value: 36, name: 'Aug 22nd'},
                {value: null, name: 'Sep 5th'},
                {value: 1, name: 'Sep 6th'},
              ],
            },
          ]}
          showLegend={boolean('Legend', true)}
          tooltip={{
            filter: value => value !== null,
            truncate: 80,
          }}
          legend={{
            data: [
              text('Line 1 Legend (match Line 1)', 'sentry:user'),
              text('Line 2 Legend (match Line 2)', 'environment'),
              text('Line 3 Legend (match Line 3)', 'browser'),
            ],
          }}
          height={number('height', 300)}
          grid={{
            top: text('grid:top', 24),
            bottom: text('grid:bottom', 40),
            left: text('grid:left', '10%'),
            right: text('grid:right', '10%'),
          }}
        />
      </div>
    ))
  );
