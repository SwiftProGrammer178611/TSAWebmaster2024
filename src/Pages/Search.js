import React, { useEffect, useState,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Navbar from '../navbar';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Card from './Card';

function Search() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(".allresultsrender", {
      opacity: 0, // start with opacity 0
      scale: 1, // start with default scale
      x:0,
    }, {
      opacity: 1, // fade in to opacity 1
      //scale: 0.9, // apply slight scale
      duration: 2,
      ease: "power1.out",
      x:50,
      scrollTrigger: {
        trigger: ".allresultsrender",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart none none none",
      }
    });
   
  }, []);
  
  

  const navigate = useNavigate();

  //State Variables
  const [searchKlm, setSearchKlm] = useState("");
  const [kalaamData, setKalaamData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [slctKlm, setSlctKlm] = useState("");
  const [dropdownFilter, setDropDownFilter] = useState([]);
  //Getting and serializing locla storage favorites upon page load, and setting favorites state var to the serialized favorites data
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);
  //looks for the changes in the input, and sets the searhc state var to the value of the input change, on every keystroke
  function handleInputChange(event) {
    setSearchKlm(event.target.value);
  }
  //based on the searchKlm value, it will filter the data accordingly, upon fetching the json data.
  //NOTE: We can attach teh json file to an API endpoint and read values from the endpoint instead to make it easier.
  function searchKlmSubmit() {
    fetch('./kalaams.json')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          const filteredKalaam = data.filter(kalaam =>
            kalaam.title.toLowerCase().includes(searchKlm.toLowerCase()) ||
            kalaam.lines.toLowerCase().includes(searchKlm.toLowerCase())
          );
          setKalaamData(filteredKalaam);
        } else {
          console.error('Data is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching the kalaam data:', error));

      fetch('./kalaams')
      .then(() => console.log('Connected to MongoDB!'))
      
      
      
      gsap.fromTo(".searchSubmit", {
        scale: 1, // start with default scale
      }, {
        duration: 2,
        ease: "elastic",
        scale:1.1,
        scrollTrigger: {
          trigger: ".searchSubmit",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "restart none none none",
        }
      });
  }
  //upon the selection of the kalaam type (from dropdown), the value changes and is updated in another state var called set SlctKlm
  function klmselction(event) {
    setSlctKlm(event.target.value);
  }
  // We check each type of klm, and based on it we return the data accordingly
  function returningdataKLM() {
    if (slctKlm === "Hamd") {
      fetch('./kalaams.json')
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data)) {
            const dropfilteredKalaam = data.filter(kalaam =>
              kalaam.type.toLowerCase().includes(slctKlm.toLowerCase())
            );
            setDropDownFilter(dropfilteredKalaam);
          } else {
            console.error('Data is not an array:', data);
          }
        })
        .catch(error => console.error('Error fetching the kalaam data:', error));
    }
    if (slctKlm === "Naat") {
      fetch('./kalaams.json')
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data)) {
            const dropfilteredKalaam = data.filter(kalaam =>
              kalaam.type.toLowerCase().includes(slctKlm.toLowerCase())
            );
            setDropDownFilter(dropfilteredKalaam);
          } else {
            console.error('Data is not an array:', data);
          }
        })
        .catch(error => console.error('Error fetching the kalaam data:', error));
    }
    if (slctKlm === "Irfani") {
      fetch('./kalaams.json')
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data)) {
            const dropfilteredKalaam = data.filter(kalaam =>
              kalaam.type.toLowerCase().includes(slctKlm.toLowerCase())
            );
            //sets dropDownFilter state var to the returned data
            setDropDownFilter(dropfilteredKalaam);
          } else {
            console.error('Data is not an array:', data);
          }
        })
        .catch(error => console.error('Error fetching the kalaam data:', error));
    }
    if (slctKlm === "Mankabat") {
      fetch('./kalaams.json')
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data)) {
            const dropfilteredKalaam = data.filter(kalaam =>
              kalaam.type.toLowerCase().includes(slctKlm.toLowerCase())
            );
            setDropDownFilter(dropfilteredKalaam);
          } else {
            console.error('Data is not an array:', data);
          }
        })
        .catch(error => console.error('Error fetching the kalaam data:', error));
    }
    if (slctKlm === "Salaam") {
      fetch('./kalaams.json')
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data)) {
            const dropfilteredKalaam = data.filter(kalaam =>
              kalaam.type.toLowerCase().includes(slctKlm.toLowerCase())
            );
            setDropDownFilter(dropfilteredKalaam);

          } else {
            console.error('Data is not an array:', data);
          }
        })
        .catch(error => console.error('Error fetching the kalaam data:', error));
    }
  }
  //toggling the favorites option. We set isDropdownFilter to true or false, to show data for the dropdown or the search accordingly, and index is the kalaam Index
  function toggleFavorite(index, isDropdownFilter) {
    //accepts an array and spreads it, and sets the isFavorite property to true or false.
    const updateFavoritesInArray = (array) => {
      return array.map((kalaam, i) =>
        // checking if index, i in array, is strictly equal to the index of the data, and then only will the spreading and toggling take place
        i === index ? { ...kalaam, isFavorite: !kalaam.isFavorite } : kalaam
      );
    };
    //if the isDropdownFilter is set to true
    if (isDropdownFilter) {
      //the array from the dropdownFilter is passsed into the updateFavoritesInArray. dropdownFilter stores the type of kalaam selected. the data is in an array
      const updatedDropDownFilter = updateFavoritesInArray(dropdownFilter);
      setDropDownFilter(updatedDropDownFilter);

      //sets teh favorites in localstorage according to the favorites that are already there in the updatedDropDownFilter data already.
      const updatedFavorites = updatedDropDownFilter.filter(kalaam => kalaam.isFavorite);
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      //instead searches and sets the updateFavoritesInArray to the kalaam data instead of the filtered data from the search functionality
      const updatedKalaamData = updateFavoritesInArray(kalaamData);
      setKalaamData(updatedKalaamData);

      // Filters the updated kalaamData to get only the items marked as favorites.
      const updatedFavorites = updatedKalaamData.filter(kalaam => kalaam.isFavorite);

      // Updates the favorites state and localStorage with the updated favorites list.
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  }
  //upon click, based on the id/index passed in it will navigate to that kalaam index.
  function handleKalaamClick(id) {
    navigate(`/kalaam/${id}`);
  }
  //looks for at least one of the kalaam in favorites array
  function getFavoriteStatus(kalaam) {
    /*  Checks if there is at least one item in the 'favorites' array
     where the 'id' of the item matches the 'id' of the 'kalaam' passed in
     The 'some()' method returns true if such an item is found, otherwise false*/
    return favorites.some(favorite => favorite.id === kalaam.id);
  }

  const [hoveredCard, setHoveredCard] = useState(null);
  const overlayRef = useRef(null);

  function handleKalaamClick(id) {
    navigate(`/kalaam/${id}`);
  }

  function handleCardHover(id) {
    setHoveredCard(id);
  }

  useEffect(() => {
    if (hoveredCard) {
      gsap.to(overlayRef.current, {
        opacity: 0.7,
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [hoveredCard]);

  return (
    <div className="flex flex-col justify-center min-h-screen">
    <div className='absolute top-0 left-0 w-full'>
      <Navbar />
    </div>
  
    <div className='flex flex-col items-center justify-center pt-72 w-full'>

        <input
          id="inputKalaam"
          placeholder='Search For a Kalaam'
          className='p-4 w-96 rounded-3xl bg-white text-black'
          value={searchKlm}
          onChange={handleInputChange}
        />
        <button
          onClick={searchKlmSubmit}
          id="submitKalaam"
          type='submit'
          className='bg-green-800 searchSubmit text-white mt-4 py-2 px-6 rounded-full'
        
        >
          Submit
        </button>
      </div>


    <div className='justify-center pt-8 flex pl-16 flex-wrap relative items-center p-8 min-h-screen'>
  {kalaamData.length > 0 ? (
    kalaamData.map((kalaam, index) => (
      
      <div
       /*  key={index}
        className='w-full mb-4 flex rounded-lg py-3 px-8 shadow-xl border-l border-t bg-green5 ' */
        className='allresultsrender'
      >
         <Card
              key={kalaam.id}
              kalaam={kalaam}
              onCardClick={handleKalaamClick}
              onCardHover={handleCardHover}
              isHovered={hoveredCard === kalaam.id}
              hoveredCard={hoveredCard}
            />
        {/* <h2 className='text-xl text-white'>{kalaam.title}</h2> */}
        {/* <p>{kalaam.lines}</p> */}
        
        {/* <button
          className=" text-white px-4 rounded hover:text-blue-500 "
          onClick={() => handleKalaamClick(kalaam.id)}
        >
          View Details
        </button> */}

        <img
          className="w-8 h-8 cursor-pointer"
          src={getFavoriteStatus(kalaam) ? "https://thumb.ac-illust.com/36/364134c905bba0c111e0bd45609eaa74_t.jpeg" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6dRpiud2OIyITkk7EHMc3Gf_zHFtDMDnWQ&s"}
          onClick={() => toggleFavorite(index, false)}
          alt="Favorite Icon"
        />
      </div>
    ))
  ) : (
    <p className='text-white'>jjjhj</p>
  )}
</div>


<div className='pt-8'>
      <label htmlFor="types">Choose a type:</label>
      <select value={slctKlm} onChange={klmselction} name="types" id="types">
        <option value="______"></option>
        <option value="Hamd">Hamd</option>
        <option value="Naat">Naat</option>
        <option value="Irfani">Irfani</option>
        <option value="Mankabat">Mankabat</option>
        <option value="Salaam">Salaam</option>
      </select>
      <p>Selection: {slctKlm}</p>
      <button onClick={returningdataKLM}>Done</button>
  
      <div className='pt-8'>
        {dropdownFilter.length > 0 ? (
          dropdownFilter.map((kalaam, index) => (
           
              <div key={index} className='bg-green-900 items-center p-4 m-2 rounded'>
              <h2 className='text-xl font-bold'>{kalaam.title}</h2>
              <p>{kalaam.lines}</p>
              <img
                className="w-8 cursor-pointer"
                src={getFavoriteStatus(kalaam) ? "https://thumb.ac-illust.com/36/364134c905bba0c111e0bd45609eaa74_t.jpeg" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6dRpiud2OIyITkk7EHMc3Gf_zHFtDMDnWQ&s"}
                onClick={() => toggleFavorite(index, true)}
                alt="Favorite Icon"
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
                onClick={() => handleKalaamClick(kalaam.id)}
              >
                View Details
              </button>
            </div>
            
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  </div>
  );
}

export default Search;
