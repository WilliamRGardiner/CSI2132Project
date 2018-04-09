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

@Path("/rating")
public class Rating {

	private Connection connection;
	private Statement st;
	private ResultSet rs;
	    

	public Rating(){};

    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/rating/ADD
    //-------------------------------------------------------------------------------------------
    @POST
	@Path("/ADD")
	@Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String postRating(String stringJsonRating) {
    	
    	JSONParser parser = new JSONParser();
    	JSONObject jsonRating = null;
    	String user_id ="";
    	String date ="";
    	String food = "";
    	String mood = "";
    	String staff = "";
    	String comments ="";
    	String restaurant_id ="";

		try {
			jsonRating = (JSONObject) parser.parse(stringJsonRating);
	    	user_id = (String) jsonRating.get("UserID").toString();
	    	date = (String) jsonRating.get("Date");
	    	food = (String) jsonRating.get("Food").toString();
	    	mood = (String) jsonRating.get("Mood").toString();
	    	staff = (String) jsonRating.get("Staff").toString();
	    	comments = (String) jsonRating.get("Comment");
	    	restaurant_id = (String) jsonRating.get("RestaurantID").toString();
		} catch (ParseException e1) {
			System.out.println("Could not read rating json. " + e1);
		}
    	    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/rating/ADD + ratingJson", "/RestaurantAPI/rest/rating/ADD + "+stringJsonRating);
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("INSERT INTO rating(userID, date, food, mood, staff, comments, restaurantID) VALUES ("+user_id+", '"+date+"', "+food+", "+mood+", "+staff+", '"+comments.replaceAll("'", "''")+"', "+restaurant_id+")");
           
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant insert into rating table: " + e);
            }
        
        	db.closeConnection();
        	
        	JSONObject json = new JSONObject();
        	json.put("UserID", user_id);
        	json.put("Date", date);
        	json.put("Food", food);
        	json.put("Mood", mood);
        	json.put("Staff", staff);
        	json.put("Comment", comments);
        	json.put("RestaurantID", restaurant_id);
        	
        	String returnJson = json.toString();
        	
        	return returnJson;
       
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/rating/UPDATE
    //-------------------------------------------------------------------------------------------
    @PUT
	@Path("/UPDATE")
	@Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String putRating(String stringJsonRating) {
    	
    	JSONParser parser = new JSONParser();
    	JSONObject jsonRating = null;
    	String user_id ="";
    	String date ="";
    	String food = "";
    	String mood = "";
    	String staff = "";
    	String comments ="";
    	String restaurant_id ="";

		try {
			jsonRating = (JSONObject) parser.parse(stringJsonRating);
	    	user_id = (String) jsonRating.get("UserID").toString();
	    	date = (String) jsonRating.get("Date");
	    	food = (String) jsonRating.get("Food").toString();
	    	mood = (String) jsonRating.get("Mood").toString();
	    	staff = (String) jsonRating.get("Staff").toString();
	    	comments = (String) jsonRating.get("Comment");
	    	restaurant_id = (String) jsonRating.get("RestaurantID").toString();
		} catch (ParseException e1) {
			System.out.println("Could not read rating json. " + e1);
		}
    	    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/rating/UPDATE + ratingJson", "/RestaurantAPI/rest/rating/UPDATE + "+stringJsonRating);
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("UPDATE rating set food ="+ food +", mood ="+ mood+", staff ="+ staff+", comments ='"+ comments.replaceAll("'", "''")+"', restaurantID ="+ restaurant_id +" WHERE userID="+user_id+" AND date='"+date+"'");
           
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant update rating table: " + e);
            }
        
        	db.closeConnection();
        	
        	JSONObject json = new JSONObject();
        	json.put("UserID", user_id);
        	json.put("Date", date);
        	json.put("Food", food);
        	json.put("Mood", mood);
        	json.put("Staff", staff);
        	json.put("Comment", comments);
        	json.put("RestaurantID", restaurant_id);
        	
        	String returnJson = json.toString();
        	
        	return returnJson;
       
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/rating/DELETE/<uid>/<date>/<rid>
    //-------------------------------------------------------------------------------------------
    @DELETE
	@Path("/DELETE/{uid}/{date}/{rid}")
    public void deleteRating(@PathParam("uid") String user_id,@PathParam("date") String date,@PathParam("rid") String restaurant_id) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/rating/DELETE/<uid>/<date>/<rid>", "/RestaurantAPI/rest/rating/DELETE/"+user_id+"/"+date+"/"+restaurant_id);
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("DELETE FROM project.rating WHERE userID="+user_id+" AND date='"+date+"' AND restaurantID="+restaurant_id);
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant delete from rating table:" + e);
            }
        	System.out.println("DELETED");
        	db.closeConnection();

    }
	
	
	
	
	
	
	
   }
