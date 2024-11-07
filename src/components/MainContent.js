import React from "react";
import banner from "../assests/banner.jpg"
import b1 from "../assests/b1.jpg"
import b2 from "../assests/b2.jpg"
import b3 from "../assests/b3.htm"
import b4 from "../assests/b4.jpg"
import b5 from "../assests/b5.jpg"
import b6 from "../assests/b6.jpg"
import b7 from "../assests/b7.jpg"
import b8 from "../assests/b8.jpg"
import side from "../assests/side.jpg"
import CardPagination from "./pagination";
import Category from "./categories";



const MainContent = () => {
  return (
    <div className="main-content">
        <div className="sidemenu">
            <ul>
                <li>Category
Amazon Global </li>



<li>Include Out of Stock</li>
<li>お買い得品&割引</li>
<li>Today's Deals</li>
<li>All Discounts</li>
            </ul>
        <img className="imgsrcbg-side" src={side} alt="banner"/>
        </div>
 <main className="content">
      <section className="hero">
       
        <img className="imgsrc" src={banner} alt="banner"/>
      
      </section>
      <section className="about">
       
        <div className="items">
        <img className="imgsrcbg" src={b1} alt="banner"/>
        <img className="imgsrcbg" src={b2} alt="banner"/>
     
        <img className="imgsrcbg" src={b4} alt="banner"/>
        <img className="imgsrcbg" src={b5} alt="banner"/>
        <img className="imgsrcbg" src={b6} alt="banner"/>
        <img className="imgsrcbg" src={b7} alt="banner"/>
        
        </div>
       
      </section>
      <section className="services">
        <h2>Our Services</h2>
        <p>Discover the range of services we provide.</p>
      </section>
      <CardPagination/>
      <Category/>
    </main>
    </div>
   
  );
};

export default MainContent;
