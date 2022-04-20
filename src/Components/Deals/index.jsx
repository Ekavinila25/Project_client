import React, { Component } from 'react'
import AddContact from '../AddContact';
import Filter from '../../Assets/images/filter';
import Add from '../../Assets/images/add';
import DropDown from '../../Assets/images/dropDown';
import Sort from '../../Assets/images/sort';
import Profile from '../../Assets/images/profile.jpeg'
import './style.scss';

export default class Deals extends Component {
  render() {
    const contacts = [1, 2];
    const deals = [
      {
        title: 'Mac App for Inventory Management', 
        price: '$ 3,900  •  Closing in 5 Days',
      },
      {
        title: 'Web App', 
        price: '$ 1,400  •  Closing in 8 Days',
      },
      {
        title: 'HR Management', 
        price: '$ 945  •  Closing in 10 Days',
      },
    ];

    const columns = [
      {
        title: 'New', 
        price: '$ 18,900  •  3 Deals',
      },
      {
        title: 'Follow Up', 
        price: '$ 24,900  •  5 Deals',
      },
      {
        title: 'HR Management', 
        price: '$ 0  •  0 Deals',
      },
      {
        title: 'Demo', 
        price: '$ 3,726  •  2 Deals',
      },
      {
        title: 'Navigation', 
        price: '$ 3,726  •  2 Deals',
      },
    ];

    const dealCard = (title, price) => (
      <div className='deal-card'>
        <div className='deal-card--content d-flex flex-column'>
          <span className='title'>{title}</span>
          <span className='price'>{price}</span>
        </div>
        <div className='d-flex py-1'>
          {contacts.map(contact =>
            <div className='contact-pic mr-1'>
              <img src={Profile} alt='profile'/>
            </div>
          )}
        </div>
      </div>
    );

    const dealColumn = (title, price) => (
      <div className='deals-column'>
        <div className='deals-column--header'>
          <div className='d-flex flex-column'>
            <span className='title'>{title}</span>
            <span>{price}</span>
          </div>
          <div>
            <span className="pr-1">{Sort(15, 15)}</span>
          </div>
        </div>
        <div>
          {deals.map(deal => dealCard(deal.title, deal.price))}
        </div>
      </div>
    )

    return (
      <section className='deals-container'>
        <section className="deals--header d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className="d-flex px-3">{Filter(20, 20)}</div>
            <div className="d-flex align-items-center c-pointer divider">
              <h6 className="m-0 font-semi-bold">General Pipeline</h6>
              <div className="d-flex pl-1">{DropDown(20, 20)}</div>
            </div>
            <div className="d-flex align-items-center c-pointer">
              <h6 className="m-0 font-semi-bold">All Deals</h6>
              <div className="d-flex pl-1">{DropDown(20, 20)}</div>
            </div>
          </div>
          <div className="pr-3">
            <span className="btn btn-secondary mx-2 my-3">Import</span>
            <span className="btn btn-primary mx-2 my-3">
              <span className="pr-1">{Add(20, 20)}</span>
              <span>New Deal</span>
            </span>
          </div>
        </section>
        <section className='deals-section'>
          {columns.map(column => dealColumn(column.title, column.price))}
        </section>
      </section>
    )
  }
}
