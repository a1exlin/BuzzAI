import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div className='container'>
            <header className='header' style={{ fontSize: "2rem", textAlign: "center", margin: "10px 0", lineHeight: "1.2", }}>BuzzAI here, how can I help?</header>
            <figure class="image is-128x128">
                <img src="https://ramblinwreck.com/imgproxy/WKTS5PVxTppr1N2WZr2q0QIIbrebzVDufJuMwCDWCwg/fit/2500/2500/ce/0/aHR0cHM6Ly9yYW1ibGlud3JlY2suY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIzLzA1L01pc3NfMDkxNzIyX0RLLTYxMy5qcGc.jpg" class="center" className="image" style={{ width: "100%", maxWidth: "300px", height: "auto", display: "block", margin: "0 auto", }} />
            </figure>


        </div>

    );
}

export default Home;