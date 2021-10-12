import React from "react";

const LoginComponent = React.lazy(() => import("./pages/login/Login"));
const HomeComponent = React.lazy(() => import("./pages/home/Home"));
const CountryListComponent = React.lazy(() =>
  import("./pages/country/CountryList")
);
const CreateCountryComponent = React.lazy(() =>
  import("./pages/country/CreateCountry")
);
const EditCountryComponent = React.lazy(() =>
  import("./pages/country/EditCountry")
);
const CreateState = React.lazy(() => import("./pages/state/CreateState"));
const EditState = React.lazy(() => import("./pages/state/EditState"));
const StateList = React.lazy(() => import("./pages/state/StateList"));

const mainRoutes = [
  {
    componente: LoginComponent,
    name: "Login",
    path: "/login",
    exact: true,
  },
  {
    componente: HomeComponent,
    name: "Home",
    path: "/home",
    exact: false,
  },
  {
    componente: CountryListComponent,
    name: "Country",
    path: "/countries",
    exact: true,
  },
  {
    componente: CreateCountryComponent,
    name: "Create Country",
    path: "/countries/create",
    exact: true,
  },
  {
    componente: EditCountryComponent,
    name: "Edit Country",
    path: "/countries/edit/:id",
    exact: true,
  },
  {
    componente: StateList,
    name: "State",
    path: "/states",
    exact: true,
  },
  {
    componente: CreateState,
    name: " Create State",
    path: "/states/create",
    exact: true,
  },
  {
    componente: EditState,
    name: "Edit State",
    path: "/states/edit/:id",
    exact: true,
  },
];

export default mainRoutes;
