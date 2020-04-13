import React from 'react';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./components/landing/Home"
// import './App.css';
import User from './components/User';
import Navbar from './components/navbar';
import Package from './components/landing/Package';
import TestSeries from './components/landing/TestSeries';
import PracticeQuiz from './components/landing/PracticeQuiz';
import VideoCourses from './components/landing/VideoCourses';
import EBook from './components/landing/EBook';
import PDF from './components/landing/PDF';
import Publications from './components/landing/Publications';
import TopicTest from './components/tests/TopicTest';
import SectionalTest from './components/tests/SectionalTest';
import SBIClerk from './components/tests/SBIClerk';
import SBIPO from './components/tests/SBIPO';
import RBIAssisstance from './components/tests/RBIAssisstance';
import IBPSRRBPO from './components/tests/IBPSRRBPO';
import IBPSRRBClerk from './components/tests/IBPSRRBClerk';
import IBPSSO from './components/tests/IBPSSO';
import HarcoBank from './components/tests/HarcoBank';
import EPFO from './components/tests/EPFO';
import IBPSPO from './components/tests/IBPSPO';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
       <Router history={history}>
       <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/user" component={User} />
              <Route exact path="/exams/:name" component={Package} />
              <Route exact path="/test-Series" component={TestSeries} />
              <Route exact path="/practice-Quiz" component={PracticeQuiz} />
              <Route exact path="/video-Courses" component={VideoCourses} />
              <Route exact path="/e-book" component={EBook} />
              <Route exact path="/publication" component={Publications} />
              <Route exact path="/pdf" component={PDF} />
              <Route exact path="/topic-test" component={TopicTest} />
              <Route exact path="/sectional-test" component={SectionalTest} />
              <Route exact path="/sbi-clerk" component={SBIClerk} />
              <Route exact path="/sbi-po" component={SBIPO} />
              <Route exact path="/rbi-assisstance" component={RBIAssisstance} />
              <Route exact path="/ibps-rrb-po" component={IBPSRRBPO} />
              <Route exact path="/ibps-rrb-clerk" component={IBPSRRBClerk} />
              <Route exact path="/ibps-so" component={IBPSSO} />
              <Route exact path="/harco-bank" component={HarcoBank} />
              <Route exact path="/epfo" component={EPFO} />
              <Route exact path="/ibps-po" component={IBPSPO} />
              {/* <Route path="*" component={NotFound} />; */}
            </Switch>
          </Router>
    </div>
  );
}

export default App;
