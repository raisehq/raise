export const verticalLinePlugin = {
  afterDatasetsDraw: (chart: any) => {
    // eslint-disable-next-line
    if (chart.tooltip._active && chart.tooltip._active.length) {
      // eslint-disable-next-line
      const activePoint = chart.tooltip._active[0];
      const { ctx } = chart;
      const { x } = activePoint.tooltipPosition();
      const topY = chart.scales['y-axis-0'].top;
      const bottomY = chart.scales['y-axis-0'].bottom;

      // draw line
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#C8C8C8';
      ctx.stroke();
      ctx.restore();
    }
  }
};

export const chartBackground = {
  beforeDraw: (chart: any) => {
    if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
      const {
        chartArea,
        chart: { ctx }
      } = chart;

      ctx.save();
      ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
      ctx.fillRect(
        chartArea.left,
        chartArea.top,
        chartArea.right - chartArea.left,
        chartArea.bottom - chartArea.top
      );
      ctx.restore();
    }
  }
};

export const todayVerticalLine = {
  afterDatasetsDraw: (chart: any) => {
    const meta = chart.getDatasetMeta(0);
    // eslint-disable-next-line
    const x = meta.data[chart.options.lineAtIndex[0]]._model.x;

    let todayX;
    const todayOverX = 25;
    if (chart.options.lineAtIndex[0] + 1 <= chart.data.datasets[0].data.length / 2) {
      todayX = x + todayOverX;
    } else {
      todayX = x - todayOverX;
    }

    const topY = chart.scales['y-axis-0'].top;
    const bottomY = chart.scales['y-axis-0'].bottom;

    // draw line
    chart.ctx.save();
    chart.ctx.beginPath();
    chart.ctx.moveTo(x, topY);
    chart.ctx.lineTo(x, bottomY);
    // eslint-disable-next-line
    chart.ctx.lineWidth = 1;
    // eslint-disable-next-line
    chart.ctx.strokeStyle = '#ADADAD';

    // write TODAY
    // eslint-disable-next-line
    chart.ctx.textAlign = 'center';
    // eslint-disable-next-line
    chart.ctx.fillStyle = '#7797AA';
    chart.ctx.fillText('Today', todayX, topY + 20);
    chart.ctx.stroke();
    chart.ctx.restore();
  }
};
