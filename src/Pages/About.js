import Navbar from "../navbar";

function About(){
    return(
        <div>
            <Navbar/>
            Hi!

            <form>
                <h1 class = ""> Account</h1> 
                <p>Chnages you will make will be visible to other users</p>

                <div>
                    <label for="firstName" placeholder = "Enter First Name"> First Name</label>
                    <input class="" type ="text" name = "firstName" id="firstname"/>
                </div>

                <div>
                    <label for="lastName" placeholder = "Enter Last Name"> Last Name</label>
                    <input class="" type = "text" name ="lastName" id ="lastName"/>
                </div>

                <div>
                    <label for="Adress" placeholder = "Enter Adress"> Last Name</label>
                    <input class="" type = "text" name ="Adress" id ="Adress"/>
                    <p class=""> We will use this your billing adress</p>
                </div>

                <div>
                    <label for = "Budget"> Budget</label>
                    <input class="" min="0" step="0.01" type = "number" name ="budget" id="budget"/>
                </div>
                

            </form>
        <div>
        <p> A vegetarian restaurant based in Philadelphia, Pennsylvania, specializing in the freshest and locally sourced American 
        cuisine. In the early 90s, our team noticed a concerning abundance of fast food restaurants all over the city. 
            On a daily basis, Philadelphians unknowingly incorporated excess sodium, unhealthy fats, and high amounts of calories 
            into their diets. We couldn’t help but wonder, do they know what’s really in what they’re eating? 
                </p>
        <p class = "text-red-300 font-black"> We realized what Philadelphia needs: More access to healthier food options, with full transparency in the ingredients and 
                preparation process. And in late 1992, our early founders pledged to fulfill this promise. We established connections with 
    surrounding farms in the Bucks County area and learned each step of the way. Only places that met our standards of cleanliness,
        handling, and freshness were selected. We would never serve a plate with meat on it. To this day, this promise is upheld, with 
        each dish leaving our kitchen ensured to be a healthy option for customers. We also maintain affordable pricing on all of our menu
        items, aligning with our belief that healthy food shouldn’t be hard to access. When you’re eating at our restaurant, from rise and 
            sprout, to your table, we will serve you only the freshest, budget vegetarian dishes. 
                </p>


        </div>
        </div>
    );
}
export default About;
