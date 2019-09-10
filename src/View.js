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

            return(
                <div>
                    <div className="view" key={meal.idMeal} >
                        <h1 className="meal-title" onClick={redirect}>{meal.strMeal}</h1>
                        <span className="heart" onClick={like}><i className="far fa-heart" liked="false"></i></span>
                    </div>
                    <div className="view-body">
                        <img className="img" src={meal.strMealThumb} alt={meal.strMeal}></img>
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