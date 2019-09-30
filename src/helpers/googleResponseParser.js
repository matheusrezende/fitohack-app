import _ from 'lodash'

export const parseGoogleResponse = (components) => {
  const formattedResponse = {}

  _.each(components, (component) => {
    _.each(component.types, (type) => {
    
      if (type === 'route') {
        formattedResponse.street = component.long_name
      }
      if (type === 'street_number') {
        formattedResponse.streetNumber = component.long_name
      }
      if (type === 'locality') {
        formattedResponse.city = component.long_name
      }
      if (type === 'country') {
        formattedResponse.country = component.long_name
        formattedResponse.isoCountryCode = component.short_name
      }
      if (type === 'administrative_area_level_1') {
        formattedResponse.region = component.long_name
      }
      if (type === 'postal_code') {
        formattedResponse.postalCode = component.long_name
      }
    })
  })

  return formattedResponse
}
