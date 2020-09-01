import React, { useEffect, useState } from 'react';
import './assets/css/base.css';
import './assets/css/main.css';
import './assets/css/fonts.css';
/* import './assets/js/jquery-3.2.1.min.js';
import './assets/js/modernizr.js';
import './assets/js/pace.min.js';
import './assets/js/plugins.js';
import './assets/js/main.js'; */
import Footer from './Footer';
import Axios from 'axios';
import Header from './Header';
import Featured from './Featured';
import Preloader from './Preloader';
import { Link } from 'react-router-dom';

function Article() {
    
    useEffect(() => {

        getBlogData();


    }
        , []);

    const [BlogList, setBlogList] = useState([]);


    const getBlogData = () => {
        Axios.get("https://dizibytebackend.herokuapp.com/blogs").then(res => {
            setBlogList(res.data);
        })

    }
    console.log(BlogList);
    return (

        <div style={{ display: "flex"}}>

            <div>
                <div className="row masonry-wrap">
                    <div className="masonry">

                        <div className="grid-sizer"></div>
                        {BlogList.map(item => (

                            <div onClick={() => {

                            }}>
                                <Link to={{
                                    pathname: `article/${item._id}`,
                                    state : item.bytes
                                }}>
                                    <article className="masonry__brick entry format-standard" data-aos="fade-up">

                                        <div className="entry__thumb">
                                            <a href="single-standard.html" className="entry__thumb-link">
                                                <img src={item.blogImage}
                                                    alt="" />
                                            </a>
                                        </div>

                                        <div className="entry__text">
                                            <div className="entry__header">

                                                <div className="entry__date">
                                                    <a href="single-standard.html">{item.date}</a>
                                                </div>
                                                <h1 className="entry__title"><a href="single-standard.html">{item.title}</a></h1>

                                            </div>
                                            <div className="entry__excerpt">
                                                <p>
                                                    {item.content}
                                                </p>
                                            </div>
                                            <div className="entry__meta">
                                                <span className="entry__meta-links">
                                                    <a href="category.html">{item.tag}</a>

                                                </span>
                                            </div>
                                        </div>

                                    </article>
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>


            </div>

        </div>


    );
}

export default Article;

