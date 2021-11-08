import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Thermometer from './components/Thermometer';
import TemperatureVariant from './components/TemperatureVariant';
import Calendar from './components/Calendar';
import UserInfo from './components/UserInfo';
import Search from './components/Search';

function App() {
  const [search, setSearch] = useState(false);

  const changeSearch = () => setSearch(!search);

  return (
    <BrowserRouter>
      <div className="App">
        <Header search={search} />
        <Switch>
          <Route value="" path="/" exact render={() => <Search changeSearch={changeSearch} />} />
          <Route path="/thermometer" render={() => <Thermometer changeSearch={changeSearch} />} />
          <Route path="/temperature-variant" component={TemperatureVariant} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/user-info" component={UserInfo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
