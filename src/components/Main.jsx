import React from 'react'
import App from './Demo'
import InfoModal from './InfoModal'




const Main = () => {
    return (
        <div className='w-full bg-slate-300 h-[708px] flex items-center justify-center'>
            <div className='w-[60%] mt-10 '>
                <App />
                <InfoModal/>
            </div>
        </div>

    )
}

export default Main
