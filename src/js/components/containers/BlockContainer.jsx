import React from 'react';
import PropTypes from 'prop-types';
import {Block} from '../presentional/Block.jsx';
import {ElementContainer, ElementProperties} from '../containers/ElementContainer.jsx';
import CONSTANTS from '../auxialaries/Constants.js'




export class BlockContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={layout:props.layout,
            value:0,
            content:props.content,
            focused:false,
            moveStartDifference:{
                left:0,
                top:0, 
            },
            resizeStartDifference:{
                left:0,
                top:0, 
            },
            useStateLayout:false
        }
        this.moveStart=this.moveStart.bind(this);
        this.moveStop=this.moveStop.bind(this);
        this.handleMoveStop=this.handleMoveStop.bind(this);
        this.handleMove=this.handleMove.bind(this);
        this.handleMoveStart=this.handleMoveStart.bind(this);
        this.resizeStart=this.resizeStart.bind(this);
        this.resizeStop=this.resizeStop.bind(this);
        this.handleResizeStop=this.handleResizeStop.bind(this);
        this.handleResize=this.handleResize.bind(this);
        this.handleResizeStart=this.handleResizeStart.bind(this);
        this.setElementProperties=this.setElementProperties.bind(this);
        this.handleRemoveBlockProperties=this.handleRemoveBlockProperties.bind(this);
    }
    moveStart(left, top){
        this.setState({
            moveStartDifference:Object.assign(this.state.resizeStartDifference,{
                left:left-this.props.layout.left,
                top:top-this.props.layout.top
            })
        })
        this.state.useStateLayout=true;
        this.state.layout=this.props.layout;
        this.props.addToOnMouseUp(this.handleMoveStop);
        this.props.addToOnMouseMove(this.handleMove);
    }
    moveStop(left, top){
        this.move(left, top);
        this.props.setBlockProperties(this.props.blockNumber,{layout:this.state.layout})
        this.state.useStateLayout=false;
        this.props.removeFromOnMouseMove(this.handleMove);
        
    }
    move(left, top){
        this.setState({
            layout:Object.assign(this.state.layout,{
                left: this.setValueInMinMax(left-this.state.moveStartDifference.left,0,document.getElementById('desktop').offsetWidth-this.state.layout.width),
                top: this.setValueInMinMax(top-this.state.moveStartDifference.top, 0, document.getElementById('desktop').offsetHeight-this.state.layout.height-CONSTANTS.BLOCK_HEADER_HEIGHT)
            })
        })
    }
    handleMoveStop(e){
        this.moveStop(e.clientX, e.clientY);
    }
    handleMove(e){
        this.move(e.clientX, e.clientY);
    }
    handleMoveStart(e){
        this.moveStart(e.clientX, e.clientY);
    }
    resizeStart(left, top){
        this.setState({
            resizeStartDifference:Object.assign(this.state.resizeStartDifference,{
                left:left-this.props.layout.width,
                top:top-this.props.layout.height
            })
        })
        this.state.useStateLayout=true;
        this.props.addToOnMouseUp(this.handleResizeStop);
        this.props.addToOnMouseMove(this.handleResize);
    }
    resizeStop(left, top){
        this.resize(left, top);
        this.props.setBlockProperties(this.props.blockNumber,{layout:this.state.layout});
        this.state.useStateLayout=false;
        this.props.removeFromOnMouseMove(this.handleResize);
        
    }
    resize(left, top){
        this.setState({
            layout:Object.assign(this.state.layout,{
                width:this.setValueInMinMax(left-this.state.resizeStartDifference.left,
                                            CONSTANTS.MIN_BLOCK_WIDTH,
                                            document.getElementById('desktop').offsetWidth-this.state.layout.left),
                height:this.setValueInMinMax(top-this.state.resizeStartDifference.top,
                                            CONSTANTS.MIN_BLOCK_HEIGHT,
                                            document.getElementById('desktop').offsetHeight-this.state.layout.top-CONSTANTS.BLOCK_HEADER_HEIGHT)
            })
        })
    }
    handleResizeStop(e){
        this.resizeStop(e.clientX, e.clientY);
    }
    handleResize(e){
        this.resize(e.clientX, e.clientY);
    }
    handleResizeStart(e){
        this.resizeStart(e.clientX, e.clientY);
    }
    setValueInMinMax(value, min, max){
        if(value<min) return min;
        if(value>max) return max;
        return value;
    }
    setElementProperties(elementNumber, newElementProperties){
        const tempArrayOfElementsProp=this.props.arrayOfElementsProp;
        Object.assign(tempArrayOfElementsProp[elementNumber],newElementProperties);
        
        window.console.error(tempArrayOfElementsProp[elementNumber]);
        this.props.setBlockProperties(this.props.blockNumber,{arrayOfElementsProp:tempArrayOfElementsProp});
    }
    handleRemoveBlockProperties(){
        this.props.removeBlockProperties(this.props.blockNumber);
    }
    
    render(){
        this.state.arrayOfElements=this.props.arrayOfElementsProp.map((ElementProp,index)=>{
            return (<ElementContainer elementProperties ={ElementProp}
                        setElementProperties={this.setElementProperties}
                        elementNumber={index}
            />)
        })
        return <Block   layout={this.state.useStateLayout?this.state.layout:this.props.layout}
        value={this.state.value} 
        handleMoveStart={this.handleMoveStart}
        handleResizeStart={this.handleResizeStart} 
        content = {this.state.content}
        arrayOfElements = {this.state.arrayOfElements}
        handleRemoveBlockProperties={this.handleRemoveBlockProperties}
        />;
    }
}

BlockContainer.propTypes = {
    layout:PropTypes.shape({
        left:PropTypes.number, 
        top:PropTypes.number, 
        height:PropTypes.number, 
        width:PropTypes.number
    }),
    addToOnMouseUp:PropTypes.func.isRequired,
    addToOnMouseMove:PropTypes.func.isRequired,
    removeFromOnMouseMove:PropTypes.func.isRequired
}
BlockContainer.defaultProps = {
    layout: {
        left:100, 
        top:100, 
        height:80, 
        width:80
    }
  };