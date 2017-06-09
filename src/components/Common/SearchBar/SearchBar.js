


<GooglePlacesAutocomplete
    // style={{listView: styles.listView}}
    style={{
        textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            borderBottomWidth:0
        },
        textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: '#5d5d5d',
            fontSize: 16
        },
        predefinedPlacesDescription: {
            color: '#1faadb'
        },
    }}

    placeholder='Search'
    minLength={2} // minimum length of text to search
    autoFocus={false}
    listViewDisplayed='auto'    // true/false/undefined
    fetchDetails={true}
    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(data);
        console.log(details);
    }}

    query={{
        key: 'AIzaSyAVQNUR-EjGGS0Jh-iyShey25Hf4Ej8Kco',
        language: 'ru', // language of the results
        types: '(restaurant)', // default: 'geocode'
    }}
    currentLocation={true}
    currentLocationLabel="Current location"
    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch

    GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        types: 'food',
    }}
    debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
    renderRightButton={() => <Text>Search</Text>}
/>