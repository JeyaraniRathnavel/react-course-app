import './App.css';
import React,{useEffect,useState} from "react";
import Recipe from './Recipe';
import images from "../src/Asset/img.PNG"

const App=()=> {
  const APP_ID='922555ee';
  const App_KEY='5c832e65830d401b3b24d0f11b1e4639';
  
  const[recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('orange');

  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes=async ()=>{
    const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${App_KEY}`)
    const data=await response.json();
    setRecipes(data.hits);
  }

  const updateSearch=e=>{
    setSearch(e.target.value);
  }

  const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <div className="title"> TASTY DOTS RESTAURANT</div>
      <form onSubmit={getSearch} className="search-form">
      <img className="logo" src={images}  alt="Tasty" />
        <input className="search-bar" type="text" value={search} placeholder="Search Recipes" onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe=>(
       <Recipe key={recipe.recipe.label}
       title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}
     />
      ))}
      </div>
    </div>
  );
}

export default App;
