import { useEffect } from "react"

const AboutUs=()=>{
    useEffect(()=>{
        window.scrollTo(0,140)
    },[])
    return (
        <section className="showBack founder">
        <div className="backBlack" >
        <header style={{display:"flex",justifyContent:"center", padding:"0px"}}>
        <h1 style={ {textAlign:"center", border:"2px solid white", borderRadius:"5px",width:"80%", marginTop:"-10px"}}>Our Founders</h1>
    </header>
        <div className="intro" >
    <section class="founder">
        <img className="foundersPhoto" src="/previews/founder.jpeg" alt="Founder 1"/>
        <h2> Akshay Jangra</h2>
        <p className="founderTitle">( Founder )</p>
    </section>
    <section class="bio">
        <p>Akshay Jangra is the visionary founder and driving force behind the Video Notes extension. With a Bachelor's degree in Computer Science, Akshay has consistently demonstrated a passion for technology and a commitment to innovation. He brings to the table over 3 years of invaluable experience in the software industry, with a noteworthy track record of having worked at prominent companies like TCS and Rattan India.</p>
    </section>
    <section class="description">
        <h2>Description:</h2>
        <p>As a tech enthusiast, Akshay has always been captivated by the world of software development. His journey began with a solid educational foundation, having successfully completed a B.Tech in Computer Science, which laid the groundwork for his professional growth.</p>
        <p>Having honed his skills and expertise over the years, Akshay has found his niche as a frontend developer, with a keen eye for creating user-friendly, intuitive interfaces. His experience at renowned companies like TCS and Rattan India has not only sharpened his technical abilities but has also instilled a deep appreciation for the importance of innovative technology in today's fast-paced digital landscape.</p>
        <p>The Video Notes extension is a testament to Akshay's dedication to improving the way we interact with digital content. By combining his technical prowess, passion for learning, and unwavering commitment to accessibility, he is bringing to life a revolutionary tool that promises to make educational video experiences more engaging and effective.</p>
        <p>With Akshay Jangra at the helm, Video Notes is poised to be a game-changer in the world of online learning, bridging the gap between technology and education for the benefit of learners everywhere.</p>
    </section>
    <section class="founder">
        <img className="foundersPhoto co" src="/previews/Co-founder.jpeg" alt="Co-Founder 1"/>
        <h2>Pradeep Dhankhar</h2>
        <p className="founderTitle">( Co-founder )</p>
        <p>Pradeep Dhankhar, co-founder of Video Notes, is a tech enthusiast with a Master's degree in Computer Science from IIIT Delhi and 2 years of industry experience, including a role as a Data Science Engineer at Eaton.</p>
    </section>
    <section class="description">
    <h2>Description:</h2>
    <p>A relentless quest for knowledge and an innate desire to make a difference have been the hallmarks of Pradeep's journey. Armed with a Master's degree in Computer Science from one of the premier institutions, IIIT Delhi, he's been well-prepared to embrace the dynamic world of technology and innovation.</p>
        <p>During his 2 years in the industry, Pradeep made a significant impact as a Data Science Engineer at Eaton. This role has not only equipped him with valuable experience but also honed his skills in data analysis, machine learning, and problem-solving. His work at Eaton showcases his commitment to pushing the boundaries of technology to drive practical solutions.</p>
        <p>As the co-founder of the Video Notes extension, Pradeep brings to the table an insatiable hunger for technological advancement and a commitment to enhancing the educational landscape. His unique perspective and skill set, enriched by his industry experience, are instrumental in shaping the vision of Video Notes.</p>
        <p>With Pradeep as a co-founder, Video Notes is poised to revolutionize online learning, making education more engaging and accessible to learners worldwide. The combination of technical expertise and a strong commitment to progress underscores his unwavering dedication to the project's success.</p>
        <p>Pradeep Dhankhar is a valuable asset to the Video Notes team and is determined to bridge the gap between technology and education for a brighter, more interactive future in learning.</p>
     </section>
    </div>
    {/* <footer>
        <p>&copy; 2023 Video-Notes</p>
    </footer> */}
</div>
</section>
    )
}

export default AboutUs