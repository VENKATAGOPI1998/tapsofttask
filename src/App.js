import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Cart from "./Cart";

function App() {
  return (
    <>
      <Router>
          <div className="container">
            <Switch>
              <Route path="/" exact>
                <Cart></Cart>
              </Route>
            </Switch>
          </div>
      </Router>
    </>
  );
}

export default App;
