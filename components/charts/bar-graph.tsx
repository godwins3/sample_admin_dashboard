'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

export const description = 'An interactive bar chart';

const chartData = [
  { date: '2024-04-01', withdrawals: 222, sales: 150 },
  { date: '2024-04-02', withdrawals: 97, sales: 180 },
  { date: '2024-04-03', withdrawals: 167, sales: 120 },
  { date: '2024-04-04', withdrawals: 242, sales: 260 },
  { date: '2024-04-05', withdrawals: 373, sales: 290 },
  { date: '2024-04-06', withdrawals: 301, sales: 340 },
  { date: '2024-04-07', withdrawals: 245, sales: 180 },
  { date: '2024-04-08', withdrawals: 409, sales: 320 },
  { date: '2024-04-09', withdrawals: 59, sales: 110 },
  { date: '2024-04-10', withdrawals: 261, sales: 190 },
  { date: '2024-04-11', withdrawals: 327, sales: 350 },
  { date: '2024-04-12', withdrawals: 292, sales: 210 },
  { date: '2024-04-13', withdrawals: 342, sales: 380 },
  { date: '2024-04-14', withdrawals: 137, sales: 220 },
  { date: '2024-04-15', withdrawals: 120, sales: 170 },
  { date: '2024-04-16', withdrawals: 138, sales: 190 },
  { date: '2024-04-17', withdrawals: 446, sales: 360 },
  { date: '2024-04-18', withdrawals: 364, sales: 410 },
  { date: '2024-04-19', withdrawals: 243, sales: 180 },
  { date: '2024-04-20', withdrawals: 89, sales: 150 },
  { date: '2024-04-21', withdrawals: 137, sales: 200 },
  { date: '2024-04-22', withdrawals: 224, sales: 170 },
  { date: '2024-04-23', withdrawals: 138, sales: 230 },
  { date: '2024-04-24', withdrawals: 387, sales: 290 },
  { date: '2024-04-25', withdrawals: 215, sales: 250 },
  { date: '2024-04-26', withdrawals: 75, sales: 130 },
  { date: '2024-04-27', withdrawals: 383, sales: 420 },
  { date: '2024-04-28', withdrawals: 122, sales: 180 },
  { date: '2024-04-29', withdrawals: 315, sales: 240 },
  { date: '2024-04-30', withdrawals: 454, sales: 380 },
  { date: '2024-05-01', withdrawals: 165, sales: 220 },
  { date: '2024-05-02', withdrawals: 293, sales: 310 },
  { date: '2024-05-03', withdrawals: 247, sales: 190 },
  { date: '2024-05-04', withdrawals: 385, sales: 420 },
  { date: '2024-05-05', withdrawals: 481, sales: 390 },
  { date: '2024-05-06', withdrawals: 498, sales: 520 },
  { date: '2024-05-07', withdrawals: 388, sales: 300 },
  { date: '2024-05-08', withdrawals: 149, sales: 210 },
  { date: '2024-05-09', withdrawals: 227, sales: 180 },
  { date: '2024-05-10', withdrawals: 293, sales: 330 },
  { date: '2024-05-11', withdrawals: 335, sales: 270 },
  { date: '2024-05-12', withdrawals: 197, sales: 240 },
  { date: '2024-05-13', withdrawals: 197, sales: 160 },
  { date: '2024-05-14', withdrawals: 448, sales: 490 },
  { date: '2024-05-15', withdrawals: 473, sales: 380 },
  { date: '2024-05-16', withdrawals: 338, sales: 400 },
  { date: '2024-05-17', withdrawals: 499, sales: 420 },
  { date: '2024-05-18', withdrawals: 315, sales: 350 },
  { date: '2024-05-19', withdrawals: 235, sales: 180 },
  { date: '2024-05-20', withdrawals: 177, sales: 230 },
  { date: '2024-05-21', withdrawals: 82, sales: 140 },
  { date: '2024-05-22', withdrawals: 81, sales: 120 },
  { date: '2024-05-23', withdrawals: 252, sales: 290 },
  { date: '2024-05-24', withdrawals: 294, sales: 220 },
  { date: '2024-05-25', withdrawals: 201, sales: 250 },
  { date: '2024-05-26', withdrawals: 213, sales: 170 },
  { date: '2024-05-27', withdrawals: 420, sales: 460 },
  { date: '2024-05-28', withdrawals: 233, sales: 190 },
  { date: '2024-05-29', withdrawals: 78, sales: 130 },
  { date: '2024-05-30', withdrawals: 340, sales: 280 },
  { date: '2024-05-31', withdrawals: 178, sales: 230 },
  { date: '2024-06-01', withdrawals: 178, sales: 200 },
  { date: '2024-06-02', withdrawals: 470, sales: 410 },
  { date: '2024-06-03', withdrawals: 103, sales: 160 },
  { date: '2024-06-04', withdrawals: 439, sales: 380 },
  { date: '2024-06-05', withdrawals: 88, sales: 140 },
  { date: '2024-06-06', withdrawals: 294, sales: 250 },
  { date: '2024-06-07', withdrawals: 323, sales: 370 },
  { date: '2024-06-08', withdrawals: 385, sales: 320 },
  { date: '2024-06-09', withdrawals: 438, sales: 480 },
  { date: '2024-06-10', withdrawals: 155, sales: 200 },
  { date: '2024-06-11', withdrawals: 92, sales: 150 },
  { date: '2024-06-12', withdrawals: 492, sales: 420 },
  { date: '2024-06-13', withdrawals: 81, sales: 130 },
  { date: '2024-06-14', withdrawals: 426, sales: 380 },
  { date: '2024-06-15', withdrawals: 307, sales: 350 },
  { date: '2024-06-16', withdrawals: 371, sales: 310 },
  { date: '2024-06-17', withdrawals: 475, sales: 520 },
  { date: '2024-06-18', withdrawals: 107, sales: 170 },
  { date: '2024-06-19', withdrawals: 341, sales: 290 },
  { date: '2024-06-20', withdrawals: 408, sales: 450 },
  { date: '2024-06-21', withdrawals: 169, sales: 210 },
  { date: '2024-06-22', withdrawals: 317, sales: 270 },
  { date: '2024-06-23', withdrawals: 480, sales: 530 },
  { date: '2024-06-24', withdrawals: 132, sales: 180 },
  { date: '2024-06-25', withdrawals: 141, sales: 190 },
  { date: '2024-06-26', withdrawals: 434, sales: 380 },
  { date: '2024-06-27', withdrawals: 448, sales: 490 },
  { date: '2024-06-28', withdrawals: 149, sales: 200 },
  { date: '2024-06-29', withdrawals: 103, sales: 160 },
  { date: '2024-06-30', withdrawals: 446, sales: 400 }
];

const chartConfig = {
  views: {
    label: 'Trips'
  },
  withdrawals: {
    label: 'withdrawals',
    color: 'hsl(var(--chart-1))'
  },
  sales: {
    label: 'sales',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export function BarGraph() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('withdrawals');

  const total = React.useMemo(
    () => ({
      withdrawals: chartData.reduce((acc, curr) => acc + curr.withdrawals, 0),
      sales: chartData.reduce((acc, curr) => acc + curr.sales, 0)
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Trips</CardTitle>
          <CardDescription>
            Showing total trips for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {['withdrawals', 'sales'].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
