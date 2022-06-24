import './App.css';

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

function App() {
    return (
        <div className="App">
            {/* Mouse Track */}
            <div className="cursor"></div>
            
            {/* Icon top pag */}
            <div className="reveal">
                <i className="fa-solid fa-arrow-turn-up fa-2x"></i>
            </div>
            
            {/* Inizio Navbar */}
            
            <nav id="navbar">
                <div className="box-link">
                    <a href="/">Quiz</a>
                </div>
                
                <div className="btn-custom">
                    <span className="nav-top"></span>
                    <span className="nav-middle"></span>
                    <span className="nav-middle-angle"></span>
                    <span className="nav-bottom"></span>
                </div>
                
            </nav>
    
            {/* Link della navbar a comparsa */}
            <div className="link-utils">
                <a className="link-line-1" href="/test">
                    <h2><span className="underline-custom-1"></span>chi fossimo</h2>
                </a>
                <a className="link-line-2" href="#">
                    <h2><span className="underline-custom-2"></span>servizi</h2>
                </a>
                <a className="link-line-3" href="#">
                    <h2><span className="underline-custom-3"></span>portfolio</h2>
                </a>
                <a className="link-line-4" href="#">
                    <h2><span className="underline-custom-4"></span>lavora con noi</h2>
                </a>
                <a className="link-line-6" href="#">
                    <h2><span className="underline-custom-5"></span>contattazioni</h2>
                </a>
                <a className="link-line-7" href="#">
                    <h2><span className="underline-custom-5"></span>Ciao</h2>
                </a>
                <a className="link-line-8" href="#">
                    <h2><span className="underline-custom-5"></span>Nico</h2>
                </a>
                <a className="link-line-9" href="#">
                    <h2><span className="underline-custom-5"></span>Funge</h2>
                </a>
                <a className="link-line-10" href="#">
                    <h2><span className="underline-custom-5"></span>Tutto</h2>
                </a>
                <a className="link-line-11" href="#">
                    <h2><span className="underline-custom-5"></span>Adesso?</h2>
                </a>
                <a className="link-line-12" href="#">
                    <h2><span className="underline-custom-5"></span>LOL</h2>
                </a>
            </div>
        </div>
    );
}
    
export default App;