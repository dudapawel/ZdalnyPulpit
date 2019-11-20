import React from 'react';
import {HeaderContainer} from '../containers/HeaderContainer.jsx';
import {SideMenuContainer} from '../containers/SideMenuContainer.jsx';
import {DesktopContainer} from '../containers/DesktopContainer.jsx';

const style = {
    border: 'none',
    outline: 'none'
}


export const Page = ()=>{
    return (<div style={style}>
                <HeaderContainer/>
                <SideMenuContainer/>
                <DesktopContainer/>
            </div>);
}