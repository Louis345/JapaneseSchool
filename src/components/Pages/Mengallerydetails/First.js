import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function First() {

  
  const Data = [
    {img : "assets/img/gallery/protfolio-img01.png", title :  "Web Traffic Management",
    category : "Skilled"},

    {img : "assets/img/gallery/protfolio-img02.png", title :  "Mikando Web Research & SEO",
    category : "Hot Stone Messag"},

    {img : "assets/img/gallery/protfolio-img02.png", title :  "Mikando Web Research & SEO",
    category : "Skilled"},

    {img : "assets/img/gallery/protfolio-img03.png", title :  "Kiring Maoko Web Development",
    category : "Book Library"},

    {img : "assets/img/gallery/protfolio-img04.png", title :  "Kiring Maoko Web Development",
    category : "Online Classes"},

    {img : "assets/img/gallery/protfolio-img05.png", title :  "Kiring Maoko Web Development",
    category : "Hot Stone Messag"},

    {img : "assets/img/gallery/protfolio-img06.png", title :  "Kiring Maoko Web Development",
    category : "Skilled"},
    
  ]

  const [current, setcurrent] = useState(Data);

  const Filter = (category) =>{
    const arr = [];
    if(category === "all"){
      setcurrent(Data)
    }
    else{
      Data.map((item)=> {
        if(item.category === category){
          arr.push(item);
        }
      })
      setcurrent(arr);
    }
  };

  return (
    <>
        <section id="work" className="pt-120 pb-90">
            <div className="container">
              <div className="portfolio ">
                <div className="row align-items-center mb-50 text-center">
                  <div className="col-lg-12">
                    <div className="my-masonry">
                      <div className="button-group filter-button-group ">
                        <button className="active" data-filter="*" onClick={()=> Filter("all")} > All Gallery </button>
                        <button data-filter=".seo" onClick={()=> Filter("Skilled")}>Skilled</button>
                        <button data-filter=".marketing" onClick={()=> Filter("Hot Stone Messag")}>Hot Stone Messag</button>
                        <button data-filter=".website" onClick={()=> Filter("Book Library")}>Book Library</button>
                        <button data-filter=".smm" onClick={()=> Filter("Online Classes")} >Online Classes</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid row">
                  {current.map( (item)=> (
                     <div className="grid-item seo col-4">
                     <div className="case-study-box">
                       <div className="case-study-img">
                         <img src={item.img} alt="protfolio" key={item}/>
                       </div>
                       <div className="case-study-content">
                         <h5>
                           <Link to="/gallerydetail"> {item.title} </Link>
                         </h5>
                       </div>
                     </div>
                   </div>
                  ))}

                </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default First