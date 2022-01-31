import React from 'react'
import './App.css';
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'
import Yelp from '../../util/Yelp'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this)
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
    });
  }

  render() {
    return (
      <div className="App">
        <p>In your own browser, visit <a href="https://cors-anywhere.herokuapp.com/corsdemo">HERE</a> and click “Request temporary access to the demo server”</p>
        <p>*App currently crashes if both search bars aren't used***</p>
        
        <h1>ravenous</h1>
        {/* Pass business and Yelp prop in */}
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses}/>
      </div>
    )
 }
}

export default App;
