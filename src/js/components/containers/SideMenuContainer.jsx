import React from 'react';
import {SideMenu} from '../presentional/SideMenu.jsx';

export class SideMenuContainer extends React.Component{
    render(){
        return <SideMenu addBlockProperties={this.props.addBlockProperties}/>;
    }
}