import React from 'react';

const style = {
    backgroundColor:'#336699',
    border: 3,
    borderStyle:'solid',
    borderColor: 'black',
    height: 94
}
const textStyle={
    color:"white"
}
export const Header = ()=>{
    return (<div style={style}>
        <div style={textStyle}>"Add block" button - add new block<br/>
        "x" button on block - remove block<br/>
        Orange area on block- move block<br/>
        Red square on block - resize block<br/>
        Click on text in block - change text</div>
    </div>);
}