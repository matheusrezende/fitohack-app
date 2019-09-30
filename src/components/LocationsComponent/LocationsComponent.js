import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_SUGGESTIONS_APIKEY} from '../../config/Maps';
import Colors from '../../constants/Colors';
import {parseGoogleResponse} from '../../helpers/googleResponseParser';


export default class extends React.Component {
  getDefaultValue = () => this.props.input.value

  handleClick = (data, details = null) => {
    const formattedData = {
      ...parseGoogleResponse(details.address_components),
      name: details.name,
    }
    this.props.onSelect({

      addressString: details.formatted_address,
      address: formattedData,
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
    })
  }
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder='Search'
        minLength={2} // minimum length of text to search
        autoFocus={false}
        returnKeyType='search' // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
        listViewDisplayed='auto' // true/false/undefined
        fetchDetails
        renderDescription={(row) => row.description} // custom description render
        onPress={this.handleClick}
        getDefaultValue={this.getDefaultValue}
        query={{
          key: GOOGLE_SUGGESTIONS_APIKEY,
          language: 'en', // language of the results
        }}
        styles={styles}
        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={{
          // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        }}
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: 'distance',
        }}
        debounce={200}
        enablePoweredByContainer={false}
      />
    );
  }
}


const styles = {
  textInputContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    
  },
  textInput: {
    backgroundColor: 'transparent',
    marginLeft: 0,
    marginRight: 0,
    height: 38,
    color: Colors.white,
    paddingLeft: 0,
    paddingRight: 0,
    fontSize: 16,
  },
  predefinedPlacesDescription: {
    color: 'white',
  },
  description: {
    color: Colors.white,
    marginLeft: 0,
    marginRight: 0,
    paddingRight: 0,
    paddingLeft: 0,
  },
  row: {
    paddingTop: 13,
    paddingBottom: 13,
    paddingRight: 0,
    paddingLeft: 0,
  },
  separator: {
    display: 'none',
  },
}
