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

public class Location {

	private Connection connection;
	private Statement st;
	private ResultSet rs;
	    

	public Location(){};

    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/location/ADD
    //-------------------------------------------------------------------------------------------
    @POST
	@Path("/ADD")
	@Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String postLocation(String stringJsonLocation) {
    	
    	JSONParser parser = new JSONParser();
    	JSONObject jsonLocation = null;
    	String open_date ="";
    	String manager_name ="";
    	String phone_number ="";
    	String address ="";
    	String hour_open ="";
    	String hour_close ="";
    	String restaurant_id ="";

		try {
			jsonLocation = (JSONObject) parser.parse(stringJsonLocation);
	    	open_date = (String) jsonLocation.get("open_date");
	    	manager_name = (String) jsonLocation.get("Manager_name");
	    	phone_number = (String) jsonLocation.get("Phone_number");
	    	address = (String) jsonLocation.get("address");
	    	hour_open = (String) jsonLocation.get("opening_time");
	    	hour_close = (String) jsonLocation.get("closing_time");
	    	restaurant_id = (String) jsonLocation.get("RestaurantID");
		} catch (ParseException e1) {
			System.out.println("Could not read location json. " + e1);
		}
    	    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/location/ADD + locationJson","/RestaurantAPI/rest/location/ADD + "+stringJsonLocation);
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("INSERT INTO location(open_date, manager_name, phone_number, address, opening_time, closing_time, restaurantID) VALUES ('"+open_date+"', '"+manager_name+"', '"+phone_number+"', '"+address+"', '"+hour_open+"', '"+hour_close+"', "+restaurant_id+")");
           
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant insert into location table: " + e);
            }
        
        	db.closeConnection();
        	
        	JSONObject json = new JSONObject();
        	json.put("open_date", open_date);
        	json.put("Manager_name", manager_name);
        	json.put("Phone_number", phone_number);
        	json.put("address", address);
        	json.put("opening_time", hour_open);
        	json.put("closing_time", hour_close);
        	json.put("RestaurantID", restaurant_id);
        	
        	String returnJson = json.toString();
        	
        	return returnJson;
       
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/location/UPDATE
    //-------------------------------------------------------------------------------------------
    @PUT
	@Path("/UPDATE")
	@Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String putLocation(String stringJsonLocation) {
    	
    	JSONParser parser = new JSONParser();
    	JSONObject jsonLocation = null;
    	String location_id ="";
    	String open_date ="";
    	String manager_name ="";
    	String phone_number ="";
    	String address ="";
    	String hour_open ="";
    	String hour_close ="";
    	String restaurant_id ="";

		try {
			jsonLocation = (JSONObject) parser.parse(stringJsonLocation);
	    	location_id = (String) jsonLocation.get("location_id");
	    	open_date = (String) jsonLocation.get("open_date");
	    	manager_name = (String) jsonLocation.get("manager_name");
	    	phone_number = (String) jsonLocation.get("phone_number");
	    	address = (String) jsonLocation.get("address");
	    	hour_open = (String) jsonLocation.get("hour_open");
	    	hour_close = (String) jsonLocation.get("hour_close");
	    	restaurant_id = (String) jsonLocation.get("restaurant_id");
		} catch (ParseException e1) {
			System.out.println("Could not read location json. " + e1);
		}
    	    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/location/UPDATE + locationJson", "/RestaurantAPI/rest/location/UPDATE + "+stringJsonLocation);
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("UPDATE location SET open_date ='"+ open_date +"', manager_name ='"+ manager_name+"', phone_number ='"+ phone_number+"', address ='"+ address+"', hour_open ='"+ hour_open +"', hour_close='"+hour_close+"', restaurant_id ="+ restaurant_id +" WHERE location_id="+location_id);
           
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant update location table: " + e);
            }
        
        	db.closeConnection();
        	
        	JSONObject json = new JSONObject();
        	json.put("open_date", open_date);
        	json.put("Manager_name", manager_name);
        	json.put("Phone_number", phone_number);
        	json.put("address", address);
        	json.put("opening_time", hour_open);
        	json.put("closing_time", hour_close);
        	json.put("RestaurantID", restaurant_id);
        	
        	String returnJson = json.toString();
        	
        	return returnJson;
       
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/location/DELETE/<lid>
    //-------------------------------------------------------------------------------------------
    @DELETE
	@Path("/DELETE/{lid}")
    public void deleteLocation(@PathParam("lid") String location_id) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/location/DELETE/<lid>", "/RestaurantAPI/rest/location/DELETE/"+location_id);
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("DELETE FROM project.location WHERE locationID="+location_id);
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant delete from location table:" + e);
            }
        	System.out.println("DELETED");
        	db.closeConnection();

    }
	
}
