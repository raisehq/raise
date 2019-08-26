import React, { useState, Fragment } from 'react';
import * as _ from 'lodash';
import { isLength, isNumeric, isEmpty } from 'validator';
import {
  Button,
  Form,
  Message,
  Grid,
  Container,
  Divider
} from 'semantic-ui-react';
import { Separator, Countries } from 'hero-ui';
import { ButtonContainer, SelectStyled } from './Kyc.styles';
import InlineDatePicker from './Kyc.InputDate';
import { q1Options, q2Options, q3Options } from '@raisehq/components/src/commons/questions';
import { Either, Left, Right } from '../../utils';
import 'react-select/dist/react-select.css';
import 'react-virtualized-select/styles.css';

const initialForm = {
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

const validate = ({
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
}) => {
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
  const values = Either.either(Object.values(validation).every(val => val));

  return values.fold(() => Left(validation), () => Right(true));
};

const Information = props => {
  const [form, setForm] = useState(initialForm);
  const [validations, setValidations]: any = useState(false);

  const onSubmit = () =>
    validate(form).fold(
      validation => setValidations(validation),
      () => props.onSubmit('information')(form)
    );
  const onDelayedChange = _.debounce((input, value) => {
    setForm({ ...form, [input]: value });
  }, 300);

  const onChange = (input: any) => (event, data) => {
    if (event) {
      const persist = Either.either(event.persist);
      persist.fold(
        () =>
          onDelayedChange(
            input,
            data ? data.value : event.value || event.target.value
          ),
        () => {
          event.persist();
          onDelayedChange(
            input,
            data ? data.value : event.value || event.target.value
          );
        }
      );
    }
  };

  return (
    <Fragment>
      <Form onSubmit={onSubmit} loading={props.loading}>
        <Grid>
          <Grid.Column>
            <Form.Group style={{ marginBottom: '10px' }} widths="equal">
              <Form.Field>
                <label> First Name </label>
                <Form.Field
                  control="input"
                  placeholder="First name"
                  onChange={onChange('firstName')}
                  error={validations.firstName === false}
                />
              </Form.Field>
              <Form.Field>
                <label> Last Name </label>
                <Form.Field
                  control="input"
                  placeholder="Last name"
                  onChange={onChange('lastName')}
                  error={validations.lastName === false}
                />
              </Form.Field>
              <Form.Field>
                <label> Phone </label>
                <Form.Field
                  control="input"
                  placeholder="(xxx) xxxxxxx"
                  onChange={onChange('phone')}
                  error={validations.phone === false}
                />
              </Form.Field>
              <Form.Field>
                <label> Date of birth </label>
                <InlineDatePicker
                  dateChange={onChange('birthday')}
                  error={validations.birthday === false}
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
                  onChange={onChange('address')}
                  error={validations.address === false}
                />
              </Form.Field>
              <Form.Field>
                <label> Address 2</label>
                <Form.Input
                  fluid
                  placeholder=" Unit#"
                  onChange={onChange('address2')}
                  error={validations.address2 === false}
                />
              </Form.Field>
              <Form.Field>
                <label> City/Town </label>
                <Form.Input
                  fluid
                  placeholder="Barcelona"
                  onChange={onChange('city')}
                  error={validations.city === false}
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
                  onChange={onChange('cp')}
                  error={validations.cp === false}
                />
              </Form.Field>

              <Form.Field width={6}>
                <label> Nationality </label>
                <Countries
                  placeholder="Select Nacionality"
                  onChange={onChange('nationality')}
                  error={validations.nationality === false}
                  value={form.nationality}
                />
              </Form.Field>
              <Form.Field width={6}>
                <label> Country </label>
                <Countries
                  placeholder="Select Country"
                  onChange={onChange('country')}
                  error={validations.country === false}
                  value={form.country}
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
                value={form.q1}
                options={q1Options}
                onChange={onChange('q1')}
                error={validations.q1 === false}
              />
            </Form.Field>
            <Separator height={40} />
            <Form.Field>
              <label>Source of Income</label>
              <SelectStyled
                searchable={false}
                clearable={false}
                value={form.q2}
                options={q2Options}
                onChange={onChange('q2')}
                error={validations.q2 === false}
              />
            </Form.Field>
            <Separator height={40} />
            <Form.Field>
              <label>Employment Type</label>
              <SelectStyled
                searchable={false}
                clearable={false}
                value={form.q3}
                options={q3Options}
                onChange={onChange('q3')}
                error={validations.q3 === false}
              />
            </Form.Field>
            <Separator height={40} />
            <Form.Field>
              <label> Employer </label>
              <Form.Input
                fluid
                placeholder=" "
                onChange={onChange('employer')}
                error={validations.employer === false}
              />
            </Form.Field>
          </Grid.Column>
        </Grid>
        {props.errorMessage && <Message negative>{props.errorMessage}</Message>}
      </Form>
      <Container textAlign="right">
        <ButtonContainer>
          <Button
            icon="right arrow"
            content="Next"
            color="teal"
            labelPosition="right"
            type="submit"
            onClick={onSubmit}
          />
        </ButtonContainer>
      </Container>
    </Fragment>
  );
};

export default Information;
