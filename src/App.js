import React from "react";
import MainPage from "./components/MainPage/MainPage";
import Data from "./Data";
import News from "./components/News/News";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/Data">
            <Data />
          </Route>
          <Route path="/News">
            <News />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
