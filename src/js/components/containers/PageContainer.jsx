import React from 'react';
import ReactDOM from 'react-dom';
import {Page} from '../presentional/Page.jsx';
import {BlockProperties} from '../auxialaries/BlockProperties.js';
import {ElementProperties} from '../auxialaries/ElementProperties.js';

class PageContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            arrayOfBlocksProp:[
                new BlockProperties({left:200, top:300, width:80, height:80}, 
                                    false, 
                                    [
                                        new ElementProperties('Text', '12'),
                                        new ElementProperties('Text', '34') 
                                    ]),
                new BlockProperties({left:600, top:200, width:140, height:100}, 
                                        false, 
                                        [
                                            new ElementProperties('Text', 'ab'),
                                            new ElementProperties('Text', 'cd') 
                                        ]),
            ]
        }
        this.setBlockProperties=this.setBlockProperties.bind(this);
        this.addBlockProperties=this.addBlockProperties.bind(this);
        this.removeBlockProperties=this.removeBlockProperties.bind(this);
    }
    setBlockProperties(blockNumber, newBlockProperties){
        const tempArrayOfBlocksProp=this.state.arrayOfBlocksProp;
        Object.assign(tempArrayOfBlocksProp[blockNumber],newBlockProperties);
        this.setState(Object.assign(this.state,{arrayOfBlocksProp:tempArrayOfBlocksProp}));
    }
    addBlockProperties(){
        const newBlockProperties= new BlockProperties({left:100, top:100, width:140, height:100}, 
                                                        false, 
                                                        [
                                                            new ElementProperties('Text', 'new')
                                                        ]);
        const tempArrayOfBlocksProp=this.state.arrayOfBlocksProp;
        tempArrayOfBlocksProp.push(newBlockProperties);
        this.setState(Object.assign(this.state,{arrayOfBlocksProp:tempArrayOfBlocksProp}));
    }
    removeBlockProperties(blockNumber){
        const tempArrayOfBlocksProp=this.state.arrayOfBlocksProp.slice();
        tempArrayOfBlocksProp.splice(blockNumber, 1);
        const tempState=Object.assign({},this.state);
        Object.assign(tempState,{arrayOfBlocksProp:tempArrayOfBlocksProp})
        this.setState(tempState);
    }
    render(){
        return (<Page arrayOfBlocksProp={this.state.arrayOfBlocksProp}
                        setBlockProperties={this.setBlockProperties}
                        addBlockProperties={this.addBlockProperties}
                        removeBlockProperties={this.removeBlockProperties}
        />);
    }
}

export default PageContainer;
ReactDOM.render(<PageContainer/>, document.getElementById('app'));