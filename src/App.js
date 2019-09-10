import React, {Component} from 'react';
import './App.css';
import Search from './Search';
import View from './View';
import axios from 'axios';

class App extends Component {
  state = {
    name : null
  }

  componentDidMount(search){
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + search)
      .then(resolve => {
        let meals = resolve.data.meals
        this.setState({
          meals : meals
        })
      })
  }

  mySearch = (search) => {
    this.componentDidMount(search)
    this.setState({
      name : search
    })
  }

  render(){
    console.log("App.js State: ", this.state.name)
    return (
      <div id="App">
        <header className="App-header">
          <h1 className="Header">Recipe Finder</h1>
          <Search mySearch={this.mySearch} />
        </header>
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
