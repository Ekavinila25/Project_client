import React from 'react';
import Add from '../../Assets/images/add';
import Send from '../../Assets/images/send';
import Profile from '../../Assets/images/profile.jpeg'

const CollectionContainer = (props) => {
  const noteData = [
    {
      name: 'Sawraj',
      time: '6 mins ago',
      description: 'Ann Dorwart interested in Gold Subscription'
    },
    {
      name: 'Vignesh',
      time: '19 Oct 2021, 1.38 pm',
      description: 'Had a call with Ann Dorwart. Requested the proposal document and pricing quote asap.'
    }
  ];
  const files = [
    {
      name: 'Vignesh',
      time: '19 Oct 2021, 1.38 pm',
      fileName: 'Sales deed.pdf'
    },
    {
      name: 'Vignesh',
      time: '19 Oct 2021, 1.38 pm',
      fileName: 'Pricing Options.png'
    }
  ];
  const contacts = [1, 2, 3, 4];

  return (
    <section className='collection-container my-2 mr-2'>
      <div className='notes-container pt-3 px-3 mb-3'>
        <span className='notes-title mb-2'>Notes</span>
        <div className='d-flex align-items-center add-notes p-0 mb-3'>
          <input className='add-notes' placeholder='Add Notes Here...'/>
          <span className='px-3 c-pointer'>{Send(20, 20, '#33BC7E')}</span>
        </div>
        {noteData.map(data => 
          <div className='notes-details-container pb-3'>
            <div className='notes-details mb-2'>
              <div className='profile-pic mr-2'>
                <img src={Profile} alt='profile'/>
              </div>
              <div className='name mr-2'>{data.name}</div>
              <div className='mr-2'>•</div>
              <div className='time mr-2'>{data.time}</div>
            </div>
            <div className='note-description'>
              <span>{data.description}</span>
            </div>
          </div>
        )}
      </div>
      <div className='notes-container pt-3 px-3 mb-2'>
        <div className='d-flex justify-content-between mb-3'>
          <span className='notes-title'>Files</span>
          <span className="pr-1 c-pointer">{Add(20, 20, '#33BC7E')}</span>
        </div>
        {files.map(data => 
          <div className='notes-details-container pb-3'>
            <div className='notes-details mb-2'>
              <div className='profile-pic mr-2'></div>
              <div>
                <span className='file-name'>{data.fileName}</span>
                <div className='d-flex flex-row'>
                  <div className='name mr-2'>{data.name}</div>
                  <div className='mr-2'>•</div>
                  <div className='time mr-2'>{data.time}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='notes-container pt-3 px-3 mb-3'>
        <span className='notes-title mb-2'>Related Contacts</span>
        <div className='d-flex pb-3'>
          {contacts.map(contact =>
            <div className='contact-pic mr-2'>
              <img src={Profile} alt='profile'/>  
            </div>
          )}
        </div>
      </div>
    </section>
  )
};

export default CollectionContainer;
