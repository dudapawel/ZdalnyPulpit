import React from 'react';
import ReactDOM from 'react-dom';
import {Page} from '../presentional/Page.jsx';

class PageContainer extends React.Component{
    render(){
        return <Page/>;
    }
}

export default PageContainer;
ReactDOM.render(<PageContainer/>, document.getElementById('app'));