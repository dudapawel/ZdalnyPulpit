import React from 'react';
import {Block} from '../presentional/Block.jsx';

export class BlockContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            left:props.left,
            top:props.top,
            width:80,
            height:80,
            focused:false,
            moveStartDifference:{
                left:0,
                top:0, 
            }

        }
        this.moveStart=this.moveStart.bind(this);
        this.moveStop=this.moveStop.bind(this);
        this.handleMoveStop=this.handleMoveStop.bind(this);
        this.handleMove=this.handleMove.bind(this);
    }
    moveStart(left, top,width,height){
        this.setState({
            moveStartDifference:{
                left:left-this.state.left,
                top:top-this.state.top
            }
        })
        this.props.addToOnMouseUp(this.handleMoveStop);
        this.props.addToOnMouseMove(this.handleMove);
    }
    moveStop(left, top){
        this.move(left, top);
        this.props.removeFromOnMouseMove(this.handleMove);
        
    }
    move(left, top){
        this.setState({
            left: this.setValueInMinMax(left-this.state.moveStartDifference.left,0,window.innerWidth-this.state.width),
            top: this.setValueInMinMax(top-this.state.moveStartDifference.top, 0, window.innerHeight-this.state.height)
        })
    }
    handleMoveStop(e){
        this.moveStop(e.clientX, e.clientY);
    }
    handleMove(e){
        this.move(e.clientX, e.clientY);
    }
    setValueInMinMax(value, min, max){
        if(value<min) return min;
        if(value>max) return max;
        return value;
    }
    render(){
        return <Block   left={this.state.left}
                        top={this.state.top}
                        width={this.state.width}
                        height={this.state.height}  
                        moveStart={this.moveStart} />;
    }
}
