import React from 'react';
import {Element} from '../presentional/Element.jsx'
import ContentType from '../auxialaries/ContentType.jsx'

export class ElementProperties{
    constructor(type, value){
        this.type=type;
        this.value=value;
    }

}

export class ElementContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            contentClass:ContentType[props.elementProperties.type],
            value:(props.elementProperties.value)
        }
    }
    render(){
        return < Element contentClass={this.state.contentClass} value={this.state.value}  />;
    }
}