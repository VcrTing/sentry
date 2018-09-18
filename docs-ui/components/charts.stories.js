import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {number, boolean, text, array} from '@storybook/addon-knobs';

import LineChart from 'app/components/charts/lineChart';
import BarChart from 'app/components/charts/barChart';

storiesOf('Charts|Playground')
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
                {value: null, name: 'Se p 5th'},
                {value: 1, name: 'Sep 6th'},
              ],
            },
          ]}
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
            type: text('Legend Type', 'scroll'),
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
    'Bar Chart w/ Legend Knobs',
    withInfo('Description')(() => (
      <div style={{backgroundColor: 'white', padding: 12}}>
        <BarChart
          stacked={boolean('stacked', true)}
          series={[
            {
              seriesName: text('Line 1', 'MultipleObjectsReturned: get() returned more than one TagValue -- it returned 2! sentry.tasks.index_event_tags'),
              data: [
                {value: 18, name: 'Aug 15th'},
                {value: 31, name: 'Aug 16th'},
                {value: 9, name: 'Aug 22nd'},
                {value: 100, name: 'Sep 5th'},
                {value: 12, name: 'Sep 6th'},
              ],
            },
            {
              seriesName: text('Line 2', 'ExpiredSignatureError: Signature has expired /plugins/jira-ac/plugin'),
              data: [
                {value: 84, name: 'Aug 15th'},
                {value: 1, name: 'Aug 16th'},
                {value: 28, name: 'Aug 22nd'},
                {value: 1, name: 'Sep 5th'},
                {value: 1, name: 'Sep 6th'},
              ],
            },
            {
              seriesName: text('Line 3', 'MultipleObjectsReturned: get() returned more than one TagValue -- it returned 3! sentry.tasks.index_event_tags'),
              data: [
                {value: 108, name: 'Aug 15th'},
                {value: 1, name: 'Aug 16th'},
                {value: 36, name: 'Aug 22nd'},
                {value: null, name: 'Sep 5th'},
                {value: 1, name: 'Sep 6th'},
              ],
            },
          ]}
          tooltip={{
            filter: value => value !== null,
            truncate: 50,
          }}
          legend={{
            show: boolean('LEGEND KNOBS BELOW:\n\n show legend', true),
            data: [
              text('Line 1 Legend (match Line 1)', 'MultipleObjectsReturned: get() returned more than one TagValue -- it returned 2! sentry.tasks.index_event_tags'),
              text('Line 2 Legend (match Line 2)', 'ExpiredSignatureError: Signature has expired /plugins/jira-ac/plugin'),
              text('Line 3 Legend (match Line 3)', 'MultipleObjectsReturned: get() returned more than one TagValue -- it returned 3! sentry.tasks.index_event_tags'),
            ],
            padding: number('Legend Padding', 0),
            type: text('Legend Type', 'scroll'),
            orient: text('Legend Orient (vertical or horizontal)', 'horizontal'),

            align: text('Legend Align (left, right)', 'auto'),
            left: text('Legend Left (left, right, center)', 'center'),
            right: text('Legend Right (20 or 20%)', 'auto'),
            top: text('Legend top (top, middle, bottom)', 'auto'),
            bottom: text('Legend Bottom (20 or 20%)', 'auto'),
            width: text('Legend Width (string or number)', 'auto'),
            height: text('Legend Height', 'auto'),
            scrollDataIndex: number('Legend Scroll Data Index', 0),
            pageButtonItemGap: number('Legend Scroll Page Button Item gap', 5),
            pageButtonGap: number(
              'Legend Scroll Gap btwn buttons and legend items',
              null
            ),
            pageButtonPosition: text('Legend Scroll Page Button Position (start, end)', 'end'),
            pageFormatter: text(
              'Legend Scroll Only: Page info formatter where {current}/{total} by default. total is total page number',
              'current: 1, total: 3'
            ),

          }}
          height={number('height', 300)}
          grid={{
            top: text('GRID KNOBS:\ntop', 24),
            bottom: text('bottom', 40),
            left: text('left', '10%'),
            right: text('right', '10%'),
          }}
        />
      </div>
    ))
  );
