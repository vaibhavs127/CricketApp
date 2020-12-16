import React from "react";
import MainPage from "./components/MainPage/MainPage";
import Data from "./Pages/Data";
import News from "./components/News/News";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ODIData from "./Pages/ODIData";
import AllMatches from "./Pages/AllMatchs";
import Team from "./Pages/Team";
import ODI from "./components/ICCRanking/ODI";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/Data" component={Data}>
            <Data />
          </Route>
          <Route exact path="/ODIData" component={ODIData}>
            <ODIData />
          </Route>
          <Route exact path="/AllMatches" component={AllMatches}>
            <AllMatches />
          </Route>
          <Route exact path="/Team" component={Team}>
            <Team />
          </Route>
          <Route exact path="/News" component={News}>
            <News />
          </Route>
          <Route exact path="/ODI" component={ODI}>
            <ODI />
          </Route>
          <Route component={ErrorPage}>
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
