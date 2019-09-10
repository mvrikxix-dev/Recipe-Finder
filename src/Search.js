import React, {Component} from 'react';
import './Search.css';

class Search extends Component{
    state = {
        name : null
    }

    handleChange = (e) => {
        this.setState({
          name : e.target.value
       })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.mySearch(this.state.name);
    }

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