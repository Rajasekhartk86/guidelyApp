import React from 'react';
import { Link } from 'react-router-dom';
import "./../../css/mediaQuery.css";

function Type(){
    return(
        <div className="typeContainer scrollmenu">
           <div className="type_text">Type</div> 
           <div className="typeRow">
               <Link to="/test-series" className="anchortagStyleRemove">
           <div className="eachTypeContainer">
                   <img src={require("./../../assests/TestSeries.png")} alt=""/>
               <div>
                   Test Series
               </div>
           </div>
           </Link>
           <Link to="/practice-quiz" className="anchortagStyleRemove">
           <div className="eachTypeContainer">
                   <img src={require("./../../assests/Puzzle.png")} alt="" />
               <div>
                   Practice Quiz
               </div>
           </div>
           </Link>
           <Link to="/video-courses" className="anchortagStyleRemove">
           <div className="eachTypeContainer">
                   <img src={require("./../../assests/video.png")} alt="" />
               <div>
                   Video Courses
               </div>
           </div>
           </Link>
           <Link to="/e-book" className="anchortagStyleRemove">
           <div className="eachTypeContainer">
                   <img src={require("./../../assests/ebook.png")} />
               <div>
                   Ebook
               </div>
           </div>
           </Link>
           <Link to="/publications" className="anchortagStyleRemove">
           <div className="eachTypeContainer">
                   <img src={require("./../../assests/publication.png")} alt="" />
               <div>
                   Publication
               </div>
           </div>
           </Link>
           <Link to="/pdf" className="anchortagStyleRemove">
           <div className="eachTypeContainer">
                   <img src={require("./../../assests/pdf.png")} alt="" />
               <div>
                   PDF
               </div>
           </div>
           </Link>
           </div>
        </div>
    )
}


export default Type