import React from 'react';
import './Home.css';

function Home() {

    return (
        <body>
        <header>
            <nav id='header-nav' className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-brand">
                        <h1 style={{color: "white"}}>Welcome to My Project</h1>
    
                    </div>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="/login"><h3>Login</h3></a>
                        </li>
                       
                      </ul>
    
                </div>
    
            </nav>
            
        </header>
    
        
    
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js"></script>
    </body>
    
        
    )
}

export default Home;