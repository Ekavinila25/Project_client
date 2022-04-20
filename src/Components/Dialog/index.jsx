import React from 'react'
import Close from '../../Assets/images/close';
import './style.scss';


export default function Dialog(props) {
  const { isClosed } = props;
  return (
    <>
      <section className={`dialog-container  ${isClosed && 'active'}`}>
        <section className='dialog-excrete' onClick={props.handleClose} />
        <section className={`dialog ${!isClosed && 'hide'}`}>
          <div className='dialog-header'>
            <div className='dialog-header--title'>
              <h5 className='m-0'>
                {props.header}
              </h5>
            </div>        
            <div className='dialog-header--close c-pointer' onClick={props.handleClose}>
              {Close(30, 30, '#33BC7E')}
            </div>
          </div>
          <div>
            {props.children}
          </div>
        </section>
      </section>
    </>
  )
}
