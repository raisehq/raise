/* eslint-disable no-underscore-dangle */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
export const verticalLinePlugin = {
  afterDatasetsDraw: function(chart, easing) {
    if (chart.tooltip._active && chart.tooltip._active.length) {
      const activePoint = chart.tooltip._active[0];
      const ctx = chart.ctx;
      const x = activePoint.tooltipPosition().x;
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
  beforeDraw: function(chart, easing) {
    if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
      const ctx = chart.chart.ctx;
      const chartArea = chart.chartArea;

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
  afterDatasetsDraw: function(chart, easing) {
    const meta = chart.getDatasetMeta(0);
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
    chart.ctx.lineWidth = 1;
    chart.ctx.strokeStyle = '#ADADAD';

    // write TODAY
    chart.ctx.textAlign = 'center';
    chart.ctx.fillStyle = '#7797AA';
    chart.ctx.fillText('Today', todayX, topY + 20);
    chart.ctx.stroke();
    chart.ctx.restore();
  }
};
