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

@Path("/ratingItem")
public class RatingItem {

	private Connection connection;
	private Statement st;
	private ResultSet rs;
	    

	public RatingItem(){};

    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/ratingItem/ADD
    //-------------------------------------------------------------------------------------------
    @POST
	@Path("/ADD")
	@Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String postRatingItem(String stringJsonRatingItem) {
    	
    	JSONParser parser = new JSONParser();
    	JSONObject jsonRatingItem = null;
    	String user_id ="";
    	String date ="";
    	String item_id = "";
    	int rating = 0;
    	String comment ="";

		try {
			jsonRatingItem = (JSONObject) parser.parse(stringJsonRatingItem);
	    	user_id = (String) jsonRatingItem.get("UserID");
	    	date = (String) jsonRatingItem.get("Date");
	    	item_id = (String) jsonRatingItem.get("ItemID");
	    	rating = (int) jsonRatingItem.get("Rating");
	    	comment = (String) jsonRatingItem.get("Comment");
		} catch (ParseException e1) {
			System.out.println("Could not read ratingItem json. " + e1);
		}
    	    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/ratingItem/ADD + ratingItemJson","/RestaurantAPI/rest/ratingItem/ADD + "+stringJsonRatingItem);
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("INSERT INTO ratingItem(userID, date, itemID, rating, comments) VALUES ("+user_id+", '"+date+"', "+item_id+", "+rating+", '"+comment+"')");
           
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant insert into ratingItem table: " + e);
            }
        
        	db.closeConnection();
        	
        	JSONObject json = new JSONObject();
        	json.put("UserID", user_id);
        	json.put("Date", date);
        	json.put("ItemID", item_id);
        	json.put("Rating", rating);
        	json.put("Comment", comment);
        	
        	String returnJson = json.toString();
        	
        	return returnJson;
       
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/ratingItem/UPDATE
    //-------------------------------------------------------------------------------------------
    @PUT
	@Path("/UPDATE")
	@Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String putRatingItem(String stringJsonRatingItem) {
    	
    	JSONParser parser = new JSONParser();
    	JSONObject jsonRatingItem = null;
    	String user_id ="";
    	String date ="";
    	String item_id = "";
    	int rating = 0;
    	String comment ="";

		try {
			jsonRatingItem = (JSONObject) parser.parse(stringJsonRatingItem);
	    	user_id = (String) jsonRatingItem.get("UserID");
	    	date = (String) jsonRatingItem.get("Date");
	    	item_id = (String) jsonRatingItem.get("ItemID");
	    	rating = (int) jsonRatingItem.get("Rating");
	    	comment = (String) jsonRatingItem.get("Comment");
		} catch (ParseException e1) {
			System.out.println("Could not read ratingItem json. " + e1);
		}
    	    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/ratingItem/UPDATE + ratingItemJson", "/RestaurantAPI/rest/ratingItem/UPDATE + "+stringJsonRatingItem);
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("UPDATE ratingItem set rating ="+ rating +", comments ='"+ comment+"' WHERE userID="+user_id+" AND date='"+date+"' AND itemID="+item_id);
           
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant update ratingItem table: " + e);
            }
        
        	db.closeConnection();
       
        	JSONObject json = new JSONObject();
        	json.put("UserID", user_id);
        	json.put("Date", date);
        	json.put("ItemID", item_id);
        	json.put("Rating", rating);
        	json.put("Comment", comment);
        	
        	String returnJson = json.toString();
        	
        	return returnJson;
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/ratingItem/DELETE/<uid>/<date>/<aid>
    //-------------------------------------------------------------------------------------------
    @DELETE
	@Path("/DELETE/{uid}/{date}/{aid}")
    public void deleteRatingItem(@PathParam("uid") String user_id,@PathParam("date") String date, @PathParam("aid") String item_id) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/ratingItem/DELETE/<uid>/<date>/<aid>", "/RestaurantAPI/rest/ratingItem/DELETE/"+user_id+"/"+date+"/"+item_id);
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("DELETE FROM project.ratingItem WHERE userID="+user_id+" AND date="+date+" AND itemID="+item_id);
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant delete from ratingItem table:" + e);
            }
        	System.out.println("DELETED");
        	db.closeConnection();

    }
	
	
}
