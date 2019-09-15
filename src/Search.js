import React, {Component} from 'react';
import './Search.css';

class Search extends Component{
    state = {
        name : null
    }

    // When there is a change in the text box, the value obtained will be updated into the state
    handleChange = (e) => {
        this.setState({
          name : e.target.value
       })
    }

    // On submit, the 'Search' Component will return the name of the search searched by the user
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.mySearch(this.state.name);
    }

    // blurMode() function, removes the data from the search box every time the search box is inactive or blurred
    blurMode = (e) =>{
        e.target.value = ""
    }

    render(){
        return(
            <div id="dish-search">
                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <input id="name" type="text" placeholder="Enter the Name of the Dish" onChange={this.handleChange} onBlur = {this.blurMode}/>
                    <button className="dish-button">Get Recipes</button>
                </form>
            </div>
        );
    }
}

export default Search;