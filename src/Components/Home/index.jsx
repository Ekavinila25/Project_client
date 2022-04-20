import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { loginUser } from '../../Constants/userAction/actions'
import GroupButton from '../GroupButton';

const Home = (props) => {

  useEffect(() => {
    props.loginUser({userName: 'hari', password: 'Test@123'})
  }, []);

  const handleClick = (value) => {
    console.log(value);
  };

  return (  
  <div className="App">
    <header className="App-header">
    <span className="btn btn-primary m-3">Test Button</span>
    <span className="btn btn-secondary m-3">Test Button</span>
      <p>
        Simple React with Redux-Saga boilerplate, {props.userData.userName} {props.userData.password}
      </p>

    <section className="m-5">
      <GroupButton titles={['Text1', 'Text2', 'Text3']} handleClick={handleClick} />
    </section>
    </header>
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
)(Home)
