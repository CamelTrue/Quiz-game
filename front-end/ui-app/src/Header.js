import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <header id='header'>
            <div className='container-title-header'>
                <h1 className='title-header' data-aos="fade-left">Benvenuto dentro quiz game</h1>
                <ButtonStart/>
            </div>
        </header>
    )
}

const ButtonStart = () => {
    return (
        <button className='button-reveal' data-aos="fade-left">START GAME</button>
    )
}
    
export default Header