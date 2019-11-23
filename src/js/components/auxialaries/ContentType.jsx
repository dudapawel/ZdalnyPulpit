import React from 'react';
import {ElementProperties} from '../auxialaries/ElementProperties.js'
class Base extends React.Component{
    constructor(props){
        super(props);
        this.change=this.change.bind(this);
        props.addToOnClick(this.change);
    }
    componentWillUnmount(){
        this.props.removeFromOnClick;
    }
}
class Text extends Base{
    constructor(props){
        super(props);
        this.state={
            value:props.value
        }
    }
    change(){
        window.console.error('f');
        this.props.changeContent(new ElementProperties(Text, prompt('Set new value')));
        
        
    }
    render(){
        return <p>{this.state.value}</p>
    }

}
class New extends Base{
    constructor(props){
        super(props);
    }
    change(){};
    render(){
        return <p>I am new</p>
    }

}

const ContentType={
    Base : Base,
    Text : Text,
    New : New
};

export default ContentType;