import React from 'react'

const Header = () => {
    return (
        <header id='header'>
            <div className='container-title-header'>
                <h1 className='title-header'>Benvenuto dentro quiz game</h1>
                <ButtonStart/>
            </div>
        </header>
    )
}

const ButtonStart = () => {
    return (
        <button className='button-reveal'>START GAME</button>
    )
}
    
export default Header