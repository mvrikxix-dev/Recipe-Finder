import React from 'react';
import './View.css';
const View = (props) => {
    const {meals} = props;

    if(meals){
        var mealList = meals.map(meal => {
            function like(e){
                console.log("like");
                if(e.target.getAttribute('liked')==="false"){
                    e.target.style.color="red";
                    e.target.setAttribute('liked',"true");
                }
                else{
                    e.target.style.color="white";  
                    e.target.setAttribute('liked', "false")
                }
            }
        
            function redirect(){
                if(meal.strSource === null){
                    console.log(null);
                }else{
                    window.open(meal.strSource)
                }
            }

            function viewIngred(meal){
               var i, rows = [];
               for(i=1;i<=20;i++){
                  rows.push(i);       
               } 
               var ingredList = rows.forEach(row => {
                   return(
                       console.log(<p>{row}</p>)
                   )
               })
               return(
                    <h1>{ingredList}</h1>
                )
            }
            // <p>{meal.strIngredient1} ---- {meal.strMeasure1}</p>
            return(
                <div className="wrapper" key={meal.idMeal}>
                    <div className="header">
                        <div className="title" onClick={redirect}>
                            <h1>{meal.strMeal}</h1>
                        </div>
                        <div className="heart" onClick={like}><i className="far fa-heart" liked="false"></i></div>
                    </div>
                    <div className="body">
                        <div className="left">
                            <img className="image" src={meal.strMealThumb} alt={meal.strMeal}></img>
                        </div>
                        <div className="right">
                            <div className="meal-info">
                                <p className="category">Category of Meal - {meal.strCategory}</p>
                                <p className="area">Area of the Meal - {meal.strArea}</p>
                            </div>
                            <div className="meal-ingred">
                                <p>Ingredients</p>
                                <div className="ingred-list">
                                    {viewIngred(meal)}
                                </div>
                            </div>
                            <div className="meal-recipe">
                                <p>Recipe</p>
                                <div className="recipe">
                                    <p>{meal.strInstructions}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }else{
        return(
            <div id="sub-header">No Data has been received</div>
        )
    }
    return(
        <div id="view-container">
            {mealList}
        </div>
    )
}

export default View;