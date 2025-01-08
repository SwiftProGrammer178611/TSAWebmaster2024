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
   //Alistair's edits 1/7/25
        
        <style>
        /* General Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            padding: 40px 20px 20px; /* Added padding at the top */
        }

        /* Content Container */
        .content-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        /* Flexbox layout for text and images */
        .flex-container {
            display: flex;
            justify-content: space-between;
            align-items: stretch; /* Ensure equal height for text and image blocks */
            gap: 20px;
            margin-bottom: 40px; /* Added bottom margin for space between sections */
        }

        /* First Image on Top Right */
        .float-right-img {
            max-width: 50%;
            height: 100%; /* Ensure the height of the image matches the height of the text block */
            object-fit: cover; /* Ensure the image scales without distortion */
        }

        /* Text box next to first image */
        .text-box {
            width: 50%;
            font-size: 1.2rem;
            color: #2f855a; /* Set text color to the same green as the last paragraph */
            font-weight: 600; /* Set font weight to semibold */
            line-height: 1.8; /* Adjust line-height for better readability */
            background-color: #e5f7e3; /* Soft green background */
            padding: 15px;
            border-radius: 8px; /* Rounded corners */
            display: flex;
            flex-direction: column;
            justify-content: space-between; /* Make the text block stretch equally */
        }

        /* Second Image styles (Left, below text) */
        .float-left-img {
            max-width: 50%;
            height: 100%; /* Ensure the height of the image matches the height of the text block */
            object-fit: cover; /* Ensure the image scales without distortion */
            background-color: #e5f7e3; /* Soft green background */
            padding: 10px;
            border-radius: 8px; /* Rounded corners */
        }

        /* Middle Text - "We realized what Philadelphia needs" - centered and large */
        .centered-large {
            text-align: center;
            font-size: 2rem;  /* Reduced size for proportion */
            color: #2f855a; /* Same green color as the rest of the text */
            font-weight: bold;
            margin: 20px 0;
        }

        /* Paragraph styles */
        p {
            margin-bottom: 20px;
            font-weight: 600; /* Semibold by default */
            color: #2f855a; /* Set text color to the same green as the last paragraph */
        }

        .highlight {
            font-weight: bold;
            color: #2f855a;
        }

        /* New section for the "More access to healthier food options" text */
        .more-access {
            font-size: 1.3rem;
            color: #2f855a; /* Same green color */
            font-weight: 600;
            margin: 10px 0; /* Reduced margin to position it directly under the previous text */
            text-align: center; /* Center align the text */
        }

        /* Clear fix for after floating elements */
        .clearfix {
            clear: both;
        }

    </style>
</head>
<body>

<div class="content-container">
    <!-- Flexbox Container for Image and First Text Block -->
    <div class="flex-container">
        <div class="text-box">
            <p>
                A vegetarian restaurant based in Philadelphia, Pennsylvania, specializing in the freshest and locally sourced American cuisine. In the early 90s, our team noticed a concerning abundance of fast food restaurants all over the city. On a daily basis, Philadelphians unknowingly incorporated excess sodium, unhealthy fats, and high amounts of calories into their diets. We couldn’t help but wonder, do they know what’s really in what they’re eating?
            </p>
        </div>

        <img class="float-right-img" src="https://images.unsplash.com/photo-1569761316261-9a8696fa2ca3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Philadelphia">
    </div>

    <!-- Middle Section: Centered "We Realized What Philadelphia Needs" Text -->
    <p class="centered-large">
        We realized what Philadelphia needs: 
    </p>

    <!-- "More access to healthier food options" Text - only one instance -->
    <p class="more-access">
        More access to healthier food options with full transparency in the ingredients and preparation process.
    </p>

    <!-- Clear the previous floated elements to ensure proper layout -->
    <div class="clearfix"></div>

    <!-- Flexbox Container for Second Image and Last Paragraph -->
    <div class="flex-container">
        <img class="float-left-img" src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Philadelphia Restaurant">

        <div class="text-box">
            <p>
                And in late 1992, our early founders pledged to fulfill this promise. We established connections with surrounding farms in the Bucks County area and learned each step of the way. Only places that met our standards of cleanliness, handling, and freshness were selected. We would never serve a plate with meat on it. To this day, this promise is upheld, with each dish leaving our kitchen ensured to be a healthy option for customers. We also maintain affordable pricing on all of our menu items, aligning with our belief that healthy food shouldn’t be hard to access. When you’re eating at our restaurant, from rise and sprout, to your table, we will serve you only the freshest, budget vegetarian dishes.
            </p>
        </div>
    </div>

</div>
        </div>
        </div>
    );
}
export default About;
