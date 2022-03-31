import React from "react";

const Navigation =(props)=>{
    const {total} = props;
    function onPreviousClick(e){
        console.log('previous');
    }
    function onNextClick(e){
        console.log('next');
    }
    return (
        
        <nav>
            <button onClick={onPreviousClick} >Previous</button>
            <span>1 to {total} </span>
            <button onClick={onNextClick}>Next</button>
        </nav>
    )
}

export default Navigation;