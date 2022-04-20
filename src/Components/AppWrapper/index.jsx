import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import SideNavbar from '../SideNavbar';
import Home from "../Home";
import Contacts from '../Contacts';
import Products from '../Products';
import Deals from '../Deals';
import ContactDetails from '../ContactDetails';
import './style.scss';

export default function AppWrapper(props) {
  const routers = [
    {
      path: "/contacts",
      Component: Contacts,
    },
    {
      path: "/contacts/:id",
      Component: ContactDetails,
    },
    {
      path: "/deals",
      Component: Deals,
    },
    {
      path: "/products",
      Component: Products,
    },
    {
      path: "/etc",
      Component: Home,
    },
    // {
    //   path: ,
    //   Component: ,
    // },
  ]
  return (
    <section className="app-wrapper">
      <div className="app-wrapper--side-navbar">
        <SideNavbar />
      </div>
      <div className="app-wrapper--container">
        {/* <h1>Search Bar</h1> */}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Redirect to="/deals" />
            )}
          />
          {routers.map(route => 
          <Route
            exact
            path={route.path}
            render={props => (
              <route.Component {...props} />
            )}
          />)}
        </Switch>
      </div>
    </section>
  )
}

