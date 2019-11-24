import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../auxialaries/Constants.js'


const styleRemoveButton = {
    position:'absolute',
    top:0,
    right:0,
    width:CONSTANTS.BLOCK_REMOVE_BUTTON_WIDTH
}
const styleResizeButton={
    backgroundColor:'red',
    border: 'none',
    height: CONSTANTS.BLOCK_RESIZE_BUTTON_HEIGHT,
    width:CONSTANTS.BLOCK_RESIZE_BUTTON_WIDTH,
    position: 'absolute',
    bottom:0,
    right:0
}

export class Block extends React.Component {
    render(){
        const styleBlock = {
            backgroundColor:'#ffffcc',
            border: 'none',
            position: 'absolute',
            left: this.props.layout.left,
            top: this.props.layout.top
        }
        const styleHeader = {
            backgroundColor:'orange',
            border: 'none',
            height: CONSTANTS.BLOCK_HEADER_HEIGHT,
            width: this.props.layout.width-CONSTANTS.BLOCK_REMOVE_BUTTON_WIDTH
        }
        const styleBody={
            border: 'none',
            overflow: 'auto',
            height: this.props.layout.height,
            width: this.props.layout.width
        
        }
        return (<div style ={styleBlock} >
                    <div style={styleHeader} onMouseDown={this.props.handleMoveStart} >
                        <button style={styleRemoveButton} onClick={this.props.handleRemoveBlockProperties}>x</button>
                    </div>
                    <div style={styleBody}>
                        {this.props.arrayOfElements}
                    </div>
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
