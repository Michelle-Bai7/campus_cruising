import React from 'react';

function Home() {
    return (
        <div class="home">
            <div class="navbar">
                <button type="button" class="login">Log-in</button>
                <button type="button" class="signup">Sign Up</button>
            </div>
            <div class="home-container">
                <div class="home-elements">
                    <h1 className="HomeLogo">CAMPUS CRUISIN</h1>
                    <input class="search-bar" type="text" placeholder="Club Name"></input>
                    <button type="button">Search All Clubs</button>
                </div>   
            </div>
        </div>
    );
}

export default Home