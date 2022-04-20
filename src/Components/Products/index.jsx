import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { loginUser } from '../../Constants/userAction/actions';
import Table from '../Table1';
import Dialog from '../Dialog';
import AddContact from '../AddContact';
import Custom from '../../Assets/images/custom';
import Filter from '../../Assets/images/filter';
import Add from '../../Assets/images/add';
import DropDown from '../../Assets/images/dropDown';
import './style.scss';

const mockData = {
  "totalRecords": 2,
  "column": [
    { col: 1, columnTitle: 'Product Name', field: 'productName', visible: true},
    { col: 2, columnTitle: 'Category', field: 'category', visible: true},
    { col: 3, columnTitle: 'Owner', field: 'owner', visible: true},
    { col: 4, columnTitle: 'Create At', field: 'createAt', visible: true},
    { col: 5, columnTitle: 'Created By', field: 'createdBy', visible: true},
  ],
  "data": [
    {
      "productName": "CRM",
      "category": "Software",
      "owner": "Dinesh Kumar",
      "createAt": "12 Jan 2021 03.04 PM",
      "createdBy": "Vignesh",
    },
    {
      "productName": "Support Desk",
      "category": "Software",
      "owner": "Dinesh Kumar",
      "createAt": "12 Jan 2021 03.04 PM",
      "createdBy": "Vignesh",
    },
  ]
};

const Products = (props) => {
  const [ column, setColumn ] = useState(mockData.column);
  const [ isClosed, setClose ] = useState(false);

  const handleColumnChange = (event, index) => {
    column[index].visible = event.target.checked;
    setColumn([...column]);
  }

  const handleClose = () => {
    setClose(!isClosed);
  }

  console.log("props", props);
  return (  
  <div className="contacts">
    <section className="contacts--header d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <div className="d-flex px-3">{Filter(20, 20)}</div>
        <div className="d-flex align-items-center c-pointer">
          <h6 className="m-0 font-semi-bold">All Products</h6>
          <div className="d-flex pl-1">{DropDown(20, 20)}</div>
        </div>
      </div>
      <div className="pr-3">
        <span className="btn btn-secondary mx-2 my-3">Import Products</span>
        <span className="btn btn-primary mx-2 my-3" onClick={() => setClose(!isClosed)}>
          <span className="pr-1">{Add(20, 20)}</span>
          <span>Product</span>
        </span>
        {/* <Dialog header="Add Contact" handleClose={handleClose} isClosed={isClosed}>
          <AddContact />
        </Dialog> */}
      </div>
    </section>
    <section className="contacts--dropdown">
      <span className="btn" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
        {Custom()}
      </span>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {column.map((columnData, index) => 
        <li 
          key={columnData.columnTitle} 
          className="c-pointer dropdown-menu--list"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            id={columnData.columnTitle}
            type="checkbox"
            checked={columnData.visible} 
            onChange={(event) => handleColumnChange(event, index)}
          />
          <label htmlFor={columnData.columnTitle}>
            {columnData.columnTitle}
          </label>
        </li>
        )}
      </ul>
    </section>
    <Table data={mockData.data} column={column} {...props} parent='product' />
  </div>
)};

function mapStateToProps (state) {
  return {
    userData: state.user.userData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loginUser: (data) => dispatch(loginUser(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)
