import React from 'react';
import { toast } from 'react-toastify';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AcademicTests from './pages/AcademicTests/AcademicTests';
import GeneralTests from './pages/GeneralTests/GeneralTests';
import AcademicVolume from './pages/AcademicTests/AcademicVolume';
import ListeningTests from './pages/TestsPage/ListeningTests';
import ReadingTests from './pages/TestsPage/ReadingTests';
toast({
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
});
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/academic" component={AcademicTests}></Route>
        <Route path="/academic/:volume" component={AcademicVolume}></Route>
        <Route path="/test/listening/:slug" component={ListeningTests}></Route>
        <Route path="/test/reading/:slug" component={ReadingTests}></Route>
        <Route path="/test/writing/:slug" component={ReadingTests}></Route>
        <Route exact path="/general" component={GeneralTests}></Route>
      </Switch>
    </Router>
  );
}

export default App;
