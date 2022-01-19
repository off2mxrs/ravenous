import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            term: '',
            location: '',
            sortBy:'best_match',
                     }

        // bind both methods to the current value of this
        this.handleTermChange = this.handleTermChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSortByChange = this.handleSortByChange.bind(this);

        //Yelp Api sort_by parameters
    //https://www.yelp.com/developers/documentation/v3/business_search
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }
    }
///// CONSTRUCTOR END //////////////////////////////////
////////////////////////////////////////////////////////////////

    /// returns the current CSS class for a sorting option.
    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active'
        } else {
            return ''
        }
    }
////////// HANDLES //////////////////////////////////////////////////////////////////
    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption})
    }

    handleTermChange(event) {
        //the state of each input element should be updated to reflect the text typed into the respective input element.
        this.setState({term: event.target.value})
    }

    handleLocationChange(event) {
        //the state of each input element should be updated to reflect the text typed into the respective input element.
        this.setState({location: event.target.value})
    }

    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
        event.preventDefault()
    }
/// HANDLES END //////////////////////////////////////////////////////////////////


    /// dynamically create the list items needed to 
    // display the sort options 
    //(Best Match, Highest Rated, Most Reviewed)//////
    renderSortByOptions() {
        //To iterate through the object, you’ll need to start by accessing the keys of the sortByOptionsobject
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption]

            return (<li ///This will conditionally style each sort by option, displaying to the user which sorting option is currently selected.
                     className={this.getSortByClass(sortByOptionValue)}
                     /// bind to the current value of this but also bind the current sortByOptionValue as the first argument to the method call, ensuring the method is called with the appropriate value when clicked.
                     onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                     key={sortByOptionValue}
                   >
                     {sortByOption}
                   </li>)
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
        <input onChange={this.handleTermChange} placeholder="Search Businesses" />
        <input onChange={this.handleLocationChange} placeholder="Where?" />
    </div>
    <div className="SearchBar-submit">
        <a onClick={this.handleSearch}>Let's Go</a>
    </div>
    </div>
    )
    }
}

export default SearchBar