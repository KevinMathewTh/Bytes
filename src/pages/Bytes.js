import React, { useEffect, useState } from 'react';
import './assets/css/base.css';
import './assets/css/main.css';
import './assets/css/fonts.css';
import Header from './Header';
import Footer from './Footer';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
function Bytes(props) {


  console.log(props.location.state);
  return (
    <div style={{backgroundColor:"white"}}>
    
    <Header />
   <div className="accordian" style={{marginTop:200}}></div>
    
      {props.location.state.map(byteContent => (
        <div >
         <div className="container row">
         <Accordion allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {byteContent.title}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                      <div className="row">
                      <div className="col-md">
                      {byteContent.byteImage}
                      </div>
                      <div className="col-md">
                      {byteContent.content}
                      </div>
                      </div>
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
           
        </Accordion>
        </div>
        </div>
      ))}
    
    <Footer />

    </div>

  );
}

export default Bytes;
