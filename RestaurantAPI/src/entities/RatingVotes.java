package entities;

public class RatingVotes {

	private String userID;
    private String raterID;
    private String restaurantID;
    private String date;
    private String type;
    
    public RatingVotes(String userID, String raterID, String restaurantID, String date, String type) {
    	    	
    	this.userID = userID;
    	this.raterID = raterID;
    	this.restaurantID = restaurantID;
    	this.date = date;
    	this.type = type;

    }
    
    public String getUserID(){
    	return userID;
    }
    
    public void setUserID(String userID){
    	this.userID = userID;
    }
    
    public String getRaterID(){
    	return raterID;
    }
    
    public void setRaterID(String raterID){
    	this.raterID = raterID;
    }
    
    public String getRestaurantID(){
    	return restaurantID;
    }
    
    public void setRestaurantID(String restaurantID){
    	this.restaurantID = restaurantID;
    }
    
    public String getDate(){
    	return date;
    }
    
    public void setDate(String date){
    	this.date = date;
    }
    
    public String getType(){
    	return type;
    }
    
    public void setType(String type){
    	this.type = type;
    }
	
}
