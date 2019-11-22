import React from 'react';
import PropTypes from 'prop-types';
import {BlockContainer} from '../containers/BlockContainer.jsx';
import {Desktop} from '../presentional/Desktop.jsx';
import ContentType from '../auxialaries/ContentType.jsx'

export class DesktopContainer extends React.Component{
    constructor(props){
        super(props);
        this.onMouseUp=this.onMouseUp.bind(this);
        this.addToOnMouseUp=this.addToOnMouseUp.bind(this);
        this.onMouseMove=this.onMouseMove.bind(this);
        this.addToOnMouseMove=this.addToOnMouseMove.bind(this);
        this.removeFromOnMouseMove=this.removeFromOnMouseMove.bind(this);
        this.state = {
            onMouseUpEvent:[],
            onMouseMoveEvent:[],
            arrayOfBlocks:[(<BlockContainer layout={{left:200, top:200, height:80, width:80}}
                content = {<ContentType.Text value={'df'}/>}
                addToOnMouseUp={this.addToOnMouseUp}
                addToOnMouseMove={this.addToOnMouseMove}
                removeFromOnMouseMove={this.removeFromOnMouseMove}
            />)]
        }
        
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
        onMouseMove={this.onMouseMove} 
        arrayOfBlocks={this.state.arrayOfBlocks}
        />);
    }
}
DesktopContainer.propTypes = {
    
}