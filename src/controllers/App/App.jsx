import React from 'react';
import { List, Add, NotFound, Edit } from '../../containers';
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path="/todo-list-react" component={List}/>
          <Route path="/todo-list-react/new" component={Add} />
          <Route path="/todo-list-react/edit/:id" component={Edit} />
          <Route path="/todo-list-react/*" component={NotFound} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
