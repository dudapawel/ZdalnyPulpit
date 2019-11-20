import React from 'react';
import {Desktop} from '../presentional/Desktop.jsx';

export class DesktopContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            onMouseUpEvent:[],
            onMouseMoveEvent:[]
            
        }
        this.onMouseUp=this.onMouseUp.bind(this);
        this.addToOnMouseUp=this.addToOnMouseUp.bind(this);
        this.onMouseMove=this.onMouseMove.bind(this);
        this.addToOnMouseMove=this.addToOnMouseMove.bind(this);
        this.removeFromOnMouseMove=this.removeFromOnMouseMove.bind(this);
    }
    onMouseUp(e){
        this.state.onMouseUpEvent.forEach(element => {
            element(e);
        });
        this.state.onMouseUpEvent=[];
    }
    addToOnMouseUp(func){
        this.state.onMouseUpEvent.push(func);
    }
    onMouseMove(e){
        this.state.onMouseMoveEvent.forEach(element => {
            element(e);
        });
    }
    addToOnMouseMove(func){
        this.state.onMouseMoveEvent.push(func);
    }
    removeFromOnMouseMove(func){
        this.state.onMouseMoveEvent.splice(this.state.onMouseMoveEvent.indexOf(func),1);
    }
    render(){
        return (<Desktop onMouseUp={this.onMouseUp} 
        addToOnMouseUp={this.addToOnMouseUp}
        onMouseMove={this.onMouseMove} 
        addToOnMouseMove={this.addToOnMouseMove}
        removeFromOnMouseMove={this.removeFromOnMouseMove}
        />);
    }
}