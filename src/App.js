import React from "react";
import MainPage from "./components/MainPage/MainPage";
import Data from "./Pages/Data";
import News from "./components/News/News";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ODIData from "./Pages/ODIData";
import AllMatches from "./Pages/AllMatchs";
import Team from "./Pages/Team";
import ODI from "./components/ICCRanking/ODI";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/Data">
            <Data />
          </Route>
          <Route path="/ODIData">
            <ODIData />
          </Route>
          <Route path="/AllMatches">
            <AllMatches />
          </Route>
          <Route path="/Team">
            <Team />
          </Route>
          <Route path="/News">
            <News />
          </Route>
          <Route path="/ODI">
            <ODI />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
