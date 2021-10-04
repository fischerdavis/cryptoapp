import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './Components';
import './App.css';
import {Routes} from './Utils/Routes';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path={Routes.Home}>
                <Homepage />
              </Route>
              <Route exact path={Routes.Exchanges}>
                <Exchanges />
              </Route>
              <Route exact path={Routes.CryptoCurrencies}>
                <Cryptocurrencies />
              </Route>
              <Route exact path={Routes.CryptoDetails}>
                <CryptoDetails />
              </Route>
              <Route exact path={Routes.News}>
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
            Cryptoverse <br />
            All Rights reserved
          </Typography.Title>
          <Space>
            <Link to={Routes.Home}>Home</Link>
            <Link to={Routes.Exchanges}>Exchanges</Link>
            <Link to={Routes.News}>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;