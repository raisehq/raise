// TODO : IS a old code
import React, { Component, Fragment } from 'react';
import {
  Button,
  Form,
  Message,
  Grid,
  Container,
  Divider
} from 'semantic-ui-react';
import { Separator } from 'hero-ui';
import { ButtonContainer, SelectStyled } from './Kyc.styles';
import { isLength, isNumeric, isEmpty } from 'validator';
import InlineDatePicker from './Kyc.InputDate';
import { countryOptions } from '@raisehq/components/src/commons/countries';
import { q1Options, q2Options, q3Options } from '@raisehq/components/src/commons/questions';
import 'react-select/dist/react-select.css';
import 'react-virtualized-select/styles.css';

class Information extends Component {
  static defaultProps = {
    loading: false,
    errorMessage: null,
    onSubmit: (type: string) => (data: any) => {}
  };
  handleChangesSelector = (input: any) => {
    return (event: any = '') => {
      const value = event.target ? event.target.value : event;

      this.setState({
        [input]: value.key
      });
    };
  };

  handleChanges = (input: any) => {
    return (event: any = '') => {
      const value = event.target ? event.target.value : event;

      this.setState({
        [input]: value
      });
    };
  };

  state = {
    firstName: '',
    lastName: '',
    phone: '',
    nationality: '',
    birthday: '',
    address: '',
    address2: '',
    city: '',
    cp: '',
    country: '',
    q1: -1,
    q2: -1,
    q3: -1,
    employer: '',
    hasFormValidValues: false
  };

  handleOnSubmit = () => {
    if (this.validateForm(this.state)) {
      const { onSubmit }: any = this.props;
      onSubmit('information')(this.state);
    }
  };

  validateForm = data => {
    const {
      firstName,
      lastName,
      phone,
      nationality,
      birthday,
      address,
      city,
      cp,
      country,
      q1,
      q2,
      q3,
      employer
    } = data;

    try {
      const validation = {
        firstName: isLength(firstName, { min: 1 }),
        lastName: isLength(lastName, { min: 1 }),
        phone: isNumeric(phone),
        nationality: isLength(nationality, { min: 1 }),
        birthday: !isEmpty(birthday),
        address: isLength(address, { min: 3 }),
        address2: true,
        city: isLength(city, { min: 3 }),
        cp: isLength(cp, { min: 3 }),
        country: isLength(country, { min: 1 }),
        q1: q1 > -1,
        q2: q2 > -1,
        q3: q3 > -1,
        employer: isLength(employer, { min: 3 })
      };
      if (Object.values(validation).every(val => val)) {
        return true;
      } else {
        this.setState({
          hasFormValidValues: validation
        });
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  render() {
    const { loading, errorMessage }: any = this.props;
    const {
      hasFormValidValues,
      nationality,
      country,
      q1,
      q2,
      q3
    }: any = this.state;
    return (
      <Fragment>
        <Form onSubmit={this.handleOnSubmit} loading={loading}>
          <Grid>
            <Grid.Column>
              <Form.Group style={{ marginBottom: '10px' }} widths="equal">
                <Form.Field>
                  <label> First Name </label>
                  <Form.Field
                    control="input"
                    placeholder="First name"
                    onChange={this.handleChanges('firstName')}
                    error={hasFormValidValues.firstName === false}
                  />
                </Form.Field>
                <Form.Field>
                  <label> Last Name </label>
                  <Form.Field
                    control="input"
                    placeholder="Last name"
                    onChange={this.handleChanges('lastName')}
                    error={hasFormValidValues.lastName === false}
                  />
                </Form.Field>
                <Form.Field>
                  <label> Phone </label>
                  <Form.Field
                    control="input"
                    placeholder="(xxx) xxxxxxx"
                    onChange={this.handleChanges('phone')}
                    error={hasFormValidValues.phone === false}
                  />
                </Form.Field>
                <Form.Field>
                  <label> Date of birth </label>
                  <InlineDatePicker
                    dateChange={this.handleChanges('birthday')}
                    error={hasFormValidValues.birthday === false}
                  />
                </Form.Field>
              </Form.Group>
              <Separator height={40} />
              <Form.Group widths="equal">
                <Form.Field>
                  <label> Address </label>
                  <Form.Input
                    fluid
                    placeholder="123 Main Street"
                    onChange={this.handleChanges('address')}
                    error={hasFormValidValues.address === false}
                  />
                </Form.Field>
                <Form.Field>
                  <label> Address 2</label>
                  <Form.Input
                    fluid
                    placeholder=" Unit#"
                    onChange={this.handleChanges('address2')}
                    error={hasFormValidValues.address2 === false}
                  />
                </Form.Field>
                <Form.Field>
                  <label> City/Town </label>
                  <Form.Input
                    fluid
                    placeholder="Barcelona"
                    onChange={this.handleChanges('city')}
                    error={hasFormValidValues.city === false}
                  />
                </Form.Field>
              </Form.Group>
              <Separator height={40} />
              <Form.Group>
                <Form.Field width={4}>
                  <label> Zip Code </label>
                  <Form.Input
                    fluid
                    placeholder="00001"
                    onChange={this.handleChanges('cp')}
                    error={hasFormValidValues.cp === false}
                  />
                </Form.Field>

                <Form.Field width={6}>
                  <label> Nationality </label>
                  <SelectStyled
                    placeholder="Select Nacionality"
                    searchable={false}
                    clearable={false}
                    options={countryOptions}
                    onChange={this.handleChangesSelector('nationality')}
                    value={nationality}
                    error={hasFormValidValues.nationality === false}
                  />
                </Form.Field>
                <Form.Field width={6}>
                  <label> Country </label>
                  <SelectStyled
                    placeholder="Select Country"
                    searchable={false}
                    clearable={false}
                    options={countryOptions}
                    value={country}
                    onChange={this.handleChangesSelector('country')}
                    error={hasFormValidValues.country === false}
                  />
                </Form.Field>
              </Form.Group>
              <Separator height={40} />
              <Separator height={40} />
              <Divider />
              <Separator height={40} />
              <Separator height={40} />
              <Form.Field>
                <label>Use of Funds</label>
                <SelectStyled
                  searchable={false}
                  clearable={false}
                  value={q1}
                  options={q1Options}
                  onChange={this.handleChangesSelector('q1')}
                  error={hasFormValidValues.q1 === false}
                />
              </Form.Field>
              <Separator height={40} />
              <Form.Field>
                <label>Source of Income</label>
                <SelectStyled
                  searchable={false}
                  clearable={false}
                  value={q2}
                  options={q2Options}
                  onChange={this.handleChangesSelector('q2')}
                  error={hasFormValidValues.q2 === false}
                />
              </Form.Field>
              <Separator height={40} />
              <Form.Field>
                <label>Employment Type</label>
                <SelectStyled
                  searchable={false}
                  clearable={false}
                  value={q3}
                  options={q3Options}
                  onChange={this.handleChangesSelector('q3')}
                  error={hasFormValidValues.q3 === false}
                />
              </Form.Field>
              <Separator height={40} />
              <Form.Field>
                <label> Employer </label>
                <Form.Input
                  fluid
                  placeholder=" "
                  onChange={this.handleChanges('employer')}
                  error={hasFormValidValues.employer === false}
                />
              </Form.Field>
            </Grid.Column>
          </Grid>
          {errorMessage && <Message negative>{errorMessage}</Message>}
        </Form>
        <Container textAlign="right">
          <ButtonContainer>
            <Button
              icon="right arrow"
              content="Next"
              color="teal"
              labelPosition="right"
              onClick={this.handleOnSubmit}
            />
          </ButtonContainer>
        </Container>
      </Fragment>
    );
  }
}

export default Information;
