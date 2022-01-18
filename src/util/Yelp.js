const apiKey = 'tjAFDN9kU66bQ6o9rwP8aUqGSUb8tC77rgUDa_HhnDb8esnrBm_nnt40IA3Dxd2ojfIS3RhqTkMFFdbScWeJJmRDex4z27jSoURX1RWzYEMywCSlrqW6mxtJUXTmYXYx'

const Yelp = {
    search(term, location, sortBy){
        ///To retrieve businesses, you’ll have to hit the /businesses endpoint of the Yelp API.//
        //In your own browser, visit https://cors-anywhere.herokuapp.com/corsdemo and click “Request temporary access to the demo server”
        //Back in your code, prepend the URL path you passed to the first argument in fetch() with the following: https://cors-anywhere.herokuapp.com/
        ///Pass in a second argument to the fetch() call. The value of headers should be another object.This object should have Authorization as a key.
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
               headers: { Authorization: `Bearer ${apiKey}` }
            }).then(res => {
                    return res.json() 
            }).then(jsonResponse => {
                if(jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                        }
                    });
                }
            })
    }
}

export default Yelp