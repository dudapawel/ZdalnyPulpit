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
    }
    change(){
        window.console.error('f');
        this.props.changeContent(new ElementProperties('Text', prompt('Set new value',this.state.value)));
        
        
    }
    render(){
        const style={
            wordWrap:'break-word'
        }
        this.state={
            value:this.props.value
        }
        return <p style={style}>{this.state.value}</p>
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