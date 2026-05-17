import Calculations from "./Calculations";

export default function Mid(){
    return (
        <>
        <div className="body-content">
        <div className="intro-section">
            <div className="left-content ">
        <h4>CONNECT, COLLABORATE, CREATE IMPACT</h4>
        <div className="title-line"></div>
        <h1>Connecting Innovation</h1>
        <h1>With Opportunity</h1>
        <p>
            The International Relations Cell (IRC) is a student body 
        working along with the Office of International Relations (OIR).
         It works to promote the exchange of students, faculties, and
          ideas between IIT Hyderabad and her international partners
           while strengthening the global presence of IIT Hyderabad.
        </p>
        <a href="https://ir.iith.ac.in/">
            <button className="btn1">🤝 Join IR Cell</button>
        </a>
        <button
className="btn2"
onClick={()=>
window.dispatchEvent(
new Event("playVideo")
)
}
>
▶ Watch Video
</button>
        </div>
        <Calculations/>
        </div>
        </div>
        <div className="card-container">
            <div className="card">
                <img src="global collaboration.png" alt="global collaboration logo"  />
                <div className="">
                <h3>Global Collaborations</h3>
                <div className="underline"></div>
                <p>Building strong partnerships with leading universities and research institutions across the globe.</p>
            </div>
            </div>
            <div className="card">
                <img src="startup.png" alt="startup logo"/>
                <div>
                <h3>Startups & Innovations</h3>
                <div className="underline"></div>
                <p>Empowering startups and innovators by connecting them with global ecosystems and mentors.</p>
                </div>
            </div>
            <div className="card">
                <img src="outreach.png" alt="international outreach logo"  />
                <div className="">
                <h3>International Outreach</h3>
                <div className="underline"></div>
                <p>Promoting cultural exchange, global exposures and international opportunities for students.</p>
           </div>
            </div>
        </div>
        </>
    )
}