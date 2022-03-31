import React from "react";

const Navigation =()=>{
    function onPreviousClick(e){
        console.log('previous');
    }
    function onNextClick(e){
        console.log('next');
    }
    return (
        <nav>
            <button onClick={onPreviousClick} >Previous</button>
            <span>+</span>
            <button onClick={onNextClick}>Next</button>
        </nav>
    )
}

export default Navigation;