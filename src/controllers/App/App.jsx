import React from 'react';
import { List, Add, NotFound, Edit } from '../../containers';
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={List}/>
          <Route path="/new" component={Add} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="*" component={NotFound} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
