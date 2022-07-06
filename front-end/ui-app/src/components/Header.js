import ButtonStart from './ButtonStart';
import {motion} from 'framer-motion'

const Header = () => {
    return (
        <header id='header'>
            <div className='container-title-header'>

                <motion.h1 className='title-header' animate={{x : 100}}>Benvenuto dentro quiz game</motion.h1>
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



export default Header