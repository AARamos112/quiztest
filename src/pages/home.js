import "../App.css";
import { Link } from "react-router-dom";
import YoutubeEmbed from "../extra/youtubeembed";

function Home() {
    return(
      <div className="hero-image">
      
        <div className="App">
          <div >
            
              <h1 className="text-3xl font-medium underline">
                Study Music
                
              </h1>
              <br/>
              <YoutubeEmbed embedId="iEGFFyv0MH4" />
              <br/>
              <YoutubeEmbed embedId="drAlCnjB5y4" />
              <br/>
              <YoutubeEmbed embedId="lVoUNLeP2Dk" />   
          </div>
        </div>
      </div>
    )
  }

  export default Home;