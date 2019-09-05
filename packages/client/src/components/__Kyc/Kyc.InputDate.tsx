// TODO : IS a old code
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerStyled: any = styled.div`
  &&& {
    display: inline-flex;
  }
`;

const SelectStyled: any = styled.select`
  min-width: 30px;
  &&&:first-child {
    margin-left: 0px;
  }
  &&& {
    height: 38px !important;
    width: ${(props: any) => props.width || 70}px;
    margin-left: 4px;
    float: left;
    ${(props: any) => {
      if (props.error) {
        return `background: #fff6f6;
            border-color: #e0b4b4;
            color: #9f3a38;
            border-radius: '';
            box-shadow: none;
      `;
      } else return '';
    }};
  }
`;

const range = (size = 1, startAt = 0) =>
  [...Array(size).keys()].map(i => i + startAt);

const calculateMonthDays = (year, month) => {
  const d = new Date(parseInt(year), parseInt(month), 0);
  return d.getDate();
};

class InlineDatePicker extends PureComponent {
  static propTypes = {
    dateChange: PropTypes.func.isRequired,
    error: PropTypes.bool,
    date: PropTypes.instanceOf(Date)
  };

  static defaultProps = {
    error: false
  };

  constructor(props) {
    super(props);

    const currentDate = props.date || new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const maxMonths = 12;
    const maxDays = calculateMonthDays(currentYear, currentMonth);
    const diffYearRange = 100;
    const yearRangeStart = currentYear - diffYearRange;
    const totalYears = new Date().getFullYear() - yearRangeStart;
    this.state = {
      maxDays,
      rangeYears: range(totalYears, yearRangeStart),
      rangeMonths: range(maxMonths, 1),
      year: props.date ? currentYear : currentYear - 50,
      month: currentMonth,
      day: currentDay
    };
  }

  handleChanges = input => e => {
    e.preventDefault();
    if (e && e.target && e.target.value) {
      const { dateChange }: any = this.props;
      const { day, year, month }: any = this.state;
      const { value } = e.target;
      const newState: any = {
        [input]: value
      };
      if (input === 'month' || input === 'year') {
        let maxDays = 0;
        if (input === 'month') {
          newState.year = year;
          maxDays = calculateMonthDays(year, value);
        }
        if (input === 'year') {
          newState.month = month;
          maxDays = calculateMonthDays(value, month);
        }
        newState.maxDays = maxDays;
        newState.day = day;

        if (maxDays <= day) newState.day = maxDays;
      }

      this.setState(newState, () => {
        const { year, month, day }: any = this.state;
        dateChange({
          target: {
            date: new Date(year, month, day),
            value: `${year}/${month}/${day}`
          }
        });
      });
    } // No target
  };

  render() {
    const {
      maxDays,
      rangeYears,
      rangeMonths,
      day,
      month,
      year
    }: any = this.state;
    const { error }: any = this.props;

    return (
      <ContainerStyled>
        <SelectStyled
          value={day}
          onChange={this.handleChanges('day')}
          className="ui dropdown select-day"
          error={error}
        >
          {range(maxDays, 1).map(s => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </SelectStyled>
        <SelectStyled
          value={month}
          onChange={this.handleChanges('month')}
          className="ui dropdown select-month"
          error={error}
        >
          {rangeMonths.map(s => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </SelectStyled>
        <SelectStyled
          value={year}
          onChange={this.handleChanges('year')}
          className="ui dropdown select-year"
          width={80}
          error={error}
        >
          {rangeYears.map(s => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </SelectStyled>
      </ContainerStyled>
    );
  }
}

export default InlineDatePicker;
