import React from 'react';
import './View.css';

const View = (props) => {
    const {meals} = props;
    console.log(props)
    if(meals){
        var mealList = meals.map(meal => {
            return(
                <div id="view" key={meal.idMeal}>
                    <div className="view-warpper">
                        <h1 className="meal-title">{meal.strMeal}<span></span></h1>
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
        <div>
            {mealList}
        </div>
    )
}

export default View;