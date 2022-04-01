import React from "react";

const Navigation =(props)=>{
    const {total , onPreviousClick, onNextClick, page} = props;
    // function onPreviousClick(e){
    //     console.log('previous');
    // }
    // function onNextClick(e){
    //     console.log('next');
    // }
    return (
        
        <nav>
            <button onClick={onPreviousClick} >Previous</button>
            <span>{page } to {total} </span>
            <button onClick={onNextClick}>Next</button>
        </nav>
    )
}

export default Navigation;