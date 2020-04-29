import React, { useState, useRef, useEffect } from 'react';
import debounce from 'lodash/debounce';
import styled from 'styled-components';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import axios from 'axios';
import { Icon } from 'semantic-ui-react';
import BN from 'bn.js';
import { fromDecimal } from '../../utils/web3-utils';
import Card from '../Card';
import useScript from '../../hooks/useScript';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { getDates, getClosestIndexByDate, getAverage } from './graphUtils';
import numeral from '../../commons/numeral';
import { chartBackground, todayVerticalLine } from './plugins';
import { DAI_ADDRESS } from '../../commons/constants';

const CHART_CDN = 'https://cdn.jsdelivr.net/npm/chart.js@2.8.0';
const MOMENT_CDN =
  'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js';

const Header = styled.div`
  padding-top: 22px;
  text-align: center;
`;

const Subheader = styled(Card.Grid)`
  margin: 20px 0px;
`;

const CloseContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`;

interface APRGraphProps {
  maxInterestRate: BN;
  minInterestRate: BN;
  auctionStartTimestamp: number;
  auctionEndTimestamp: number;
  currentAPR: string;
  onOpenGraph: any;
}

const ChartWrapper = styled.div`
  padding: 0px 10px;
  height: 250px;
`;

const datasetToGraph = (
  dataset: number[],
  rgb: string,
  label: string,
  fill: boolean,
  borderWidth: number,
  dashed: boolean,
  pointHover: any[],
  pointRadius: number
) => ({
  label,
  fill,
  lineTension: 0.4,
  backgroundColor: `rgba(${rgb},0.4)`,
  borderColor: `rgba(${rgb},1)`,
  borderCapStyle: 'butt',
  borderDash: !dashed ? [] : [10, 5],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderColor: `rgba(${rgb},1)`,
  pointBackgroundColor: `rgba(${rgb},1)`,
  pointBorderWidth: 0,
  pointRadius: 0,
  pointHoverRadius: pointRadius,
  borderWidth: !borderWidth ? 1 : borderWidth,
  pointHoverBackgroundColor: pointHover.length
    ? pointHover.map(x => (x > 0 ? `rgba(${rgb},1)` : `rgba(${rgb},0)`))
    : `rgba(${rgb},1)`,
  pointHoverBorderColor: pointHover.length
    ? pointHover.map(x => (x > 0 ? `rgba(${rgb},1)` : `rgba(${rgb},0)`))
    : `rgba(${rgb},1)`,
  pointHoverBorderWidth: pointHover.length ? pointHover : 2,
  pointHitRadius: 10,
  data: [...dataset],
});

const options: any = {
  fullCompoundDataset: [0],
  legend: {
    display: false,
    position: 'top',
    labels: {
      boxWidth: 22,
      fontSize: 12,
      padding: 5,
    },
  },
  chartArea: {
    backgroundColor: 'rgba(248,248,248,1)',
  },
  lineAtIndex: [0],
  onHover: () => null,
  layout: {
    padding: {
      left: 5,
      right: 5,
    },
  },
  tooltips: {
    mode: 'index',
    intersect: false,
    enabled: false,
  },
  hover: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    xAxes: [
      {
        ticks: {
          display: false,
        },
        display: false,
      },
    ],
    yAxes: [
      {
        ticks: {
          display: false,
          min: 0,
          max: 21,
          stepSize: 1,
        },
        display: false,
      },
    ],
  },
};

const getRaiseDataset = (
  dates: Date[],
  auctionStart: Date,
  auctionEnd: Date,
  maxInterest: number,
  minInterest: number
) =>
  dates.map(
    (d: Date) =>
      ((maxInterest - minInterest) *
        Math.abs(d.valueOf() - auctionStart.valueOf())) /
        Math.abs(auctionEnd.valueOf() - auctionStart.valueOf()) +
      minInterest
  );

const APRGraph = ({
  maxInterestRate,
  minInterestRate,
  auctionStartTimestamp,
  auctionEndTimestamp,
  currentAPR,
  onOpenGraph,
}: APRGraphProps) => {
  const chartContainer = useRef(null);
  const [chartLoaded] = useScript(CHART_CDN);
  const [momentLoaded] = useScript(MOMENT_CDN);
  const [chartInstance, setChartInstance] = useState(null);
  const [compoundDataset, setCompoundDataset] = useState([0]);
  const [fullCompoundDataset, setFullCompoundDataset] = useState([0]);
  const [[currentLoanInterest, compoundInterest], setInterest] = useState([
    '0%',
    '0%',
  ]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const medianCompoundRate = getAverage(fullCompoundDataset);
  const medianCompoundRateNumeral = numeral(medianCompoundRate / 100).format(
    '0.00%'
  );

  const maxInterest = Number(fromDecimal(maxInterestRate.toString())) * 12;
  const minInterest = minInterestRate
    ? Number(fromDecimal(minInterestRate.toString())) * 12
    : 0;
  const dateStart = new Date(auctionStartTimestamp * 1000);
  const dateEnd = new Date(auctionEndTimestamp * 1000);
  const dateNow = new Date();

  const arrayDays = getDates(dateStart, dateEnd);
  const nowIndex = getClosestIndexByDate(arrayDays, dateNow);

  const raiseDataset = getRaiseDataset(
    arrayDays,
    dateStart,
    dateEnd,
    maxInterest,
    minInterest
  );

  const raiseGraphData = datasetToGraph(
    raiseDataset,
    '0, 218, 158',
    'Raise',
    false,
    3,
    false,
    [],
    5
  );

  const compoundGraphData = datasetToGraph(
    compoundDataset,
    '119,151,170',
    'Compound',
    true,
    1,
    false,
    [],
    3
  );

  const avgGraphData = datasetToGraph(
    Array(arrayDays.length).fill(medianCompoundRate),
    '119,151,170',
    'Compound 30 day avg',
    false,
    2,
    true,
    [],
    3
  );

  const graphData = {
    labels: arrayDays,
    datasets: [raiseGraphData, compoundGraphData, avgGraphData],
  };

  useAsyncEffect(async () => {
    if (!chartLoaded || !momentLoaded) {
      return;
    }
    window.Chart.pluginService.register(todayVerticalLine);
    window.Chart.pluginService.register(chartBackground);

    /**
     * Compound DAI rate api call, latest 30 day
     */
    const response = await axios.get(
      'https://api.compound.finance/api/v2/market_history/graph',
      {
        params: {
          asset: DAI_ADDRESS,
          min_block_timestamp: dayjs()
            .subtract(arrayDays.length, 'day')
            .unix(),
          max_block_timestamp: dayjs().unix(),
          num_buckets: arrayDays.length,
        },
      }
    );

    if (
      response.status === 200 &&
      response.data.supply_rates &&
      response.data.supply_rates.length
    ) {
      const {
        data: { supply_rates: supplyRates },
      } = response;
      const { length } = supplyRates;
      const estDataset = supplyRates.map(
        ({ rate }: { rate: number }) => rate * 100
      );

      const currentDataset = estDataset.slice(length - nowIndex - 1);
      setFullCompoundDataset(estDataset);
      setCompoundDataset(currentDataset);
      setInterest([
        currentAPR,
        numeral(currentDataset[nowIndex] / 100).format('0.00%'),
      ]);
    }
  }, [chartLoaded, momentLoaded]);

  useEffect(() => {
    if (
      !chartInstance &&
      chartLoaded &&
      momentLoaded &&
      chartContainer &&
      chartContainer.current &&
      compoundDataset.length > 1
    ) {
      options.lineAtIndex = [nowIndex];

      const newChartInstance = new window.Chart(chartContainer.current, {
        type: 'line',
        data: graphData,
        options,
      });
      setChartInstance(newChartInstance);
    }
  }, [
    chartInstance,
    chartLoaded,
    momentLoaded,
    chartContainer,
    compoundDataset,
  ]);

  const getFormatDate = date => {
    dayjs.extend(localizedFormat);
    return dayjs(date).format('LL');
  };

  const updateHover = (_event: any, datapoint: any[]) => {
    // Return current index to be able to show tooltip outside canvas
    if (!datapoint.length) {
      setSelectedDate(dateNow);
      setInterest([
        currentAPR,
        numeral(compoundDataset[nowIndex] / 100).format('0.00%'),
      ]);
      return;
    }
    // Return current index to be able to show tooltip outside canvas
    if (datapoint.length) {
      // eslint-disable-next-line
      const index = datapoint[0]._index;
      setSelectedDate(arrayDays[index]);

      const currentAPRGraph =
        index === nowIndex
          ? currentAPR
          : numeral(raiseDataset[index] / 100).format('0.00%');

      setInterest([
        currentAPRGraph,
        index > nowIndex
          ? medianCompoundRateNumeral
          : numeral(compoundDataset[index] / 100).format('0.00%'),
      ]);
    }
  };

  options.onHover = debounce(updateHover);

  return (
    <>
      <Header>
        <span>Compare APRs</span>
      </Header>
      <CloseContainer>
        <Icon name="close" size="large" onClick={onOpenGraph} />
      </CloseContainer>
      <Subheader>
        <Card.Row notop big content={getFormatDate(selectedDate)} />
        <Card.Vertical />
        <Card.Row
          notop
          big
          title="Raise"
          content={currentLoanInterest}
          contentColor={raiseGraphData.borderColor}
        />
        <Card.Vertical />
        <Card.Row
          notop
          big
          title="Compound"
          content={compoundInterest}
          contentColor={compoundGraphData.borderColor}
        />
      </Subheader>
      <ChartWrapper>
        {chartLoaded && momentLoaded && (
          <canvas ref={chartContainer} height={250} />
        )}
      </ChartWrapper>
    </>
  );
};

export default APRGraph;
