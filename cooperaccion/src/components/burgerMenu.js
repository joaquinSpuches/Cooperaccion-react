import React from "react"; 


 function BurgerMenu (props){
 

    
        return(
            <div style={{padding:'20px', position: 'fixed',zIndex:'2'}} > 
            <div onClick={props.handleClick}  className={`hamburger ${props.clicked ? 'is-active':''} `} id="hamburger-6">
            <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div></div>
        )
    }

export default BurgerMenu