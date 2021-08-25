import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

function Blog() {
    return (
        <div className="blog">
            <h1 className="blog-title"> Blog </h1>
            <ul className="article-list">
                <li>
                    <p> December 27, 2020</p>
                    <h3 className="article-title"> <Link className="article-link" to="/blog/article-01"> A Statistical Approach to UFC Betting </Link> </h3>
                </li>
            </ul>
        </div>
    );
}

export default Blog;