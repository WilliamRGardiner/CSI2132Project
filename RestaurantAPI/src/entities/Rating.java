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
    public void postRating(String stringJsonRating) {
    	
    	JSONParser parser = new JSONParser();
    	JSONObject jsonRating = null;
    	String user_id ="";
    	String date ="";
    	int food = 0;
    	int mood = 0;
    	int staff = 0;
    	String comments ="";
    	String restaurant_id ="";

		try {
			jsonRating = (JSONObject) parser.parse(stringJsonRating);
	    	user_id = (String) jsonRating.get("userID");
	    	date = (String) jsonRating.get("date");
	    	food = (int) jsonRating.get("food");
	    	mood = (int) jsonRating.get("mood");
	    	staff = (int) jsonRating.get("staff");
	    	comments = (String) jsonRating.get("comments");
	    	restaurant_id = (String) jsonRating.get("restaurantID");
		} catch (ParseException e1) {
			System.out.println("Could not read rating json. " + e1);
		}
    	    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("INSERT INTO rating(userID, date, food, mood, staff, comments, restaurantID) VALUES ('"+user_id+"', '"+date+"', '"+food+"', '"+mood+"', '"+staff+"', '"+comments+"', '"+restaurant_id+"')");
           
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant insert into rating table: " + e);
            }
        
        	db.closeConnection();
       
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/rating/UPDATE
    //-------------------------------------------------------------------------------------------
    @PUT
	@Path("/UPDATE")
	@Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public void putRating(String stringJsonRating) {
    	
    	JSONParser parser = new JSONParser();
    	JSONObject jsonRating = null;
    	String user_id ="";
    	String date ="";
    	int food = 0;
    	int mood = 0;
    	int staff = 0;
    	String comments ="";
    	String restaurant_id ="";

		try {
			jsonRating = (JSONObject) parser.parse(stringJsonRating);
	    	user_id = (String) jsonRating.get("userID");
	    	date = (String) jsonRating.get("date");
	    	food = (int) jsonRating.get("food");
	    	mood = (int) jsonRating.get("mood");
	    	staff = (int) jsonRating.get("staff");
	    	comments = (String) jsonRating.get("comments");
	    	restaurant_id = (String) jsonRating.get("restaurantID");
		} catch (ParseException e1) {
			System.out.println("Could not read rating json. " + e1);
		}
    	    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("UPDATE rating set food ="+ food +", mood ="+ mood+", staff ="+ staff+", comments ="+ comments+", restaurant_id ="+ restaurant_id +" WHERE userID="+user_id+" AND date="+date);
           
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant update rating table: " + e);
            }
        
        	db.closeConnection();
       
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/menuItem/DELETE/<aid>/<date>
    //-------------------------------------------------------------------------------------------
    @DELETE
	@Path("/DELETE/{uid}/{date}")
    public void deleteRating(@PathParam("uid") String user_id,@PathParam("date") String date) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("DELETE FROM project.rating WHERE userID="+user_id+" AND date="+date);
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant delete from rating table:" + e);
            }
        	System.out.println("DELETED");
        	db.closeConnection();

    }
	
	
	
	
	
	
	
   }
