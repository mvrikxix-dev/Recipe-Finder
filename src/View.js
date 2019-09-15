import React from 'react';
import './View.css';
const View = (props) => {
    // 'View' Component recieves the state as a prop from App.js and then the props is destructed into 'meals'
    const {meals} = props;

    // if and else statement is applied to handle error that could occur due to improper flow of data from the API.
    /* If the searched meal is available in the API, it will be updated in the state in App.js, but suppose the data is not avaible in the API, the state will
    not get updated */
    /* If the data is not updated in the API, then the prop that is sent to the 'View' Component will have no data, if(meals) means if the data is available,
    then follow the flow of the if statement else show "No Data" error */
    if(meals){
        var mealList = meals.map(meal => {
            // An attritube 'liked' is attached to every child created and it is initialized as 'false'.
            // If the value of 'liked' is false, on click, the color of the heart will be changed to red.
            //If the value of 'liked' is true, on click, the color of the heart will be changed to the default color.
            function like(e){
                if(e.target.getAttribute('liked')==="false"){
                    e.target.style.color="red";
                    e.target.setAttribute('liked',"true");
                }
                else{
                    e.target.style.color="white";  
                    e.target.setAttribute('liked', "false")
                }
            }
            
            // redirect() function is used to redirect the user to the source of the recipe when the recipe title is clicked.
            function redirect(){
                if(meal.strSource !== null){
                    window.open(meal.strSource)
                }
            }
            /* viewIngred() function is used to display the ingredients after validation. In the API db, there are 20 ingredients and measures and some of the
            ingredients are given as 'null' or ' ', to filter that out and make the code simple, and array named 'row' is created and a for loop is implemented
            from 1 to 20 to get the values of the strIngredient and strMeasure from 1 to 20 and all the values are stored in the array after validating them and
            eliminating any data with 'null' or ' ' */
            // map() function is used to handle each value in the array and put them into the JSX code individually
            function viewIngred(meal){
               var i, rows = [];
               for(i=1;i<=20;i++){
                    var value = meal['strIngredient'+i] + " ---- " + meal['strMeasure'+i]
                    if(value!==" ---- " && value!=="null ---- null"){
                        rows.push(value);
                    }       
               } 
               var ingredList = rows.map(row => {
                   return(
                        <p key={Math.random()}>{row}</p>
                   )
               })
               return(
                    <div className="ingred-list">{ingredList}</div>
                )
            }

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
                                {viewIngred(meal)}
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