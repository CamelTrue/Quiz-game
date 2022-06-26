import React from 'react'

const mouse = document.querySelector('.cursor');

// Mouse Track
window.addEventListener('mousemove', (e) => {
    mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
})

window.addEventListener('mouseover', (e) => {
    let hoveredElement = e.target;
    let hoverCheck = window.getComputedStyle(hoveredElement).cursor;

    if (hoverCheck === 'pointer') {
        mouse.classList.add('over-scale');
    } else {
        mouse.classList.remove('over-scale');
    }
})

const Navbar = () => {
    return (
        <nav id='nav'>
            {/* Mouse Track */}
            <div className="cursor"></div>
            
            {/* Inizio Navbar */}
            
            <div id="navbar">
                <div className="box-link">
                    <a className="override-color" href="/">Quiz</a>
                </div>
                
                <div className="btn-custom">
                    <span className="nav-top"></span>
                    <span className="nav-middle"></span>
                    <span className="nav-middle-angle"></span>
                    <span className="nav-bottom"></span>
                </div>    
            </div>
        </nav>
    )
}

export default Navbar