import React from 'react';
import './Home.css';
import { Bio } from '../components/Bio';
import { Projects } from '../components/Projects';

function Home() {
    return (
        <div className="Home">
            <Bio />
            <Projects />
        </div>
    );
}

export default Home;