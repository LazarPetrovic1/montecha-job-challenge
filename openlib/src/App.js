import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import BookPage from './components/BookPage';

function App() {
  return (
    <Router>
      <Switch>
        <Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={BookPage} />
        </Fragment>
      </Switch>
    </Router>
  );
}

export default App;
