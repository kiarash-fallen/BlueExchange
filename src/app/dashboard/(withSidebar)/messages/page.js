import React from 'react'
import ClientsContainer from '../../../../../components/dashboard/messages/ClientsContainer'
import ChatContainer from '../../../../../components/dashboard/ChatContainer'

function page() {
    return (
        <div className="flex justify-between">
            <div className="w-[26%]">
                <ClientsContainer />
            </div>
            <div className="w-[72%]">
                <ChatContainer />
            </div>
        </div>
    )
}

export default page