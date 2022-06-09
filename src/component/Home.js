import {  Link } from "react-router-dom";
function Home(){
    return (
        <div className="Container">
            <ul>
                <li><Link to="/businessCard">BusinessCard</Link></li>
                <li><Link to="/airBNB">AirBNB</Link></li>
                <li><Link to="/travelJournel">TravelJournel</Link></li>
                <li><Link to="/memeGenerator">MemeGenerator</Link></li>
                <li><Link to="/tenzies">Tenzies</Link></li>
                <li><Link to="/quiz">Quizzal</Link></li>
                <li><Link to="/onlineCompiler">OnlineCompiler</Link></li>
            </ul>
            
            
        </div>
    );
}
export default Home;