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
        </div>
    );
}
export default About;