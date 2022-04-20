import React from 'react';
import BreadCrumb from '../BreadCrumb';
import InfoScroll from './infoScroll';
import TimelineContainer from './timelineContainer';
import CollectionContainer from './collectionContainer';
import Add from '../../Assets/images/add';
import Mail from '../../Assets/images/mail';
import Call from '../../Assets/images/call';
import More from '../../Assets/images/more';
import Profile from '../../Assets/images/profile.jpeg'
import facebook from '../../Assets/images/facebook.png'
import linkedIn from '../../Assets/images/linkedin.png'
import './style.scss';

const ContactDetails = (props) => {
  const crumData = [
    { title: 'Contacts', route: '/contacts' },
    { title: 'Anna Dorwart' }
  ]
  return(
    <>
      <section className="contact-details">
        <section className="contact-details--header">
          <BreadCrumb crumData={crumData} {...props}/>
          <div className='align-items-center d-flex'>
            <span className="btn btn-secondary mx-2 my-3 px-3">
              <span className="pr-1">{Mail(20, 20, '#33BC7E')}</span>
              <span>Send Email</span>
            </span>
            <span className="btn btn-secondary mx-2 my-3 px-3">
              <span className="pr-1">{Call(20, 20, '#33BC7E')}</span>
              <span>Call</span>
            </span>
            <span className="btn btn-primary mx-2 my-3 px-3">
              <span className="pr-1">{Add(20, 20)}</span>
              <span>Deal</span>
            </span>
            <div className='px-2 c-pointer'>{More(20, 20, '#33BC7E')}</div>
          </div>
        </section>
        <section className="contact-details--info">
          <div className='profile-image'>
            <img src={Profile} alt='profile'/>
          </div>
          <div>
            <div className='d-flex align-items-center'>
              <span className='profile--name mr-2'>Anna Dorwart</span>
              <img  className="profile--social mr-1" src={linkedIn} alt="linkedin"/>
              <img  className="profile--social" src={facebook} alt="facebook"/>
            </div>
            <div className='d-flex align-items-center'>
              <span className='profile--designation'>Sales Manger</span>
              <div className='mx-2'>•</div>
              <a className='profile--site' href="www.drift.com">drift.com</a>
            </div>
          </div>
        </section>
        <InfoScroll />
      </section>
      <section className='d-flex'>
        <TimelineContainer />
        <CollectionContainer />
      </section>
    </>
  );
}

export default ContactDetails
