const Tutorial = ()=>{
return (
    <section className="showBack">
    <div className="backWhite" style={{display:'flex', justifyContent:'center', alignItems:"center", flexDirection:"column"}}>
    <h1 style={{fontSize:"35px", border:"2px solid black", borderRadius:"5px", width:"80%"}}>Tutorial</h1>
    <h2>This Video will provide a brief overview on how to take notes and save them.</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/gh4-fmG48-M?si=qyJHzLzNxLSQJZ4B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="allowfullscreen"></iframe>
    </div>
    <div className="backBlack">
    <h1>How to open notes in mobile device ?</h1>
    <p>Simply transfer the notes using WhatsApp Web or Google Drive, and open them in any internet browser.</p>
    <p>No more worries about compatibility issues or lost notes.</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ORXRu-vnaKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="allowfullscreen"></iframe>
    </div>
    </section>
)
}

export default Tutorial