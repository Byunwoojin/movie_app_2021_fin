import React from "react";
import "./About.css";

function About(props) {
    console.log(props);
    return (
      <div style={{  display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        padding: "50px",
        marginLeft:"10%",
        paddingTop: "70px",
        width: "80%"}}>
          
        <div className="about__container">
          <span>
          “A wise man can learn more from his enemies than a fool from his friends.”
          </span>
                <span>− Rush, Niki Lauda</span>
        </div>
        <div className="about__container">
          <span>
          “Don’t let anyone ever make you feel like you don’t deserve what you want.”
          </span>
                <span>− 10 Things I Hate About You, Heath Ledger</span>
          </div>
          <div className="about__container">
            <span>
            “Great men are not born great, they grow great.”
            </span>
                  <span>− The Godfather, Mario Puzor</span>
          </div>
          <div className="about__container">
            <span>
            “In this life, you don’t have to prove nothin’ to nobody but yourself. And after what you’ve gone through, if you haven’t done that by now, it ain’t gonna never happen. Now go on back.”
            </span>
                  <span>− Rudy, Fortune</span>
            </div>
            <div className="about__container">
            <span>
            “In this life, you don’t have to prove nothin’ to nobody but yourself. And after what you’ve gone through, if you haven’t done that by now, it ain’t gonna never happen. Now go on back.”
            </span>
                  <span>− Rudy, Fortune</span>
            </div>
            <div className="about__container">
            <span>
            “In this life, you don’t have to prove nothin’ to nobody but yourself. And after what you’ve gone through, if you haven’t done that by now, it ain’t gonna never happen. Now go on back.”
            </span>
                  <span>− Rudy, Fortune</span>
            </div>
            
        </div>
    );
}

export default About;