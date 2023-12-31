import hakulele from "../../../assets/hakulele.svg"
import instagram from "../../../assets/instagram.svg"
import apple from "../../../assets/apple.svg"


export default function Hakulele() {
    return(
        <div className="single-project-description">
                        <div style={{display: "flex", alignItems: "center", paddingTop: "5%"}}>
                            <img className="single-project-icon" src={hakulele} alt="SakhiApp's icon"/>
                            <h2 style={{color: "#CDA1FF", fontFamily: "Rubrik-Bold", paddingLeft: "3%"}}>Hakulele</h2>
                        </div>
                        <h4>
                            A useful tool for every beginner at playing the ukulele. This app was 
                            developed starting from an <span>actual personal struggle</span>: the chords are a lot 
                            and it's <span>very easy to get lost</span> among them (especially if you don’t have a 
                            music theory knowledge). Also, all the useful notions are dislocated in 
                            different places, websites and apps. 
                            <br/>
                            <br/>
                            Hakulele has everything a new ukulele musician needs to start playing 
                            this Hawaiian instrument. 
                            <br/>
                            <br/>
                            <span style={{fontWeight: "bold", fontSize: "x-large"}}>The Tuner</span>
                            <br/>
                            The main feature is the ukulele tuner. The user can choose between a 
                            <span> static or a dynamic one.</span> With the static one, you can listen to the right pitch 
                            of every chord and train your ears. 
                            <br/>
                            <br/>
                            Otherwise, the dynamic tuner <span>actively listens</span> to what you're playing, 
                            recognizing the played chord and informing you about the state of its 
                            tuning. The <span>visual representation of the headstock</span> helps you find the 
                            right tuner key.
                            <br/>
                            <br/>
                            <span style={{fontWeight: "bold", fontSize: "x-large"}}>The Chords Tab List</span>
                            <br/>
                            The other feature is focused on the Chords Tab library, divided by musical 
                            scales. From a picker, you can <span>choose the scale</span> and all its chords (from C 
                            to B) are visualised in the view. Every chord has its own tab which displays  
                            <span> how to place the fingers</span> on the fretboard.
                            <br/>
                            <br/>
                            <span style={{fontWeight: "bold", fontSize: "x-large"}}>App Localizations</span>
                            <br/>
                            Hakulele is available worldwide and is currently localized in 8 languages: English, Italian,
                            Spanish, Portuguese, Polish, French, German, and Japanese, with many more coming soon.
                            <div className="footer__info-links" style={{
                                marginTop: "2vh",
                            }}>
                                <a href="https://apps.apple.com/us/app/hakulele-ukulele-tuner-more/id6453520108" target="_blank"><img src={apple} alt="Project's App Store page" style={{paddingLeft: "0px"}}/></a>
                                <a href="https://www.instagram.com/hakulele_app/" target="_blank"><img src={instagram} alt="Project's instagram page" style={{paddingLeft: "0px", marginLeft:"-5px"}}/></a>
                            </div>
                        </h4>
                    </div>
    )
}