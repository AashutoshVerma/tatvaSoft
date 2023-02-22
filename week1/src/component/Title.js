import React from 'react';

function Title(props){
    return (
        <div>
            <h1> This is title {props.index} : {props.title}.</h1>
        </div>
    )
    
}

export default Title;