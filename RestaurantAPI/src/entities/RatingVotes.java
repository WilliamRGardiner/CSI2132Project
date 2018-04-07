package entities;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import connection.DataAccess;

@Path("/ratingVotes")
public class RatingVotes {

	private Connection connection;
	private Statement st;
	private ResultSet rs;
	    

	public RatingVotes(){};

    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/ratingVotes/ADD
    //-------------------------------------------------------------------------------------------
    @POST
	@Path("/ADD")
	@Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String postRatingVote(String stringJsonRatingVote) {
    	
    	JSONParser parser = new JSONParser();
    	JSONObject jsonRatingVote = null;
    	String user_id ="";
    	String rater_id ="";
    	String restaurant_id = "";
    	String date ="";
    	String type ="";

		try {
			jsonRatingVote = (JSONObject) parser.parse(stringJsonRatingVote);
	    	user_id = (String) jsonRatingVote.get("UserID");
	    	rater_id = (String) jsonRatingVote.get("RaterID");
	    	restaurant_id = (String) jsonRatingVote.get("RestaurantID");
	    	date = (String) jsonRatingVote.get("Date");
	    	type = (String) jsonRatingVote.get("Type");
		} catch (ParseException e1) {
			System.out.println("Could not read ratingVote json. " + e1);
		}
    	    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/ratingVotes/ADD + ratingVoteJson","/RestaurantAPI/rest/ratingVotes/ADD + "+stringJsonRatingVote);
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("INSERT INTO ratingVotes(userID, raterID, restaurantID, date, type) VALUES ("+user_id+", "+rater_id+", "+restaurant_id+", '"+date+"', '"+type+"')");
           
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant insert into ratingVotes table: " + e);
            }
        
        	db.closeConnection();
        	
        	JSONObject json = new JSONObject();
        	json.put("UserID", user_id);
        	json.put("RaterID", rater_id);
        	json.put("RestaurantID", restaurant_id);
        	json.put("Date", date);
        	json.put("Type", type);
        	
        	String returnJson = json.toString();
        	
        	return returnJson;
       
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/ratingVotes/UPDATE
    //-------------------------------------------------------------------------------------------
    @PUT
	@Path("/UPDATE")
	@Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String putRatingVotes(String stringJsonRatingVote) {
    	
    	JSONParser parser = new JSONParser();
    	JSONObject jsonRatingVote = null;
    	String user_id ="";
    	String rater_id ="";
    	String restaurant_id = "";
    	String date ="";
    	String type ="";

		try {
			jsonRatingVote = (JSONObject) parser.parse(stringJsonRatingVote);
	    	user_id = (String) jsonRatingVote.get("UserID");
	    	rater_id = (String) jsonRatingVote.get("RaterID");
	    	restaurant_id = (String) jsonRatingVote.get("RestaurantID");
	    	date = (String) jsonRatingVote.get("Date");
	    	type = (String) jsonRatingVote.get("Type");
		} catch (ParseException e1) {
			System.out.println("Could not read ratingVote json. " + e1);
		}
    	    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/ratingVotes/UPDATE + ratingVoteJson","/RestaurantAPI/rest/ratingVotes/UPDATE + "+ stringJsonRatingVote);
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("UPDATE ratingItem SET type ='"+ type +"' WHERE userID="+user_id+" AND raterID="+rater_id+" AND restaurantID="+restaurant_id+" AND date='"+date+"'");
           
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant update ratingVote table: " + e);
            }
        
        	db.closeConnection();
       
        	JSONObject json = new JSONObject();
        	json.put("UserID", user_id);
        	json.put("RaterID", rater_id);
        	json.put("RestaurantID", restaurant_id);
        	json.put("Date", date);
        	json.put("Type", type);
        	
        	String returnJson = json.toString();
        	
        	return returnJson;
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/ratingVotes/DELETE/<uid>/<ruid>/<rid>/<date>
    //-------------------------------------------------------------------------------------------
    @DELETE
	@Path("/DELETE/{uid}/{ruid}/{rid}/{date}")
    public void deleteRatingItem(@PathParam("uid") String user_id,@PathParam("ruid") String rater_id, @PathParam("rid") String restaurant_id, @PathParam("date") String date) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/ratingVotes/DELETE/<uid>/<ruid>/<rid>/<date>","/RestaurantAPI/rest/ratingVotes/DELETE/"+user_id+"/"+rater_id+"/"+restaurant_id+"/"+date);
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("DELETE FROM project.ratingVotes WHERE userID="+user_id+" AND raterID="+rater_id+" AND restaurantID="+restaurant_id+" AND date='"+date+"'");
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant delete from ratingVotes table:" + e);
            }
        	System.out.println("DELETED");
        	db.closeConnection();

    }
	
}
