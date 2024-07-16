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
  { date: '2024-04-01', expenditure: 222, revenue: 150 },
  { date: '2024-04-02', expenditure: 97, revenue: 180 },
  { date: '2024-04-03', expenditure: 167, revenue: 120 },
  { date: '2024-04-04', expenditure: 242, revenue: 260 },
  { date: '2024-04-05', expenditure: 373, revenue: 290 },
  { date: '2024-04-06', expenditure: 301, revenue: 340 },
  { date: '2024-04-07', expenditure: 245, revenue: 180 },
  { date: '2024-04-08', expenditure: 409, revenue: 320 },
  { date: '2024-04-09', expenditure: 59, revenue: 110 },
  { date: '2024-04-10', expenditure: 261, revenue: 190 },
  { date: '2024-04-11', expenditure: 327, revenue: 350 },
  { date: '2024-04-12', expenditure: 292, revenue: 210 },
  { date: '2024-04-13', expenditure: 342, revenue: 380 },
  { date: '2024-04-14', expenditure: 137, revenue: 220 },
  { date: '2024-04-15', expenditure: 120, revenue: 170 },
  { date: '2024-04-16', expenditure: 138, revenue: 190 },
  { date: '2024-04-17', expenditure: 446, revenue: 360 },
  { date: '2024-04-18', expenditure: 364, revenue: 410 },
  { date: '2024-04-19', expenditure: 243, revenue: 180 },
  { date: '2024-04-20', expenditure: 89, revenue: 150 },
  { date: '2024-04-21', expenditure: 137, revenue: 200 },
  { date: '2024-04-22', expenditure: 224, revenue: 170 },
  { date: '2024-04-23', expenditure: 138, revenue: 230 },
  { date: '2024-04-24', expenditure: 387, revenue: 290 },
  { date: '2024-04-25', expenditure: 215, revenue: 250 },
  { date: '2024-04-26', expenditure: 75, revenue: 130 },
  { date: '2024-04-27', expenditure: 383, revenue: 420 },
  { date: '2024-04-28', expenditure: 122, revenue: 180 },
  { date: '2024-04-29', expenditure: 315, revenue: 240 },
  { date: '2024-04-30', expenditure: 454, revenue: 380 },
  { date: '2024-05-01', expenditure: 165, revenue: 220 },
  { date: '2024-05-02', expenditure: 293, revenue: 310 },
  { date: '2024-05-03', expenditure: 247, revenue: 190 },
  { date: '2024-05-04', expenditure: 385, revenue: 420 },
  { date: '2024-05-05', expenditure: 481, revenue: 390 },
  { date: '2024-05-06', expenditure: 498, revenue: 520 },
  { date: '2024-05-07', expenditure: 388, revenue: 300 },
  { date: '2024-05-08', expenditure: 149, revenue: 210 },
  { date: '2024-05-09', expenditure: 227, revenue: 180 },
  { date: '2024-05-10', expenditure: 293, revenue: 330 },
  { date: '2024-05-11', expenditure: 335, revenue: 270 },
  { date: '2024-05-12', expenditure: 197, revenue: 240 },
  { date: '2024-05-13', expenditure: 197, revenue: 160 },
  { date: '2024-05-14', expenditure: 448, revenue: 490 },
  { date: '2024-05-15', expenditure: 473, revenue: 380 },
  { date: '2024-05-16', expenditure: 338, revenue: 400 },
  { date: '2024-05-17', expenditure: 499, revenue: 420 },
  { date: '2024-05-18', expenditure: 315, revenue: 350 },
  { date: '2024-05-19', expenditure: 235, revenue: 180 },
  { date: '2024-05-20', expenditure: 177, revenue: 230 },
  { date: '2024-05-21', expenditure: 82, revenue: 140 },
  { date: '2024-05-22', expenditure: 81, revenue: 120 },
  { date: '2024-05-23', expenditure: 252, revenue: 290 },
  { date: '2024-05-24', expenditure: 294, revenue: 220 },
  { date: '2024-05-25', expenditure: 201, revenue: 250 },
  { date: '2024-05-26', expenditure: 213, revenue: 170 },
  { date: '2024-05-27', expenditure: 420, revenue: 460 },
  { date: '2024-05-28', expenditure: 233, revenue: 190 },
  { date: '2024-05-29', expenditure: 78, revenue: 130 },
  { date: '2024-05-30', expenditure: 340, revenue: 280 },
  { date: '2024-05-31', expenditure: 178, revenue: 230 },
  { date: '2024-06-01', expenditure: 178, revenue: 200 },
  { date: '2024-06-02', expenditure: 470, revenue: 410 },
  { date: '2024-06-03', expenditure: 103, revenue: 160 },
  { date: '2024-06-04', expenditure: 439, revenue: 380 },
  { date: '2024-06-05', expenditure: 88, revenue: 140 },
  { date: '2024-06-06', expenditure: 294, revenue: 250 },
  { date: '2024-06-07', expenditure: 323, revenue: 370 },
  { date: '2024-06-08', expenditure: 385, revenue: 320 },
  { date: '2024-06-09', expenditure: 438, revenue: 480 },
  { date: '2024-06-10', expenditure: 155, revenue: 200 },
  { date: '2024-06-11', expenditure: 92, revenue: 150 },
  { date: '2024-06-12', expenditure: 492, revenue: 420 },
  { date: '2024-06-13', expenditure: 81, revenue: 130 },
  { date: '2024-06-14', expenditure: 426, revenue: 380 },
  { date: '2024-06-15', expenditure: 307, revenue: 350 },
  { date: '2024-06-16', expenditure: 371, revenue: 310 },
  { date: '2024-06-17', expenditure: 475, revenue: 520 },
  { date: '2024-06-18', expenditure: 107, revenue: 170 },
  { date: '2024-06-19', expenditure: 341, revenue: 290 },
  { date: '2024-06-20', expenditure: 408, revenue: 450 },
  { date: '2024-06-21', expenditure: 169, revenue: 210 },
  { date: '2024-06-22', expenditure: 317, revenue: 270 },
  { date: '2024-06-23', expenditure: 480, revenue: 530 },
  { date: '2024-06-24', expenditure: 132, revenue: 180 },
  { date: '2024-06-25', expenditure: 141, revenue: 190 },
  { date: '2024-06-26', expenditure: 434, revenue: 380 },
  { date: '2024-06-27', expenditure: 448, revenue: 490 },
  { date: '2024-06-28', expenditure: 149, revenue: 200 },
  { date: '2024-06-29', expenditure: 103, revenue: 160 },
  { date: '2024-06-30', expenditure: 446, revenue: 400 }
];

const chartConfig = {
  views: {
    label: 'Trips'
  },
  expenditure: {
    label: 'expenditure',
    color: 'hsl(var(--chart-1))'
  },
  revenue: {
    label: 'revenue',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export function BarGraph() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('expenditure');

  const total = React.useMemo(
    () => ({
      expenditure: chartData.reduce((acc, curr) => acc + curr.expenditure, 0),
      revenue: chartData.reduce((acc, curr) => acc + curr.revenue, 0)
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
          {['expenditure', 'revenue'].map((key) => {
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
