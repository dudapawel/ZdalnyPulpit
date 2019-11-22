import React from 'react';
import {HeaderContainer} from '../containers/HeaderContainer.jsx';
import {SideMenuContainer} from '../containers/SideMenuContainer.jsx';
import {DesktopContainer} from '../containers/DesktopContainer.jsx';

const style = {
    border: 'none',
}

export const Page = ()=>{
    return (<div style={style}>
                <HeaderContainer />
                <DesktopContainer/>
                <SideMenuContainer/>
            </div>);
}