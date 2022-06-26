import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


const InterfaceQuestion = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <section id='section-iq'>
            <div className='title-section-iq' data-aos="fade-left">Domanda</div>
            <div className='possible-question-iq' data-aos="fade-left">Risposta</div>
            <div className='possible-question-iq' data-aos="fade-left">Risposta</div>
            <div className='possible-question-iq' data-aos="fade-left">Risposta</div>
            <div className='possible-question-iq' data-aos="fade-left">Risposta</div>
        </section>
    )
}
    
export default InterfaceQuestion