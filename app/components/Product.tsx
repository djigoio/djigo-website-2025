import React from 'react';
import Item from './Item'

const Product = () => {
    return (<div className='product-content' style={{ wordWrap: 'break-word', width: '280px', marginLeft:'auto', paddingRight: '20px', marginTop:'auto'}}>
    <Item text="Leading cross-functional teams to create innovative products." />
    <Item text="Expert in product ownership and project management using SCRUM"  />
    <Item text="Conducting market research, crafting strategic roadmaps, and overseeing the product lifecycle. " />
    </div>
    );
};

export default Product;
