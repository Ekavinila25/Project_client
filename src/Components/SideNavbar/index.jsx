import React from 'react'
import { NavLink } from 'react-router-dom'
import contact from '../../Assets/images/contact';
import deals from '../../Assets/images/deals';
import product from '../../Assets/images/product';
import Logo from '../../Assets/images/logo.png'
import './style.scss';


export default function SideNavbar() {
  const routeLink = [
    {
      activeClassName:"is-active",
      to:"/deals",
      exact: true,
      image: deals,
      altIamge: 'De'
    },
    {
      activeClassName:"is-active",
      to:"/contacts",
      image: contact,
      altIamge: 'Co'
    },
    {
      activeClassName:"is-active",
      to:"/products",
      image: product,
      altIamge: 'Pro'
    },
    // {
    //   activeClassName:"is-active",
    //   to:"/etc",
    //   exact: true,
    //   image: '',
    //   altIamge: 'E'
    // }
  ]

  return (
    <section className="side-nav">
      <div className="side-nav--logo">
        <img src={Logo} alt="company logo" />
      </div>
      <div className="side-nav--link">
        {routeLink.map(link => <NavLink className="navbar-item d-flex justify-content-center align-items-center" {...link}> <div className="side-nav--icon">{link.image ? link.image() : link.altIamge}</div> </NavLink>)}
      </div>
    </section>
  )
}
