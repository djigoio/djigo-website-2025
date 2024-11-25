import React from 'react';
import Item from './Item'

const CS = () => {
    return (<div className='text-right customer-content' style={{ wordWrap: 'break-word', width: '65%',  marginLeft:'auto', paddingRight: '20px', marginTop:'40px'}}>
    <Item text="Manage *full life-cycle* of customer relationships."/>
    <Item text="Onboarding, configuration, training, best practices."  />
    <Item text="Coordinate *technical support*, manage escalations."  />
    <Item text="Monitor *customer health metrics*, *up-selling* initiatives"  />
    </div>
    );
};

export default CS;