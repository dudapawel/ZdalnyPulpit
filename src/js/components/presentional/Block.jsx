import React from 'react';
import PropTypes from 'prop-types';

const styleBlock = {
    backgroundColor:'red',
    border: 'none',
    height: 80,
    width:80,
    position: 'absolute'
}
const styleHeader = {
    backgroundColor:'blue',
    border: 'none',
    height: 20
}
const styleResizeButton={
    backgroundColor:'black',
    border: 'none',
    height: 10,
    width:10,
    position: 'absolute',
    bottom:0,
    right:0
}
export class Block extends React.Component {
    render(){
        const styleBlock = {
            backgroundColor:'red',
            border: 'none',
            height: this.props.layout.height,
            width: this.props.layout.width,
            position: 'absolute',
            left: this.props.layout.left,
            top: this.props.layout.top
        }
        return (<div style ={styleBlock} >
                    <div style={styleHeader} onMouseDown={this.props.handleMoveStart} ></div>
                    {this.props.arrayOfElements}
                    <div style={styleResizeButton} onMouseDown={this.props.handleResizeStart}></div>
                </div>);
    }
}

Block.propTypes={
    layout: PropTypes.shape({
        left:PropTypes.number, 
        top:PropTypes.number, 
        height:PropTypes.number, 
        width:PropTypes.number
    }).isRequired,
    handleMoveStart: PropTypes.func.isRequired,
    handleResizeStart: PropTypes.func.isRequired
}
