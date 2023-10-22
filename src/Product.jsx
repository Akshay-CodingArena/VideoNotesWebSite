import { useState } from "react";
import Slider from "react-slick";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const Product = ()=>{
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    const handleSlideChange = (newIndex) => {
        setCurrentSlideIndex(newIndex);
      };

    const properties = {
        duration: 5000,
        autoplay: true,
        transitionDuration: 500,
        arrows: true,
        infinite: true,
        // easing: "ease",
        // indicators: (i) => <div className="offerSelect">{i + 1}</div>,
      };
    return (
        <section className="showBack">
            <div className="backWhite">
            <div className="Title">
            <div className="headingContainer">
                
                <h1>Video-Notes: The smart notes taking solution for smart online learners</h1>
                <div className="Title">
            </div>
            </div>
            <p className="question"> Transform your Online Learning experience with the revolution </p>
            {/* <p className="download top"> <div><img src="/Chrome.jpg"/> Web Extension</div> </p> */}
                {/* <h1>Video-Notes</h1> */}
            </div>
            <Slide
                onChange={handleSlideChange}
                defaultIndex={currentSlideIndex}
                setCurrentSlideIndex={setCurrentSlideIndex}
                {...properties}
              >
                     <div className="slider-banner" style={{position:"relative",height:"100%", width:"100%"}}>
                        <div className="banner-slider" style={{width:'100%'}} >
                        <div style={{display:"block"}}>
                        <img src="/previews/eddd.png" />
                        <p className="caption">Video-Notes</p>
                        </div>
                    </div>
                    </div>
                    <div className="slider-banner" style={{position:"relative",height:"100%", width:"100%"}}>
                        <div className="banner-slider">
                            <div style={{display:"block"}}>
                                <img src="/previews/Editor.jpeg" />
                                <p className="caption">Editor</p>
                    </div>
                    </div>
                    </div>
                    <div className="slider-banner" style={{position:"relative",height:"100%", width:"100%"}}>
                        <div className="banner-slider" style={{width:'100%'}} >
                        <div style={{display:"block"}}>
                        <img src="/previews/DesktopNotes.jpeg" />
                        <p className="caption"> Downloaded Notes in Desktop View 1</p>
                        </div>
                    </div>
                    </div>
                    {/* <div className="slider-banner" style={{position:"relative",height:"100%", width:"100vw"}}>
                        <div className="banner-slider" style={{width:'100%'}} >
                        <div style={{display:"block"}}>
                        <img src="/previews/demo.png" />
                        <p className="caption"> Downloaded Notes in Desktop View 2</p>
                        </div>
                    </div>
                    </div> */}
                    <div className="slider-banner" style={{position:"relative",height:"100%", width:"100%"}}>
                        <div className="banner-slider" style={{width:'100%'}} >
                        <div style={{display:"block"}}>
                        <img src="/previews/MobileNotes.jpeg" />
                        <p className="caption">Downloaded Notes in Mobile View</p>
                        </div>
                    </div>
                    </div>
                    <div className="slider-banner" style={{position:"relative",height:"100%", width:"100%"}}>
                        <div className="banner-slider" style={{width:'100%'}} >
                        <div style={{display:"block"}}>
                        <img src="/previews/demoPortrait.png" />
                        <p className="caption">Downloaded Notes in Mobile View Portrait</p>
                        </div>
                    </div>
                    </div>
            </Slide>
            </div>
            <div className="backBlack" style={{marginTop:"0px",marginBottom:"20px"}}>
            
            <div className="intro">
                <h1>Description</h1>
                <h2>Make downloadable notes that are viewable on any device!</h2>
<p>Say goodbye to traditional pen and paper and hello to the  <b>free chrome extension Video-Notes.</b> With Video-Notes, you can:</p>

<ul>
<li>Simultaneously <b>write notes, take video clips, and screenshots</b>.</li>
<li><b>Capture timestamps</b> with just a click.</li>
<li>Organize your notes with ease.</li>
<li>Review your notes with the linked video clips in any device.</li>
<li>Easily review key concepts.</li>
<li><b>Share</b> your notes with others.</li>
</ul>

<p>Video-Notes is the perfect tool for anyone who wants to get the most out of their online learning.</p>

{/* <h2>Start taking smarter notes today!</h2>
            


<p>Simply transfer the notes using WhatsApp Web or Google Drive, and open them in any internet browser.</p>

<p>No more worries about compatibility issues or lost notes.</p> */}
{/* 
<p>With our downloadable notes, you can access your notes from anywhere, anytime.</p> */}

{/* <h2>So what are you waiting for? Start taking notes today!</h2> */}
                
            </div>
            </div>
            <div className="backWhite">
           {/* {/* <h1>Download</h1> */}
          
            {/* <h2>Available on <img style={{height:'40px', borderRadius:"50%"}} src="/Chrome.jpg"/></h2>          */}
            {/* <img style={{height:"280px"}} src="/previews/Video -Notes.png" /> */}
            <p style={{color:'black', fontSize:"25px"}}>Currently available for only<b> Google Chrome </b></p>
            <p className="download"> <div style={{backgroundColor:"white",marginTop:"-10px"}}>Download</div> </p>
            <p style={{display:"flex",justifyContent:"center",alignItems:"center", fontWeight:"bold",marginTop:"-10px"}}>Powered by <img style={{marginLeft:"10px",height:'30px', borderRadius:"50%"}} src="/Chrome.jpg"/></p>
                </div>
            {/* <p className="download"> <div><img src="/Chrome.jpg"/> Web Extension</div> </p> */}
      
        </section>
    )
}

export default Product