import React, {Component} from 'react';
import './App.css';
import Search from './Search';
import View from './View';
import axios from 'axios';

class App extends Component {
  state = {
    name : null
  }

  // When App.js is mounted on index.html, the API will be called and a parameter named 'search' will be passed to search the particular recipe
  // The parameter 'search' is returned by the 'Search' Component, it returns back the data that the user searches in the text box.
  // componentDidMount() function calls the API, and updates the state with the data which is further passed to the 'View' Component to display it on the screen.
   componentDidMount(search){
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + search)
      .then(resolve => {
        let meals = resolve.data.meals
        this.setState({
          meals : meals
        })
      })
  }


  // mySearch function is used to handle the data and pass it to componentDidMount function. The state is update and a name is added for further validation which
  // will be explained below.
  mySearch = (search) => {
    this.componentDidMount(search)
    this.setState({
      name : search
    })
  }

  render(){
    return (
      <div id="App">
        <header className="App-header">
          <h1 className="Header">Recipe Finder</h1>
          <Search mySearch={this.mySearch} />
        </header>
        {/* If the state.name is empty then the sub-header will pop up or else the 'View' Component will be executed, this is implemented to make the sub-header 
        show only when the the page loads and not every time */}
        {this.state.name !== null ? (
            <View meals = {this.state.meals} />
          ) : (
            <div id="sub-header">Type a Dish Name to Search for its Ingredients</div>
        )}
      </div>
    );
  }
}

export default App;
