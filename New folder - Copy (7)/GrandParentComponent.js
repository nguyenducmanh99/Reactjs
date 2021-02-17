import React from 'react';
import ParentComponent from './ParentComponent';
import MessageContext from './MessageContext'
function GrandParentComponent(props) {

    const message = "Cố học đi cháu";
    const message1="Sao m ngu the"
    return (
        <MessageContext.Provider value={message,message1}>
            <ParentComponent />
        </MessageContext.Provider>
        
    )
}

export default GrandParentComponent;


