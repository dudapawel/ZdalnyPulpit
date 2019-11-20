import React from 'react';

const styleBlock = {
    backgroundColor:'red',
    border: 'none',
    height: '80px',
    width:'80px',
    position: 'absolute'
}
const styleHeader = {
    backgroundColor:'blue',
    border: 'none',
    height: '20px'
}

export class Block extends React.Component {
    constructor(props){
        super(props);
        this.handleOnMouseDown=this.handleOnMouseDown.bind(this);
    }
    handleOnMouseDown(e){
        this.props.moveStart(e.clientX, e.clientY);
    }
    
    render(){
        const styleBlock = {
            backgroundColor:'red',
            border: 'none',
            height: this.props.height,
            width: this.props.width,
            position: 'absolute',
            left: this.props.left,
            top: this.props.top
        }
        return (<div style ={styleBlock} >
                    <div style={styleHeader} onMouseDown={this.handleOnMouseDown} ></div>
                    <p>{this.props.left} {this.props.top}</p>
                </div>);
    }
}