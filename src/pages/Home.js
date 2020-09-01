import React,{useEffect, useState} from 'react';
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
import Article from './Article';
import Preloader from './Preloader';
import {Link} from 'react-router-dom';

function Home() {

  
    return (

        <div className="Home">
            
            {/* <!-- pageheader================================================== --> */}
            <section className="s-pageheader s-pageheader--home">
               <Header />
               <Featured />
            </section> {/* <!-- end s-pageheader --> */}


            {/* <!-- s-content ================================================== --> */}
            <section className="s-content">

               <Article /> 

            </section> {/* <!-- s-content --> */}

            {/* <!-- s-footer================================================== --> */}
            
              <Footer />

             {/* <!-- end s-footer --> */}
            {/* <!-- preloader
    ================================================== --> */}
            <Preloader />
           
        </div>
    );
}

export default Home;
