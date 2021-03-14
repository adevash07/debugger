import React from 'react'
import './togglerComponent.scss';
 
const Toggler = () => {
        return (
            <div className="toggler" id="toggler">
                <button className="toggler-btn1" id="toggler-btn1"></button>
                <button className="toggler-btn2" id="toggler-btn2"></button>
                <button className="toggler-btn3" id="toggler-btn3"></button>
                <button className="toggler-btn4" id="toggler-btn4"></button>
            </div>
        );
    
}

export default Toggler;