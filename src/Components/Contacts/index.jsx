import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { loginUser } from '../../Constants/userAction/actions';
import axios from 'axios';
import Table from '../Table';
import Dialog from '../Dialog';
import AddContact from '../AddContact';
import Custom from '../../Assets/images/custom';
import Filter from '../../Assets/images/filter';
import Add from '../../Assets/images/add';
import DropDown from '../../Assets/images/dropDown';
import './style.scss';

const mockData1 = {
  "totalHits": 252,
  "rows": [
      {
          "email_type": "Personal",
          "stage": "New",
          "mobile_type": "Personal",
          "mobile": "9744365332",
          "last_name": "Streich",
          "company": "Effertz and Sons",
          "id": 175,
          "source": "Test Source",
          "first_name": "Abe",
          "email": "MEU15OVNTR@gmail.com"
      },
      {
          "email_type": "work",
          "stage": "New",
          "mobile_type": "Personal",
          "mobile": "+919212257986",
          "last_name": "",
          "company": "The Launch Club",
          "id": 1,
          "source": "Test Source",
          "first_name": "Abishek",
          "email": "abishek@tlc.com"
      },
      {
          "email_type": "work",
          "stage": "New",
          "mobile_type": "Personal",
          "mobile": "+919212257996",
          "last_name": "TLC",
          "company": "The Launch Club",
          "id": 252,
          "source": "Test Source",
          "first_name": "Abishek123",
          "email": "abishek123@tlc.com"
      },
      {
          "email_type": "Personal",
          "stage": "New",
          "mobile_type": "Personal",
          "mobile": "6324411855",
          "last_name": "Hessel",
          "company": "Huels-Larson",
          "id": 240,
          "source": "Test Source",
          "first_name": "Abraham",
          "email": "3WY4NDL1H5@gmail.com"
      },
      {
          "email_type": "Personal",
          "stage": "New",
          "mobile_type": "Personal",
          "mobile": "5146129137",
          "last_name": "Welch",
          "company": "Daniel and Sons",
          "id": 52,
          "source": "Test Source",
          "first_name": "Ada",
          "email": "RTFWFTBSSU@gmail.com"
      },
      {
          "email_type": "Personal",
          "stage": "New",
          "mobile_type": "Personal",
          "mobile": "6413385090",
          "last_name": "McDermott",
          "company": "Cummerata LLC",
          "id": 16,
          "source": "Test Source",
          "first_name": "Adolfo",
          "email": "Q0J5S71VJT@gmail.com"
      },
      {
          "email_type": "Personal",
          "stage": "New",
          "mobile_type": "Personal",
          "mobile": "6501927876",
          "last_name": "Langosh",
          "company": "Schinner-Bins",
          "id": 241,
          "source": "Test Source",
          "first_name": "Ai",
          "email": "ORIQP3XBTE@gmail.com"
      },
      {
          "email_type": "Personal",
          "stage": "New",
          "mobile_type": "Personal",
          "mobile": "3264639855",
          "last_name": "Bode",
          "company": "Mueller, Schoen and Stroman",
          "id": 236,
          "source": "Test Source",
          "first_name": "Aide",
          "email": "Z4C859032Q@gmail.com"
      },
      {
          "email_type": "Personal",
          "stage": "New",
          "mobile_type": "Personal",
          "mobile": "7312354795",
          "last_name": "Carter",
          "company": "Altenwerth-Littel",
          "id": 142,
          "source": "Test Source",
          "first_name": "Alejandro",
          "email": "DMXBBY7BZN@gmail.com"
      },
      {
          "email_type": "Personal",
          "stage": "New",
          "mobile_type": "Personal",
          "mobile": "9671174058",
          "last_name": "Tillman",
          "company": "Auer-Howe",
          "id": 75,
          "source": "Test Source",
          "first_name": "Alethea",
          "email": "O4O9TIANRE@gmail.com"
      }
  ],
  "structure": {
      "configured": [
          "first_name",
          "last_name",
          "email",
          "email_type",
          "mobile",
          "mobile_type",
          "source",
          "stage",
          "company"
      ],
      "fields": [
          {
              "search": false,
              "hidden": true,
              "displayName": "ID",
              "name": "id",
              "sort": 1
          },
          {
              "search": true,
              "hidden": false,
              "displayName": "First Name",
              "name": "first_name",
              "sort": 1
          },
          {
              "search": true,
              "hidden": false,
              "displayName": "Last Name",
              "name": "last_name",
              "sort": 1
          },
          {
              "search": true,
              "hidden": false,
              "displayName": "Email",
              "name": "email",
              "sort": 1
          },
          {
              "search": true,
              "hidden": false,
              "displayName": "Email Type",
              "name": "email_type",
              "sort": 1
          },
          {
              "search": true,
              "hidden": false,
              "displayName": "Mobile No",
              "name": "mobile",
              "sort": 1
          },
          {
              "search": true,
              "hidden": false,
              "displayName": "Mobile Type",
              "name": "mobile_type",
              "sort": 1
          },
          {
              "search": true,
              "hidden": false,
              "displayName": "Source",
              "name": "source",
              "sort": 1
          },
          {
              "search": true,
              "hidden": false,
              "displayName": "LifeCycle Stage",
              "name": "stage",
              "sort": 1
          },
          {
              "search": true,
              "hidden": false,
              "displayName": "Company",
              "name": "company",
              "sort": 1
          }
      ],
      "primary": "id"
  }
};

const mockData = {
  "totalRecords": 2,
  "column": [
    { col: 1, columnTitle: 'First Name', field: 'firstName', visible: true},
    { col: 2, columnTitle: 'Last Name', field: 'lastName', visible: true},
    { col: 3, columnTitle: 'Email', field: 'email', visible: true},
    { col: 4, columnTitle: 'Mobile', field: 'mobileNumber', visible: true},
    { col: 5, columnTitle: 'Company', field: 'company', visible: true},
    { col: 6, columnTitle: 'Owner', field: 'owner', visible: true},
    { col: 7, columnTitle: 'Life Cycle', field: 'lifeCycleStage', visible: true},
    { col: 8, columnTitle: 'Source', field: 'source', visible: true},
  ],
  "data": [
    {
      "id": "1",
      "firstName": "DEF",
      "lastName": "ABC",
      "email": "aeb@abc.com",
      "mobileNumber": "+919876543201",
      "company": "companyName",
      "owner": "ownerName",
      "lifeCycleStage": "stageName",
      "source": "sourceName"
    },
    {
      "id": "2",
      "firstName": "ABC",
      "lastName": "DEF",
      "email": "aeb@abc.com",
      "mobileNumber": "+919876543210",
      "company": "companyName",
      "owner": "ownerId",
      "lifeCycleStage": "stageName",
      "source": "sourceName"
    }
  ]
};

const Contacts = (props) => {
  const [ column, setColumn ] = useState(mockData1.structure.fields);
  const [ isClosed, setClose ] = useState(false);
  const [ contacts, setContacts ] = useState([]);

  useEffect(() => {
    console.log("Test123>>>>>");
    axios.post('https://api.thelaunchclub.in/contact/list', {
      "select": ["id","first_name", "last_name", "email", "email_type", "company", "mobile","mobile_type", "source", "stage"],
      "provider": "CONTACT_LIST",
      "sort": [{
        "field":"first_name",
        "type":"asc"
      }],
      "criteria": [],
      "start":0,
      "count":100,
      "limit": 100,
      "fetchHits":true,
      "fetchStruct":true
    }, {
      headers: {
        'Access-Control-Allow-Origin': true,
      },
    })
    .then(function (response) {
      console.log("response>>>>>>>", response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  const handleColumnChange = (event, index) => {
    console.log("checked>>>>", column, event.target.checked, index);
    column[index].hidden = !event.target.checked;

    setColumn([...column]);
  }

  const handleClose = () => {
    setClose(!isClosed);
  }

  return (  
  <div className="contacts">
    <section className="contacts--header d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <div className="d-flex px-3">{Filter(20, 20)}</div>
        <div className="d-flex align-items-center c-pointer">
          <h6 className="m-0 font-semi-bold">All Contacts</h6>
          <div className="d-flex pl-1">{DropDown(20, 20)}</div>
        </div>
      </div>
      <div className="pr-3">
        <span className="btn btn-secondary mx-2 my-3">Import Contacts</span>
        <span className="btn btn-primary mx-2 my-3" onClick={() => setClose(!isClosed)}>
          <span className="pr-1">{Add(20, 20)}</span>
          <span>Contact</span>
        </span>
        <Dialog header="Add Contact" handleClose={handleClose} isClosed={isClosed}>
          <AddContact />
        </Dialog>
      </div>
    </section>
    <section className="contacts--dropdown">
      <span className="btn" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
        {Custom()}
      </span>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {column.map((columnData, index) => 
        <li 
          key={columnData.displayName} 
          className="c-pointer dropdown-menu--list"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            id={columnData.displayName}
            type="checkbox"
            checked={!columnData.hidden} 
            onChange={(event) => handleColumnChange(event, index)}
          />
          <label htmlFor={columnData.displayName}>
            {columnData.displayName}
          </label>
        </li>
        )}
      </ul>
    </section>
    {/* <Table data={mockData.data} column={column} {...props} /> */}
    <Table data={mockData1.rows} column={column} {...props} />
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
)(Contacts)
