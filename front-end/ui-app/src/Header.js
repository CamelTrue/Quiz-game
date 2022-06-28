import React, {useEffect, useState} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import InterfaceQuestion from './InterfaceQuestion';

const Header = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <header id='header'>
            <div className='container-title-header'>
                <h1 className='title-header' data-aos="fade-left">Benvenuto dentro quiz game</h1>
                <div className='container'>
                    <div className='row flex-row align-items-center'>
                        <div className='col-12 col-md-8 col-lg-4'>
                            <ButtonStart />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

const ButtonStart = () => {
    const [isShown, setIsReveal] = useState(false)

    const handleClick = () => {
        setIsReveal(true);
      };
      

    return (
        <div>
            <button className='button-reveal' data-aos="fade-left" onClick={handleClick}>START GAME</button>
            {isShown && (
                <div>
                    <InterfaceQuestion />
                </div>
            )}
        </div>
    )
}
    
export default Header