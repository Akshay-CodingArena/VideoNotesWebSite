const Navigation = ()=>{
    return (
        <div className="blackHeader">
        <div className="logoContainer" style={{ color:"white" }}>
            <img src="/previews/Video-Notes.png" style={{height:"100px",width:"120px",borderRadius:"50%", boxShadow:"0px 0px 15px #22CCFF"}} className="logo"/>
            <h1 style={{color:'#22CCFF', fontWeight:"bold"}}><span style={{color:'white', fontWeight:"bold"}}>Video</span><span style={{color:"skyblue"}}>-</span>Notes</h1>
        </div>
        <nav>
        <span><a href="/">Home</a></span>
        <span><a href="/tutorial">Tutorial</a></span>
        <span><a href="/about-us">About Us</a></span>
        {/* <span>Donate</span> */}
        </nav>
    </div>
    )
}

export default Navigation