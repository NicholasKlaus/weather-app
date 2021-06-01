import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ROUTES } from "../constants/routes";
import cities from "../assets/json/city.list.min.json";


export const LandingPage = () => {
  const [filteredCities, setFilteredCities] = useState([]);

  const onInput = (event) => {
    let filtredData = cities.filter(({name}) =>  name.startsWith(event.target.value)).slice(0,10)
    if (!event.target.value) {
      setFilteredCities([]);
    } else {
      setFilteredCities(filtredData);
    }
  };   
  
  return (
    <div className="landing">
      <div className="container">
        <header className="header">
          <h1>Weather App</h1>
        </header>   
        <div className="l-body">
          <div className="autocomplete-seach__wrap">
            <div className="c-search_wrapper">
              <i className="icofont-search-2 search-icon"></i>
              <input 
                type="search" 
                name="searchBar" 
                placeholder="Enter your city" 
                className="search-bar"
                onInput= {onInput}
                autoComplete="off"
              />
            </div>
            <ul className="dropdown-list">
              {   
                filteredCities.map((el, key) => {
                  return (
                    <Link to={`${ROUTES.WEATHER}?name=${el.name}&lon=${el.coord.lon}&lat=${el.coord.lat}`}
                      key={key}
                      className="list-item__link"
                    >
                      <div className="item-wrap">
                        <i className="icofont-search-2 search-icon"></i>
                        <li className="list-item">
                          {el.name}, {el.country}
                        </li>
                      </div>
                    </Link> 
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}