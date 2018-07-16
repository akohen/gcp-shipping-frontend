// @flow

import React from 'react';
import styled from 'styled-components';
import Results from './Results';
import { Page, Button } from '../style';
import { StyledSelect, StyledNumberInput } from '../components/Forms';

type StateType = {
  from: string,
  to: string,
  weight: number,
  search?: {from: string, to: string, weight: number}
};

const QuoteControls = styled.div`
  vertical-align: middle;
`;

const shippingDestinations = [
  { name: 'Sun' },
  { name: 'Mercury' },
  { name: 'Venus' },
  { name: 'Earth' },
  { name: 'Moon' },
  { name: 'Mars' },
  { name: 'Jupiter' },
  { name: 'Uranus' },
  { name: 'Neptune' },
  { name: 'Pluto' },
];

class SearchQuote extends React.Component<void, StateType> {
  constructor(props: void) {
    super(props);
    this.state = { from: 'Earth', to: 'Mars', weight: 10 };
  }

  handleSubmit = (event: SyntheticInputEvent<HTMLButtonElement>) => {
    const { from, to, weight } = this.state;
    this.setState({ search: { from, to, weight } });
    event.preventDefault();
  }

  updateFrom = ({ target }: SyntheticInputEvent<HTMLSelectElement>) => {
    this.setState({ from: target.value });
  }

  updateTo = ({ target }: SyntheticInputEvent<HTMLSelectElement>) => {
    this.setState({ to: target.value });
  }

  updateWeight = ({ target }: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ weight: Number(target.value) });
  }

  render() {
    const { from, to, weight, search } = this.state;

    return (
      <Page>
        <h1>Ship something to anywhere !</h1>
        <QuoteControls>
          <form onSubmit={this.handleSubmit}>
            <StyledSelect
              label="from"
              options={shippingDestinations}
              value={from}
              onChange={this.updateFrom}
            />
            <StyledSelect
              label="to"
              options={shippingDestinations}
              value={to}
              onChange={this.updateTo}
            />
            <StyledNumberInput
              label="weight in kg"
              value={weight}
              onChange={this.updateWeight}
            />
            <Button type="submit">Get a quote</Button>
          </form>
        </QuoteControls>
        <Results search={search} />
      </Page>
    );
  }
}

export default SearchQuote;
