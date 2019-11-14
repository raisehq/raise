import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Card } from '@raisehq/components';
import { fromWei } from 'web3-utils';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { getDates, getClosestIndexByDate, getAverage } from '../../utils/index';
import numeral from '../../commons/numeral';
import { verticalLinePlugin, chartBackground } from './plugins';
import { DAI_ADDRESS } from '../../commons/constants';

// Bypass typescript definitions in react-chartjs, missing Chart definition
const Chart = require('react-chartjs-2');

const datasetToGraph = (
  dataset: number[],
  rgb: string,
  label: string,
  fill: boolean,
  borderWidth: number,
  dashed: boolean,
  pointHover = Array()
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
  pointHoverRadius: 5,
  borderWidth: !borderWidth ? 1 : borderWidth,
  pointHoverBackgroundColor: pointHover.length
    ? pointHover.map(x => (x > 0 ? `rgba(${rgb},1)` : `rgba(${rgb},0)`))
    : `rgba(${rgb},1)`,
  pointHoverBorderColor: pointHover.length
    ? pointHover.map(x => (x > 0 ? `rgba(${rgb},1)` : `rgba(${rgb},0)`))
    : `rgba(${rgb},1)`,
  pointHoverBorderWidth: pointHover.length ? pointHover : 2,
  pointHitRadius: 10,
  data: [...dataset]
});

const options = {
  fullCompoundDataset: [0],
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 22,
      fontSize: 12,
      padding: 5
    }
  },
  chartArea: {
    backgroundColor: 'rgba(248,248,248,1)'
  },
  lineAtIndex: [0],
  onHover: (e, d) => {},
  layout: {
    padding: {
      left: 5,
      right: 5
    }
  },
  tooltips: {
    mode: 'index',
    intersect: false,
    enabled: false
  },
  hover: {
    mode: 'index',
    intersect: false
  },
  scales: {
    xAxes: [
      {
        ticks: {
          display: false
        },
        display: false
      }
    ],
    yAxes: [
      {
        ticks: {
          display: false
        },
        display: false
      }
    ]
  }
};

const getRaiseDataset = (dates, auctionStart, auctionEnd, maxInterest, minInterest) => {
  return dates.map(
    d => ((maxInterest- minInterest) * Math.abs(d - auctionStart)) / Math.abs(auctionEnd - auctionStart) + minInterest
  );
};

const APRGraph = ({ auction, calcs }: { auction: any; calcs: any }) => {
  const [compoundDataset, setCompoundDataset] = useState([0]);
  const [fullCompoundDataset, setFullCompoundDataset] = useState([0]);
  const [[currentLoanInterest, compoundInterest], setInterest] = useState(['0%', '0%']);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const medianCompoundRate = getAverage(fullCompoundDataset);
  const medianCompoundRateNumeral = numeral(medianCompoundRate / 100).format('0.00%');

  const { currentAPR } = calcs;

  const maxInterest = Number(fromWei(auction.maxInterestRate.toString())) * 12;
  const minInterest = auction.minInterestRate? Number(fromWei(auction.minInterestRate.toString())) * 12 : 0;
  const dateStart = new Date(auction.auctionStartTimestamp * 1000);
  const dateEnd = new Date(auction.auctionEndTimestamp * 1000);
  const dateNow = new Date();

  const arrayDays = getDates(dateStart, dateEnd);
  const nowIndex = getClosestIndexByDate(arrayDays, dateNow);

  const raiseDataset = getRaiseDataset(arrayDays, dateStart, dateEnd, maxInterest, minInterest);

  const raiseGraphData = datasetToGraph(raiseDataset, '0,218,158', 'Raise', false, 3, false);

  const compoundGraphData = datasetToGraph(
    compoundDataset,
    '119,151,170',
    'Compound',
    true,
    1,
    false
  );

  const avgGraphData = datasetToGraph(
    Array(30).fill(medianCompoundRate),
    '119,151,170',
    'Compound 30 day avg',
    false,
    2,
    true,
    [...Array(nowIndex + 1).fill(0), ...Array(30 - nowIndex - 1).fill(2)]
  );

  const graphData = {
    labels: arrayDays,
    datasets: [raiseGraphData, compoundGraphData, avgGraphData]
  };

  useAsyncEffect(async () => {
    Chart.Chart.plugins.register(verticalLinePlugin);
    Chart.Chart.plugins.register(chartBackground);

    /**
     * Compound DAI rate api call, latest 30 day
     */
    const response = await axios.get('https://api.compound.finance/api/v2/market_history/graph', {
      params: {
        asset: DAI_ADDRESS,
        min_block_timestamp: moment()
          .subtract(30, 'day')
          .unix(),
        max_block_timestamp: moment().unix(),
        num_buckets: 30
      }
    });

    if (
      response.status === 200 &&
      response.data.supply_rates &&
      response.data.supply_rates.length
    ) {
      const {
        data: { supply_rates: supplyRates }
      } = response;
      const { length } = supplyRates;
      const estDataset = supplyRates.map(x => x.rate * 100);
      const currentDataset = estDataset.slice(length - nowIndex - 1);
      setFullCompoundDataset(estDataset);
      setCompoundDataset(currentDataset);
      setInterest([currentAPR, numeral(currentDataset[nowIndex] / 100).format('0.00%')]);
    }
  }, []);

  options.lineAtIndex = [nowIndex];

  const updateHover = (event, datapoint) => {
    // Return current index to be able to show tooltip outside canvas
    if (!datapoint.length) {
      setSelectedDate(dateNow);
      setInterest([currentAPR, numeral(compoundDataset[nowIndex] / 100).format('0.00%')]);
      return;
    }
    // Return current index to be able to show tooltip outside canvas
    if (datapoint.length) {
      const index = datapoint[0]._index;
      setSelectedDate(arrayDays[index]);
      setInterest([
        numeral(raiseDataset[index] / 100).format('0.00%'),
        index > nowIndex
          ? medianCompoundRateNumeral
          : numeral(compoundDataset[index] / 100).format('0.00%')
      ]);
    }
  };

  options.onHover = updateHover;

  return (
    <>
      <Card.Grid>
        <Card.Row notop big title="Date" content={selectedDate.toLocaleDateString('es')} />
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
      </Card.Grid>
      <Line data={graphData} options={options} height={286} />
    </>
  );
};

export default APRGraph;
