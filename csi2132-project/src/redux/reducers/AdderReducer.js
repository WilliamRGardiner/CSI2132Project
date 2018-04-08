import actions from '../actions/AdderActions'

export default (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case actions.ACTIONS.OPEN_ADD_RESTAURANT:
      newState.open =  "restaurant"
      newState.object = {
        "Name": "",
        "Type": "",
        "URL": ""
      }
      break
    case actions.ACTIONS.OPEN_ADD_MENU_ITEM:
    console.log("HIT")
      newState.open =  "menuItem"
      newState.object =  {
        "Name": "",
        "Type": "",
        "Category": "",
        "Description": "",
        "Price": "",
        "RestaurantID": action.payload.restaurantID
      }
      break
    case actions.ACTIONS.OPEN_ADD_RATING:
      newState.open =  "rating"
      newState.object =  {
        "UserID": action.payload.user ? action.payload.user.UserID : "0",
        "Price": "0",
        "menuItemID": action.payload.menuItem ? action.payload.menuItem.ItemID : "",
        "Food": "0",
        "Mood": "0",
        "Staff": "0",
        "Comments": "",
        "RestaurantID": action.payload.restaurant.RestaurantID
      }
      break
    case actions.ACTIONS.OPEN_ADD_LOCATION:
      newState.open =  "location"
      newState.object =  {
        "RestaurantID": action.payload.RestaurantID,
        "Street-address": "",
        "Hour-open": "",
        "Hour-closed": "",
        "Phone-number": "",
        "First-openned": "",
        "Manager-name": ""
      }
      break
    case actions.ACTIONS.OPEN_UPDATE:
      newState.open =  "update"
      newState.object =  JSON.parse(JSON.stringify(action.payload))
      break
    case actions.ACTIONS.OPEN_DELETE:
      newState.open =  "delete"
      break
    case actions.ACTIONS.CLOSE_ADDER:
      newState.open = null
      newState.object = {}
      break
    case actions.ACTIONS.UPDATE_FIELD:
      newState.object[action.payload.field] = action.payload.value
      break
    default:
      return {...state}
      break
  }
  return newState
}
