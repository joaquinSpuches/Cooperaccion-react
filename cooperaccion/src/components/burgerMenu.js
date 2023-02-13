import React from "react"; 


 function BurgerMenu (props){
 

    
        return(
            <div className="bur" style={{paddingLeft:'20px',paddingTop:'10px', position: 'fixed',zIndex:'2',width: '100vw',display: 'flex', backdropFilter: 'blur(4px)' }} > 
            <div onClick={props.handleClick}  className={`hamburger ${props.clicked ? 'is-active':''} `} id="hamburger-6">
            <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            </div>
        )
    }

export default BurgerMenu