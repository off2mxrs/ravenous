import React from 'react'
import './BusinessList.css'
import Business from '../Buisness/Business'


class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {/* ITERATE THROUGH Business ARRAY PROP FROM APP.js */}
               {this.props.businesses.map(business => {
                  return <Business business={business} />
               })}
            </div>
        )
    }
}

export default BusinessList