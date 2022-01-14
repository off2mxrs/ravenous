import React from 'react'
import './SearchBar.css'

//Yelp Api sort_by parameters
//https://www.yelp.com/developers/documentation/v3/business_search
const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
    /// dynamically create the list items needed to 
    // display the sort options 
    //(Best Match, Highest Rated, Most Reviewed)//////
    renderSortByOptions() {
        //To iterate through the object, you’ll need to start by accessing the keys of the sortByOptionsobject
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption]
            return <li key={sortByOptionValue}>{sortByOption}</li>
        })
    }

    render() {
      return (
        <div className="SearchBar">
    <div className="SearchBar-sort-options">
        <ul>
        {this.renderSortByOptions()}
        </ul>
    </div>
    <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
    </div>
    <div className="SearchBar-submit">
        <a>Let's Go</a>
    </div>
    </div>
    )
    }
}

export default SearchBar