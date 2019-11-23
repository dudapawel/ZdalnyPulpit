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
                new BlockProperties({left:200, top:100, width:80, height:80}, 
                                    false, 
                                    [
                                        new ElementProperties('Text', 'hej'),
                                        new ElementProperties('Text', 'ho') 
                                    ]),
                new BlockProperties({left:600, top:200, width:140, height:100}, 
                                        false, 
                                        [
                                            new ElementProperties('Text', 'xx'),
                                            new ElementProperties('Text', 'yy') 
                                        ]),
            ]
        }
        this.setBlockProperties=this.setBlockProperties.bind(this);
    }
    setBlockProperties(blockNumber, newBlockProperties){
        const tempArrayOfBlocksProp=this.state.arrayOfBlocksProp;
        window.console.warn(tempArrayOfBlocksProp[blockNumber]);
        Object.assign(newBlockProperties,tempArrayOfBlocksProp[blockNumber]);
        this.setState(Object.assign({arrayOfBlocksProp:tempArrayOfBlocksProp},this.state));
    }
    render(){
        return (<Page arrayOfBlocksProp={this.state.arrayOfBlocksProp}
                        setBlockProperties={this.setBlockProperties}
        />);
    }
}

export default PageContainer;
ReactDOM.render(<PageContainer/>, document.getElementById('app'));