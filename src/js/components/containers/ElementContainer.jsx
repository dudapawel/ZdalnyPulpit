import React from 'react';
import {Element} from '../presentional/Element.jsx'
import ContentType from '../auxialaries/ContentType.jsx'



export class ElementContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            onClickEvent:[]
        }
        this.changeContent=this.changeContent.bind(this);
        this.onClick=this.onClick.bind(this);
        this.addToOnClick=this.addToOnClick.bind(this);
        this.removeFromOnClick=this.removeFromOnClick.bind(this);
    }
    changeContent(newElementProperties){
        this.props.setElementProperties(this.props.elementNumber,newElementProperties)
    }
    onClick(e){
        this.state.onClickEvent.forEach(element => {
            element(e);
        });
    }
    addToOnClick(func){
        this.state.onClickEvent.push(func);
    }
    removeFromOnClick(func){
        this.state.onClickEvent.splice(this.state.onClickEvent.indexOf(func),1);
    }
    render(){
        this.state.contentClass=ContentType[this.props.elementProperties.type];
        this.state.value=this.props.elementProperties.value;
        return (< Element contentClass={this.state.contentClass} 
                        changeContent={this.changeContent}
                        value={this.state.value}
                        onClick={this.onClick}
                        addToOnClick ={this.addToOnClick}
                        removeFromOnClick={this.removeFromOnClick}/>);
    }
}