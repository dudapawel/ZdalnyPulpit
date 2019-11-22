import React from 'react';
import PropTypes from 'prop-types';

const style = {
    backgroundColor:'bisque',
    border: 'none',
    outline: 'none',
    height: window.innerHeight-100,
    marginLeft:200,
    contain:'layout'
}

export const Desktop = (props)=>{
    return (<div id="desktop" style ={style} onMouseUp={props.onMouseUp} 
            onMouseMove={props.onMouseMove} 
            onMouseLeave={props.onMouseUp} >
                {props.arrayOfBlocks}
            </div>);
}

Desktop.propTypes = {
    onMouseUp:PropTypes.func.isRequired,
    onMouseMove:PropTypes.func.isRequired,
    arrayOfBlocks:PropTypes.array
}
