import React from 'react';
import Item from './Item'

const Product = () => {
    return (<div className='text-right product-content' style={{ wordWrap: 'break-word', width: '65%', marginLeft:'auto', paddingRight: '20px', marginTop:'40px'}}>
    <Item text="Leading *cross-functional teams* to create innovative products." />
    <Item text="Expert in product *ownership* and project *management* using *SCRUM*"  />
    <Item text="Conducting *market research*, crafting strategic *roadmaps*, and overseeing the *product lifecycle.*" />
    </div>
    );
};

export default Product;
