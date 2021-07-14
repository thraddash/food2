import React from 'react';
import MenuDrawer from './components/appMenu/MenuDrawer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shopping from './pages/Shopping';
import Products from './pages/Products';
import Write from './pages/Write';
import Edit from './pages/Edit';
import Delete from './pages/Delete';
import Download from './pages/Download';

function App() {
  return (
    <>
      <Router>
        <MenuDrawer>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/shopping' component={Shopping} />
            <Route path='/products' component={Products} />
            <Route path='/write' component={Write} />
            <Route path='/edit' component={Edit} />
            <Route path='/delete' component={Delete} />
            <Route path='/download' component={Download} />
          </Switch>
        </MenuDrawer>
      </Router>
    </>
  );
}

export default App;