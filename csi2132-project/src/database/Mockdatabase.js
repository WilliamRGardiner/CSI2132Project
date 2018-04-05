class Mockdatabase {
  constructor() {
    this.restaurants = [
      { "RestaurantID": "000", "Name":"Alice's Pub", "Type": "Irish", URL: "alicespub.com" },
      { "RestaurantID": "001", "Name":"Bob's Burgers", "Type": "Fast Food", URL: "bobsburgers.com" },
      { "RestaurantID": "002", "Name":"Catherine's Cafe", "Type": "Cafe", URL: "catherinescafe.com" },
      { "RestaurantID": "003", "Name":"David's Donuts", "Type": "Cafe", URL: "davidsdonuts.com" },
      { "RestaurantID": "004", "Name":"Emma's Eatery", "Type": "Dinner", URL: "emmaseatery.com" },
      { "RestaurantID": "005", "Name":"Frank's", "Type": "Fast Food", URL: "franks.com" },
      { "RestaurantID": "006", "Name":"Gee", "Type": "Bar", URL: "gee.com" },
      { "RestaurantID": "007", "Name":"Henry's", "Type": "Irish", URL: "henrys.com" },
      { "RestaurantID": "008", "Name":"Iona's", "Type": "Italian", URL: "ionas.com" },
      { "RestaurantID": "009", "Name":"Jay's", "Type": "Fast Food", URL: "jays.com" },
      { "RestaurantID": "010", "Name":"Kim's", "Type": "Korean", URL: "kims.com" },
      { "RestaurantID": "011", "Name":"Lou's Pizza", "Type": "Pizza", URL: "louspizza.com" }
    ]
    this.menuItems = [
      { "ItemID": "000", "Name": "Sausage Rolls", "Type": "Appetizer", "Category": "", "Description": "", "Price": "$5.00", "RestaurantID": "000" },
      { "ItemID": "001", "Name": "Fish Chowder", "Type": "Appetizer", "Category": "Soup/Cowder", "Description": "", "Price": "$5.00", "RestaurantID": "000" },
      { "ItemID": "002", "Name": "Colcannon Potatoes", "Type": "Main", "Category": "", "Description": "", "Price": "$10.00", "RestaurantID": "000" },
      { "ItemID": "003", "Name": "Olive And Let Die Burger", "Type": "Main", "Category": "Burger", "Description": "", "Price": "$8.00", "RestaurantID": "001" },
      { "ItemID": "004", "Name": "Use It Or Bleus It Burger", "Type": "Main", "Category": "Burger", "Description": "", "Price": "$5.00", "RestaurantID": "001" },
      { "ItemID": "005", "Name": "Muffin", "Type": "Breakfast", "Category": "", "Description": "", "Price": "$2.00", "RestaurantID": "002" },
      { "ItemID": "006", "Name": "Coffee/Tea", "Type": "Drink", "Category": "", "Description": "", "Price": "$2.00", "RestaurantID": "002" },
      { "ItemID": "007", "Name": "Muffin", "Type": "Breakfast", "Category": "", "Description": "", "Price": "$2.00", "RestaurantID": "003" },
      { "ItemID": "008", "Name": "Coffee/Tea", "Type": "Drink", "Category": "", "Description": "", "Price": "$2.00", "RestaurantID": "003" },
      { "ItemID": "009", "Name": "Donut", "Type": "Dessert", "Category": "", "Description": "", "Price": "$2.00", "RestaurantID": "003" },
      { "ItemID": "010", "Name": "Full English Breakfast", "Type": "Breakfast", "Category": "", "Description": "", "Price": "$12.00", "RestaurantID": "004" },
      { "ItemID": "011", "Name": "Coffee", "Type": "Drink", "Category": "", "Description": "", "Price": "$2.00", "RestaurantID": "004" },
      { "ItemID": "012", "Name": "Soda", "Type": "Drink", "Category": "", "Description": "", "Price": "$1.00", "RestaurantID": "004" },
      { "ItemID": "013", "Name": "Burger", "Type": "Main", "Category": "", "Description": "", "Price": "$5.00", "RestaurantID": "004" },
      { "ItemID": "014", "Name": "Fries", "Type": "Side", "Category": "", "Description": "", "Price": "$3.00", "RestaurantID": "004" },
      { "ItemID": "015", "Name": "Milkshake", "Type": "Drink", "Category": "", "Description": "", "Price": "$8.00", "RestaurantID": "004" },
      { "ItemID": "016", "Name": "Poutine", "Type": "Main", "Category": "", "Description": "", "Price": "$10.00", "RestaurantID": "004" },
      { "ItemID": "017", "Name": "Burger", "Type": "Main", "Category": "", "Description": "", "Price": "$4.00", "RestaurantID": "005" },
      { "ItemID": "018", "Name": "Sausage", "Type": "Main", "Category": "", "Description": "", "Price": "$4.00", "RestaurantID": "005" },
      { "ItemID": "019", "Name": "Fries", "Type": "Side", "Category": "", "Description": "", "Price": "$3.00", "RestaurantID": "005" },
      { "ItemID": "020", "Name": "Old Fashioned", "Type": "Drink", "Category": "", "Description": "", "Price": "$8.00", "RestaurantID": "006" },
      { "ItemID": "021", "Name": "Martini", "Type": "Drink", "Category": "", "Description": "", "Price": "$8.00", "RestaurantID": "006" },
      { "ItemID": "022", "Name": "Gin & Tonic", "Type": "Drink", "Category": "", "Description": "", "Price": "$8.00", "RestaurantID": "006" },
      { "ItemID": "023", "Name": "Beer", "Type": "Drink", "Category": "", "Description": "", "Price": "$6.00", "RestaurantID": "006" },
      { "ItemID": "024", "Name": "Sheppards Pie", "Type": "Main", "Category": "", "Description": "", "Price": "$10.00", "RestaurantID": "007" },
      { "ItemID": "025", "Name": "Fish and Chips", "Type": "Main", "Category": "", "Description": "", "Price": "$3.00", "RestaurantID": "007" },
      { "ItemID": "026", "Name": "Potato Soup", "Type": "Main", "Category": "", "Description": "", "Price": "$5.00", "RestaurantID": "007" },
      { "ItemID": "027", "Name": "Spaghetti", "Type": "Main", "Category": "", "Description": "", "Price": "$10.00", "RestaurantID": "008" },
      { "ItemID": "028", "Name": "Lasagna", "Type": "Main", "Category": "", "Description": "", "Price": "$12.00", "RestaurantID": "008" },
      { "ItemID": "029", "Name": "Burger", "Type": "Main", "Category": "", "Description": "", "Price": "$8.00", "RestaurantID": "009" },
      { "ItemID": "030", "Name": "Fries", "Type": "Side", "Category": "", "Description": "", "Price": "$5.00", "RestaurantID": "009" },
      { "ItemID": "031", "Name": "Pizza", "Type": "Main", "Category": "", "Description": "", "Price": "$3.00", "RestaurantID": "009" },
      { "ItemID": "032", "Name": "Pazeon", "Type": "Main", "Category": "", "Description": "", "Price": "$12.00", "RestaurantID": "010" },
      { "ItemID": "033", "Name": "Kimchizeon", "Type": "Main", "Category": "", "Description": "", "Price": "$12.00", "RestaurantID": "010" },
      { "ItemID": "034", "Name": "Shrimp tempura", "Type": "Appetizer", "Category": "", "Description": "", "Price": "$6.00", "RestaurantID": "010" },
      { "ItemID": "035", "Name": "Mandoo", "Type": "Side", "Category": "", "Description": "", "Price": "$5.00", "RestaurantID": "010" },
      { "ItemID": "036", "Name": "Spring Roll", "Type": "Side", "Category": "", "Description": "", "Price": "$5.00", "RestaurantID": "010" },
      { "ItemID": "037", "Name": "Pizza", "Type": "Main", "Category": "", "Description": "", "Price": "$3.00", "RestaurantID": "011" },
      { "ItemID": "038", "Name": "Calzone", "Type": "Main", "Category": "", "Description": "", "Price": "$8.00", "RestaurantID": "011" },
      { "ItemID": "039", "Name": "Fires", "Type": "Side", "Category": "", "Description": "", "Price": "$3.00", "RestaurantID": "011" }
    ]
    this.ratings = [
      { "UserID": "000", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "000" },
      { "UserID": "001", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "000" },
      { "UserID": "002", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "000" },
      { "UserID": "003", "Date": "1514764800", "Price": "4", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "000" },
      { "UserID": "004", "Date": "1514764800", "Price": "4", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "000" },
      { "UserID": "005", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "000" },
      { "UserID": "006", "Date": "1514764800", "Price": "1", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "000" },
      { "UserID": "007", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "000" },
      { "UserID": "008", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "001" },
      { "UserID": "009", "Date": "1514764800", "Price": "4", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "001" },
      { "UserID": "010", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "001" },
      { "UserID": "011", "Date": "1514764800", "Price": "1", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "001" },
      { "UserID": "012", "Date": "1514764800", "Price": "5", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "001" },
      { "UserID": "013", "Date": "1514764800", "Price": "5", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "001" },
      { "UserID": "014", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "001" },
      { "UserID": "000", "Date": "1514764800", "Price": "1", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "001" },
      { "UserID": "001", "Date": "1514764800", "Price": "4", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "002" },
      { "UserID": "002", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "002" },
      { "UserID": "003", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "002" },
      { "UserID": "004", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "002" },
      { "UserID": "005", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "002" },
      { "UserID": "006", "Date": "1514764800", "Price": "1", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "002" },
      { "UserID": "007", "Date": "1514764800", "Price": "1", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "002" },
      { "UserID": "008", "Date": "1514764800", "Price": "1", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "002" },
      { "UserID": "009", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "003" },
      { "UserID": "010", "Date": "1514764800", "Price": "4", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "003" },
      { "UserID": "011", "Date": "1514764800", "Price": "5", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "003" },
      { "UserID": "012", "Date": "1514764800", "Price": "4", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "003" },
      { "UserID": "013", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "003" },
      { "UserID": "014", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "003" },
      { "UserID": "000", "Date": "1514764800", "Price": "1", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "003" },
      { "UserID": "001", "Date": "1514764800", "Price": "4", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "003" },
      { "UserID": "002", "Date": "1514764800", "Price": "5", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "004" },
      { "UserID": "003", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "004" },
      { "UserID": "004", "Date": "1514764800", "Price": "4", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "004" },
      { "UserID": "005", "Date": "1514764800", "Price": "5", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "004" },
      { "UserID": "006", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "004" },
      { "UserID": "007", "Date": "1514764800", "Price": "1", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "004" },
      { "UserID": "008", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "004" },
      { "UserID": "009", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "004" },
      { "UserID": "010", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "005" },
      { "UserID": "011", "Date": "1514764800", "Price": "4", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "005" },
      { "UserID": "012", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "005" },
      { "UserID": "013", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "005" },
      { "UserID": "014", "Date": "1514764800", "Price": "1", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "005" },
      { "UserID": "000", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "005" },
      { "UserID": "001", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "005" },
      { "UserID": "002", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "005" },
      { "UserID": "003", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "006" },
      { "UserID": "004", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "006" },
      { "UserID": "000", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "006" },
      { "UserID": "006", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "006" },
      { "UserID": "007", "Date": "1514764800", "Price": "1", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "006" },
      { "UserID": "008", "Date": "1514764800", "Price": "1", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "006" },
      { "UserID": "009", "Date": "1514764800", "Price": "1", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "006" },
      { "UserID": "010", "Date": "1514764800", "Price": "1", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "006" },
      { "UserID": "011", "Date": "1514764800", "Price": "1", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "007" },
      { "UserID": "012", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "007" },
      { "UserID": "013", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "007" },
      { "UserID": "014", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "007" },
      { "UserID": "000", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "007" },
      { "UserID": "001", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "007" },
      { "UserID": "002", "Date": "1514764800", "Price": "4", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "007" },
      { "UserID": "003", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "007" },
      { "UserID": "004", "Date": "1514764800", "Price": "5", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "008" },
      { "UserID": "005", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "008" },
      { "UserID": "006", "Date": "1514764800", "Price": "4", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "008" },
      { "UserID": "007", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "008" },
      { "UserID": "008", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "008" },
      { "UserID": "009", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "008" },
      { "UserID": "010", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "008" },
      { "UserID": "000", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "008" },
      { "UserID": "012", "Date": "1514764800", "Price": "1", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "009" },
      { "UserID": "013", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "009" },
      { "UserID": "014", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "009" },
      { "UserID": "000", "Date": "1514764800", "Price": "1", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "009" },
      { "UserID": "001", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "009" },
      { "UserID": "002", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "009" },
      { "UserID": "003", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "009" },
      { "UserID": "004", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "009" },
      { "UserID": "005", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "010" },
      { "UserID": "006", "Date": "1514764800", "Price": "4", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "010" },
      { "UserID": "007", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "010" },
      { "UserID": "008", "Date": "1514764800", "Price": "5", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "010" },
      { "UserID": "009", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "010" },
      { "UserID": "010", "Date": "1514764800", "Price": "5", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "010" },
      { "UserID": "011", "Date": "1514764800", "Price": "4", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "010" },
      { "UserID": "004", "Date": "1514764800", "Price": "4", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "010" },
      { "UserID": "013", "Date": "1514764800", "Price": "4", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "011" },
      { "UserID": "014", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "011" },
      { "UserID": "000", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "011" },
      { "UserID": "001", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "011" },
      { "UserID": "002", "Date": "1514764800", "Price": "3", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "011" },
      { "UserID": "003", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "011" },
      { "UserID": "004", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "011" },
      { "UserID": "005", "Date": "1514764800", "Price": "2", "Food": "3", "Mood": "3", "Staff": "3", "Comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium.", "RestaurantID": "011" },
    ]
    this.raters = [
      { "UserID": "000", "username": "UserA", "password": "a123", "email": "abc@example.ca", "name": "Andy", "join‐date": "01/01/2017", "type": "" },
      { "UserID": "001", "username": "UserB", "password": "b123", "email": "def@example.ca", "name": "Beth", "join‐date": "01/01/2017", "type": "" },
      { "UserID": "002", "username": "UserC", "password": "c123", "email": "ghi@example.ca", "name": "Colin", "join‐date": "01/01/2017", "type": "" },
      { "UserID": "003", "username": "UserD", "password": "d123", "email": "jkl@example.ca", "name": "Dana", "join‐date": "01/01/2017", "type": "" },
      { "UserID": "004", "username": "UserE", "password": "e123", "email": "mno@example.ca", "name": "Ethan", "join‐date": "01/01/2017", "type": "" },
      { "UserID": "005", "username": "UserF", "password": "f123", "email": "pqr@example.ca", "name": "Fiona", "join‐date": "01/01/2017", "type": "" },
      { "UserID": "006", "username": "UserG", "password": "g123", "email": "stu@example.ca", "name": "Geoff", "join‐date": "01/01/2017", "type": "" },
      { "UserID": "007", "username": "UserH", "password": "h123", "email": "vwx@example.ca", "name": "Helen", "join‐date": "01/01/2017", "type": "" },
      { "UserID": "008", "username": "UserI", "password": "i123", "email": "yza@example.ca", "name": "Igor", "join‐date": "01/01/2017", "type": "" },
      { "UserID": "009", "username": "UserJ", "password": "j123", "email": "bcd@example.ca", "name": "Joan", "join‐date": "01/01/2017", "type": "" },
      { "UserID": "010", "username": "UserK", "password": "k123", "email": "efg@example.ca", "name": "Kevin", "join‐date": "01/01/2017", "type": "" },
      { "UserID": "011", "username": "UserL", "password": "l123", "email": "hij@example.ca", "name": "Lora", "join‐date": "01/01/2017", "type": "" },
      { "UserID": "012", "username": "UserM", "password": "m123", "email": "klm@example.ca", "name": "Matthew", "join‐date": "01/01/2017", "type": "" },
      { "UserID": "013", "username": "UserN", "password": "n123", "email": "nop@example.ca", "name": "Nathalie", "join‐date": "01/01/2017", "type": "" },
      { "UserID": "014", "username": "UserO", "password": "o123", "email": "qrs@example.ca", "name": "Oscar", "join‐date": "01/01/2017", "type": ""}
    ]
    this.ratingReviews = [
      { "UserID": "001", "Date": "1514764800", "RaterID": "001", "RestaurantID": "000", "type": "UP" },
      { "UserID": "001", "Date": "1514764800", "RaterID": "002", "RestaurantID": "000", "type": "UP" },
      { "UserID": "001", "Date": "1514764800", "RaterID": "002", "RestaurantID": "001", "type": "UP" },
      { "UserID": "001", "Date": "1514764800", "RaterID": "002", "RestaurantID": "003", "type": "DOWN" },
    ]
    this.menuItemRatings = [
      { "UserID": "000", "Date": "1514764800", "RestaurantID": "000", "ItemID": "000", "Rating": "3", "comment": "Lorem ipsum dolor" },
      { "UserID": "001", "Date": "1514764800", "RestaurantID": "000", "ItemID": "001", "Rating": "4", "comment": "Lorem ipsum dolor" },
      { "UserID": "002", "Date": "1514764800", "RestaurantID": "000", "ItemID": "002", "Rating": "3", "comment": "Lorem ipsum dolor" },
      { "UserID": "003", "Date": "1514764800", "RestaurantID": "000", "ItemID": "002", "Rating": "2", "comment": "Lorem ipsum dolor" }
    ]
    this.locations = [
      {"LocationID": "000", "RestaurantID": "000", "Street-address": "123 Main Street, Ottawa, ON", "Hour-open": "10am", "Hour-closed": "11pm", "Phone-number": "613-555-9999", "First-openned": "June 2014", "Manager-name": "Alan"}
    ]
  }

  fetchAllRestaurants = (store) => {
    var restaurantArray = JSON.parse(JSON.stringify(this.restaurants))
    for(var r of restaurantArray) r.locations = this.locations.filter(l => l.RestaurantID == r.RestaurantID)
    return restaurantArray;
  }

  fetchRestaurant = (id, store) => {
    var restaurantArray = JSON.parse(JSON.stringify(this.restaurants))
    restaurantArray = restaurantArray.filter(restaurant => restaurant.RestaurantID == id)
    for(var r of restaurantArray) r.locations = this.locations.filter(l => l.RestaurantID == r.RestaurantID)
    var item = restaurantArray.length == 1 ? restaurantArray[0] : {}
    return item;
  }

  fetchAllRestaurantsInCategory = (category, store) => {
    var restaurantArray = JSON.parse(JSON.stringify(this.restaurants))
    restaurantArray = category == "any" ? restaurantArray : restaurantArray.filter(restaurant => restaurant.Type == category)
    for(var r of restaurantArray) r.locations = this.locations.filter(l => l.RestaurantID == r.RestaurantID)
    console.log(restaurantArray)
    return restaurantArray
  }

  fetchAllRatings = (restaurantID, store) => {
    var ratingArray = JSON.parse(JSON.stringify(this.ratings))
    ratingArray = ratingArray.filter(rating => rating.RestaurantID == restaurantID)
    return ratingArray
  }

  fetchRating = (restaurantID, userID, date, store) => {
    var ratingArray = JSON.parse(JSON.stringify(this.ratings))
    ratingArray = ratingArray.filter(rating => rating.RestaurantID == restaurantID && rating.UserID == userID && rating.Date == date)
    var item = ratingArray.length == 1 ? ratingArray[0] : {}
    return ratingArray
  }

  fetchAllMenuItems = (restaurantID, store) => {
    console.log(restaurantID)
    var itemArray = JSON.parse(JSON.stringify(this.menuItems))
    itemArray = itemArray.filter(item => item.RestaurantID == restaurantID)
    return itemArray
  }

  fetchMenuItem = (restaurantID, id, store) => {
    var itemArray = JSON.parse(JSON.stringify(this.menuItems))
    itemArray = itemArray.filer(item => item.RestaurantID == restaurantID && item.itemId == id)
    var item = itemArray.length == 1 ? itemArray[0] : {}
    return item
  }

  fetchAllMenuItemsInCategory = (category, store) => {
    var itemArray = JSON.parse(JSON.stringify(this.menuItems))
    itemArray = category == "any" ? itemArray : itemArray.filter(item => item.Type == category)
    return itemArray
  }

  fetchAllMenuItemRatings = (restaurantID, menuItemID, store) => {
    var ratingArray = JSON.parse(JSON.stringify(this.menuItemRatings))
    ratingArray = ratingArray.filter(item => item.RestaurantID == restaurantID && item.ItemID == menuItemID)
    return ratingArray
  }

  fetchMenuItemRating = (restaurantID, menuItemID, userID, date, store) => {
    var ratingArray = JSON.parse(JSON.stringify(this.menuItemRatings))
    ratingArray = ratingArray.filter(item => item.RestaurantID == restaurantID && item.ItemID == menuItemID)
    return ratingArray
  }

  fetchAllRaters = (store) => {
    var raterArray = JSON.parse(JSON.stringify(this.raters))
    return raterArray;
  }

  fetchRater = (id, store) => {
    console.log(id)
    var raterArray = JSON.parse(JSON.stringify(this.raters))
    console.log(raterArray)
    raterArray = raterArray.filter(rater => rater.UserID == id)
    var item = raterArray.length == 1 ? raterArray[0] : {}
    console.log(item)
    return item
  }

  login = (data, store) => {
    console.log(data)
    var raterArray = JSON.parse(JSON.stringify(this.raters))
    console.log(raterArray)
    raterArray = raterArray.filter(rater => rater.username == data.Username && rater.password == data.password)
    console.log(raterArray)
    var item = raterArray.length == 1 ? { user: raterArray[0], sucess: true} : {sucess: false}
    return item;
  }
}

const MDB = new Mockdatabase()
export default MDB
