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
          <Route path="/Data" component={Data}>
            <Data />
          </Route>
          <Route path="/ODIData" component={ODIData}>
            <ODIData />
          </Route>
          <Route path="/AllMatches" component={AllMatches}>
            <AllMatches />
          </Route>
          <Route path="/Team" component={Team}>
            <Team />
          </Route>
          <Route path="/News" component={News}>
            <News />
          </Route>
          <Route path="/ODI" component={ODI}>
            <ODI />
          </Route>
          <Route exact path="" component={ErrorPage}>
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
