import React from 'react';
import GroupButton from '../GroupButton';

const TimelineContainer =() => {
  const handleClick = (value) => {
    console.log(value);
  };
  return (
  <section className='timeline-container m-2'>
    <div className='group-btn-wrapper pt-2 px-1'>
      <GroupButton titles={['Timeline', 'Conversations', 'Tasks']} handleClick={handleClick}/>
    </div>
  </section>
)};

export default TimelineContainer;
