import React from 'react';
import Item from './Item'

const CS = () => {
    return (<div className='text-right customer-content pr-6 sm:pr-9' style={{ wordWrap: 'break-word', width: '65%', marginLeft:'auto', marginTop:'auto'}}>
    <Item text="Onboarding, configuration, training, best practices for *+50 customers*."  />
    <Item text="Coordinate *technical support*, manage escalations."  />
    <Item text="Monitor *customer health metrics*, *up-selling* initiatives"  />
    </div>
    );
};

export default CS;