import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Thermometer from './components/Thermometer'
import TemperatureVariant from './components/TemperatureVariant'
import Calendar from './components/Calendar'
import UserInfo from './components/UserInfo'
import Search from './components/Search'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/thermometer" component={Thermometer} />
          <Route path="/temperature-variant" component={TemperatureVariant} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/user-info" component={UserInfo} />

        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
