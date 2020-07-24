import React from 'react'
import loader from './images/loader.gif'
const style = { display: 'block', margin: 'auto' };

const Loader = () =>
    <img style={ style } src={loader} height="128" alt="Loading..."/>;

export default Loader