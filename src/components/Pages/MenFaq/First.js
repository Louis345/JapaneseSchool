import React, {useState} from 'react'

function First() {

    const [Faq, setFaq] = useState(0);
    const [Faqtwo, setFaqtwo] = useState(0);



    const Drop = [
        {
            Que: " Breaking The Rules Using SQLite To Demo Web?",
            Answer: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        },
        {
            Que: "Monthly Web Development Update Pragmatic Releasing?",
            Answer: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        },
        {
            Que: "How To Use Underlined Text To Improve User Experience",
            Answer: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        },
        {
            Que: "Understanding CSS Layout And The Block Formatting",
            Answer: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        }
      
    ]

  return (
    <>
        <section id="faq" className="faq-area pt-120 pb-100">
            <div className="container">
                <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="faq-wrap">
                    <div className="accordion" id="accordionExample">
                    { Drop.map((items, index)=> (
                        <div className="card" key={items}>
                        <div className="card-header" id="headingOne" key={items}>
                            <h2 className="mb-0">
                            <button className={`faq-btn ${Faq !== index && "collapsed"}`} key={items} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={ ()=> {setFaq(index)}} >
                                {items.Que}
                            </button>
                            </h2>
                        </div>
                        {Faq === index && 
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample" style={{}} >
                                <div className="card-body" key={items}>
                                    {items.Answer}
                                </div>
                            </div>
                        }
                        </div>
                    ))}
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="faq-wrap">
                    <div className="accordion" id="accordionExample1">
                    { Drop.map((items, index)=> (
                        <div className="card">
                        <div className="card-header" id="headingfive">
                            <h2 className="mb-0">
                            <button className={`faq-btn ${Faqtwo !== index && "collapsed"}`} onClick={ ()=> {setFaqtwo(index)}} key={items} type="button" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive" >
                                {items.Que}
                            </button>
                            </h2>
                        </div>
                        {Faqtwo === index && 
                            <div id="collapsefive" className="collapse show" aria-labelledby="headingfive" data-parent="#accordionExample1" style={{}} >
                                <div className="card-body">
                                    {items.Answer}
                                </div>
                            </div>
                            }
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default First