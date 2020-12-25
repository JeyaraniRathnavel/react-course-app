import React from 'react'
import style from './recipe.module.css'

const Recipe=({title,calories,image,ingredients})=> {
    return (
        <div className={style.recipe}>
           <span className={style.title}>{title}</span> 
           <span className={style.ingredient}>Ingredients</span>
           <ul>{ingredients.map(ingredient=>(
           <li>{ingredient.text}</li>
           ))}</ul>
           <p className={style.text}>calories : {calories}</p>
           <img className={style.image}src={image} alt=""/>
        </div>
    )
}

export default Recipe;
