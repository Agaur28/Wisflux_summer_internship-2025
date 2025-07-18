import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Task Manager</h1>
        <Switch>
          <Route path="/" exact component={TaskList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
