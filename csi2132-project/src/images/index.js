//Images
import RestaurantImage from '../restaurant.jpeg'
import MenuItemImage from '../menu_item.jpeg'
import FeaturedImage from '../featured.jpg'
import RaterImage from '../rater.jpg'
import MissingImage from '../missing_image.png'

const IMAGES = [
]

export default getImage = (name) => {
  return IMAGES[name]
}
