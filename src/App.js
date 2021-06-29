import React from 'react';
import MenuDrawer from './components/appMenu/MenuDrawer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Shopping from './pages/Shopping';
import Pricing from './pages/Pricing';
import Write from './pages/Write';
import Edit from './pages/Edit';
import Videos from './pages/Videos';
import Download from './pages/Download';

function App() {
  return (
    <>
      <Router>
        <MenuDrawer>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/recipes' component={Recipes} />
            <Route path='/shopping' component={Shopping} />
            <Route path='/pricing' component={Pricing} />
            <Route path='/write' component={Write} />
            <Route path='/edit' component={Edit} />
            <Route path='/videos' component={Videos} />
            <Route path='/download' component={Download} />
          </Switch>
        </MenuDrawer>
      </Router>
    </>
  );
}

export default App;