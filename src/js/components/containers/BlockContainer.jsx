import React from 'react';
import PropTypes from 'prop-types';
import {Block} from '../presentional/Block.jsx';
import {ElementContainer, ElementProperties} from '../containers/ElementContainer.jsx'




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
            }
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
    }
    moveStart(left, top){
        this.setState({
            moveStartDifference:Object.assign(this.state.resizeStartDifference,{
                left:left-this.state.layout.left,
                top:top-this.state.layout.top
            })
        })
        this.props.addToOnMouseUp(this.handleMoveStop);
        this.props.addToOnMouseMove(this.handleMove);
    }
    moveStop(left, top){
        this.move(left, top);
        this.props.setBlockProperties(this.props.blockNumber,{layout:this.state.layout})
        this.props.removeFromOnMouseMove(this.handleMove);
        
    }
    move(left, top){
        this.setState({
            layout:Object.assign(this.state.layout,{
                left: this.setValueInMinMax(left-this.state.moveStartDifference.left,0,document.getElementById('desktop').offsetWidth-this.state.layout.width),
                top: this.setValueInMinMax(top-this.state.moveStartDifference.top, 0, document.getElementById('desktop').offsetHeight-this.state.layout.height)
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
                left:left-this.state.layout.width,
                top:top-this.state.layout.height
            })
        })
        this.props.addToOnMouseUp(this.handleResizeStop);
        this.props.addToOnMouseMove(this.handleResize);
    }
    resizeStop(left, top){
        this.resize(left, top);
        this.props.setBlockProperties(this.props.blockNumber,{layout:this.state.layout})
        this.props.removeFromOnMouseMove(this.handleResize);
        
    }
    resize(left, top){
        this.setState({
            layout:Object.assign(this.state.layout,{
                width:this.setValueInMinMax(left-this.state.resizeStartDifference.left,40,document.getElementById('desktop').offsetWidth-this.state.layout.left),
                height:this.setValueInMinMax(top-this.state.resizeStartDifference.top,40,document.getElementById('desktop').offsetHeight-this.state.layout.top)
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
        Object.assign(newElementProperties,tempArrayOfElementsProp[elementNumber]);
        this.props.setBlockProperties(this.props.blockNumber,{arrayOfElementsProp:tempArrayOfElementsProp});
    }
    render(){
        this.state.arrayOfElements=this.props.arrayOfElementsProp.map((ElementProp,index)=>{
            return (<ElementContainer elementProperties ={ElementProp}
                        setElementProperties={this.setElementProperties}
                        elementNumber={index}
            />)
        })
        return <Block   layout={this.state.layout}
        value={this.state.value} 
        handleMoveStart={this.handleMoveStart}
        handleResizeStart={this.handleResizeStart} 
        content = {this.state.content}
        arrayOfElements = {this.state.arrayOfElements}
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