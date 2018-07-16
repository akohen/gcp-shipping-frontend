// @flow

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Header from './components/Header';
import Quote from './pages/Quote';
import About from './pages/About';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:8080',
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Quote} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  </ApolloProvider>
);

export default App;
