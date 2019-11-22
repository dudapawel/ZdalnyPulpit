import React from 'react';
class Base extends React.Component{
    constructor(props){
        super(props)
    }
}
class Text extends Base{
    constructor(props){
        super(props);
        this.state={
            value:props.value
        }
    }
    render(){
        return <p>{this.state.value}</p>
    }

}
class New extends Base{
    constructor(props){
        super(props);
    }
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