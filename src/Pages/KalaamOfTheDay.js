import Navbar from "../navbar";
import '../App.css';

function KalaamOfTheDay(){



    return(
        <div>
    <Navbar/>
    <div className="flex ">
        <div className="flex-none pl-10 pt-8">
            <img src="img1.jpg" className="heroSection2"/>
        </div>
        
        <div className="flex-1 flex pt-8 justify-center">
            <div>
                <h1 className="text-3xl text-white">Kalaam Of the Day <hr className="w-full"/> </h1>
                
            </div>
           
           
        </div>
    </div>
</div>

    );
}

export default KalaamOfTheDay;