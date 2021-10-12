import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import mainRoutes from "./App.routes";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<div>Cargando ...</div>}>
        <Switch>
          {mainRoutes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              component={route.componente}
              exact={route.exact}
              name={route.name}
            />
          ))}
          <Redirect to="/login" />
        </Switch>
      </React.Suspense>
    </div>
  );
}

export default App;
