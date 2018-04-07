package entities;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import connection.DataAccess;

@Path("/restaurant")
public class Restaurant {
    private Connection connection;
    private Statement st;
    private ResultSet rs;
    

    public Restaurant(){};

    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/restaurant/get
    //-------------------------------------------------------------------------------------------
    @GET
    @Path("/get")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRestaurants() {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/restaurant/get", "/RestaurantAPI/rest/restaurant/get");
        
        connection = db.getConnection();

        JSONObject json = new JSONObject();
        JSONArray jArray = new JSONArray();
        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT * FROM project.restaurant");
            
            while (rs.next())
            {
            	JSONObject rJson = new JSONObject();
            	rJson.put("RestaurantID", rs.getString("restaurantID"));
            	rJson.put("Name",rs.getString("name"));
            	rJson.put("Type",rs.getString("type"));
            	rJson.put("URL",rs.getString("url"));
            	
            	Statement st2 = connection.createStatement();
            	ResultSet rs2 = st2.executeQuery("SELECT * FROM project.location WHERE restaurantID="+rs.getString("restaurantID"));
            	JSONArray jArrayLocations = new JSONArray();
            	while (rs2.next())
                {
            		JSONObject jsonLocation = new JSONObject();
            		jsonLocation.put("LocationID", rs2.getString("locationID"));
            		jsonLocation.put("FirstOpenDate", rs2.getString("open_date"));
            		jsonLocation.put("ManagerName", rs2.getString("manager_name"));
            		jsonLocation.put("PhoneNumber", rs2.getString("phone_number"));
            		jsonLocation.put("StreetAddress", rs2.getString("address"));
            		jsonLocation.put("HourOpen", rs2.getString("opening_time"));
            		jsonLocation.put("HourClosed", rs2.getString("closing_time"));
            		jsonLocation.put("RestaurantID", rs.getString("restaurantID"));
                
            		jArrayLocations.add(jsonLocation);
                }
            	rJson.put("locations", jArrayLocations);
            	
            	
            	Statement st3 = connection.createStatement();
            	ResultSet rs3 = st3.executeQuery("SELECT * FROM project.rating WHERE restaurantID="+rs.getString("restaurantID"));
            	int ratingNumerator = 0;
            	int ratingDenominator = 0;
            	
            	while (rs3.next())
                {
            		
            		if (rs3.getInt("food")>0){
            			ratingNumerator=ratingNumerator+rs3.getInt("food");
            			ratingDenominator++;
            		}
            		if (rs3.getInt("mood")>0){
            			ratingNumerator=ratingNumerator+rs3.getInt("mood");
            			ratingDenominator++;
            		}
            		if (rs3.getInt("staff")>0){
            			ratingNumerator=ratingNumerator+rs3.getInt("staff");
            			ratingDenominator++;
            		}
            		
                }
            	
            	if(ratingDenominator==0){
            		rJson.put("Rating", 0);
            	}
            	else{
            		rJson.put("Rating", ratingNumerator/ratingDenominator);
            	}
            	
            	jArray.add(rJson);
            	
            }
            json.put("restaurants", jArray);
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant read from restaurant table:" + e);
            }      
        	
        	String returnJson = json.toString();
        
        	db.closeConnection();
        
            return returnJson;
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/restaurant/get/<rid>
    //-------------------------------------------------------------------------------------------
    @GET
	@Path("/get/{rid}")
	@Produces(MediaType.APPLICATION_JSON)
    public String getrestaurant(@PathParam("rid") int restaurant_id) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/restaurant/get/<rid>","/RestaurantAPI/rest/restaurant/get/"+restaurant_id);
        
        connection = db.getConnection();
        JSONObject json = new JSONObject();
        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT * FROM project.restaurant WHERE restaurantID="+restaurant_id);
            while (rs.next())
            {
            	
            	json.put("RestaurantID", restaurant_id);
            	json.put("Name", rs.getString("name"));
            	json.put("URL", rs.getString("url"));
            	
            	Statement st2 = connection.createStatement();
            	ResultSet rs2 = st2.executeQuery("SELECT * FROM project.location WHERE restaurantID="+rs.getString("restaurantID"));
            	JSONArray jArrayLocations = new JSONArray();
            	while (rs2.next())
                {
            		JSONObject jsonLocation = new JSONObject();
            		jsonLocation.put("LocationID", rs2.getString("locationID"));
            		jsonLocation.put("FirstOpenDate", rs2.getString("open_date"));
            		jsonLocation.put("ManagerName", rs2.getString("manager_name"));
            		jsonLocation.put("PhoneNumber", rs2.getString("phone_number"));
            		jsonLocation.put("StreetAddress", rs2.getString("address"));
            		jsonLocation.put("HourOpen", rs2.getString("opening_time"));
            		jsonLocation.put("HourClosed", rs2.getString("closing_time"));
            		jsonLocation.put("RestaurantID", rs.getString("restaurantID"));
                
            		jArrayLocations.add(jsonLocation);
                }
            	json.put("locations", jArrayLocations);
            	
               	Statement st3 = connection.createStatement();
            	ResultSet rs3 = st3.executeQuery("SELECT * FROM project.rating WHERE restaurantID="+rs.getString("restaurantID"));
            	int ratingNumerator = 0;
            	int ratingDenominator = 0;
            	
            	while (rs3.next())
                {
            		
            		if (rs3.getInt("food")>0){
            			ratingNumerator=ratingNumerator+rs3.getInt("food");
            			ratingDenominator++;
            		}
            		if (rs3.getInt("mood")>0){
            			ratingNumerator=ratingNumerator+rs3.getInt("mood");
            			ratingDenominator++;
            		}
            		if (rs3.getInt("staff")>0){
            			ratingNumerator=ratingNumerator+rs3.getInt("staff");
            			ratingDenominator++;
            		}
            		
                }
            	
            	
            	if(ratingDenominator==0){
            		json.put("Rating", 0);
            	}
            	else{
            		json.put("Rating", ratingNumerator/ratingDenominator);
            	}
            	
            }
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant read from restaurant table:" + e);
            }
        
        	
        	
        	String returnJson = json.toString();
        
        	db.closeConnection();
        
            return returnJson;
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/restaurant/get/<rid>/menuItem
    //-------------------------------------------------------------------------------------------
    @GET
	@Path("/get/{rid}/menuItem")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRestaurantMenuItems(@PathParam("rid") int restaurant_id) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/restaurant/get/<rid>/menuItem", "/RestaurantAPI/rest/restaurant/get/"+restaurant_id+"/menuItem");
        
        JSONObject json = new JSONObject();
        JSONArray jArray = new JSONArray();

        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT * FROM project.menuitem WHERE restaurantID="+restaurant_id);
            while (rs.next())
            {
            		JSONObject rJson = new JSONObject();
            		rJson.put("ItemID", rs.getString("itemID"));
            		rJson.put("Name", rs.getString("name"));
                	rJson.put("Type", rs.getString("type"));
                	rJson.put("Category", rs.getString("category"));
                	rJson.put("Description", rs.getString("description"));
                	rJson.put("Price", rs.getString("price"));
                	rJson.put("RestaurantID", restaurant_id);
                	
                	jArray.add(rJson);	
            }
            json.put("menuitems", jArray);
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant read from menuitem table:" + e);
            }
                	
        	String returnJson = json.toString();
        
        	db.closeConnection();
        
            return returnJson;
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/restaurant/get/<rid>/menuItem/<mid>
    //-------------------------------------------------------------------------------------------
    @GET
	@Path("/get/{rid}/menuItem/{mid}")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRestaurantMenuItem(@PathParam("rid") int restaurant_id, @PathParam("mid") int item_id) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/restaurant/get/<rid>/menuItem/<mid>","/RestaurantAPI/rest/restaurant/get/"+restaurant_id+"/menuItem/"+item_id);
        
        connection = db.getConnection();
        JSONObject json = new JSONObject();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT * FROM project.menuitem WHERE restaurantID="+restaurant_id);
            while (rs.next())
            {
            	if(rs.getInt("item_id") == item_id){
        
                	json.put("RestaurantID", restaurant_id);
                	json.put("ItemID", item_id);
                	json.put("Name", rs.getString("name"));
                	json.put("Type", rs.getString("type"));
                	json.put("Category", rs.getString("category"));
                	json.put("Description", rs.getString("description"));
                	json.put("Price", rs.getString("price"));
            	}
            }
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant read from menuitem table:" + e);
            }
        
        	
        	String returnJson = json.toString();
        
        	db.closeConnection();
        
            return returnJson;
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/restaurant/get/<rid>/menuItemType
    //-------------------------------------------------------------------------------------------
    @GET
	@Path("/get/{rid}/menuItemType")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRestaurantMenuItemType(@PathParam("rid") int restaurant_id) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/restaurant/get/<rid>/menuItemType","/RestaurantAPI/rest/restaurant/get/"+restaurant_id+"/menuItemType");
        
        connection = db.getConnection();

        JSONObject json = new JSONObject();
        JSONArray jArray = new JSONArray();
        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT DISTINCT type FROM project.menuitem WHERE restaurantID="+restaurant_id);
            
            while (rs.next())
            {
            	jArray.add(rs.getString("type"));
            }
            json.put("types", jArray);
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant read from restaurant table:" + e);
            }      
        	
        	String returnJson = json.toString();
        
        	db.closeConnection();
        
            return returnJson;
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/restaurant/get/<rid>/menuItemCategories
    //-------------------------------------------------------------------------------------------
    @GET
	@Path("/get/{rid}/menuItemCategories")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRestaurantMenuItemCategories(@PathParam("rid") int restaurant_id) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/restaurant/get/<rid>/menuItemCategories","/RestaurantAPI/rest/restaurant/get/"+restaurant_id+"/menuItemCategories");
        
        connection = db.getConnection();

        JSONObject json = new JSONObject();
        JSONArray jArray = new JSONArray();
        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT DISTINCT category FROM project.menuitem WHERE restaurantID="+restaurant_id);
            
            while (rs.next())
            {
            	jArray.add(rs.getString("category"));
            }
            json.put("categories", jArray);
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant read from menuItem table:" + e);
            }      
        	
        	String returnJson = json.toString();
        
        	db.closeConnection();
        
            return returnJson;
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/restaurant/get/<rid>/rating
    //-------------------------------------------------------------------------------------------
    @GET
	@Path("/get/{rid}/rating")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRestaurantRatings(@PathParam("rid") int restaurant_id) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/restaurant/get/<rid>/rating","/RestaurantAPI/rest/restaurant/get/"+restaurant_id+"/rating");
        
        JSONObject json = new JSONObject();
        JSONArray jArray = new JSONArray();

        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT * FROM project.rating WHERE restaurantID="+restaurant_id);
            while (rs.next())
            {
            		JSONObject rJson = new JSONObject();
                	rJson.put("UserID", rs.getString("userID"));
                	rJson.put("Date", rs.getString("date"));
                	rJson.put("Mood", rs.getInt("mood"));
                	rJson.put("Staff", rs.getInt("staff"));
                	rJson.put("Food", rs.getInt("food"));
                	rJson.put("Comment", rs.getString("comments"));
                	rJson.put("RestaurantID", restaurant_id);

                	jArray.add(rJson);	
            }
            json.put("ratings", jArray);
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant read from rating table:" + e);
            }
                	
        	String returnJson = json.toString();
        
        	db.closeConnection();
        
            return returnJson;
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/restaurant/get/<rid>/menuItem/<mid>/rating
    //-------------------------------------------------------------------------------------------
    @GET
	@Path("/get/{rid}/menuItem/{mid}/rating")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRestaurantMenuItemRating(@PathParam("rid") int restaurant_id, @PathParam("mid") int item_id) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/restaurant/get/<rid>/menuItem/<mid>/rating","/RestaurantAPI/rest/restaurant/get/"+restaurant_id+"/menuItem/"+item_id+"/rating");
        
        connection = db.getConnection();
        JSONObject json = new JSONObject();
        JSONArray jArray = new JSONArray();
        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT * FROM project.ratingitem");
           
            while (rs.next())
            {
            	if(rs.getInt("itemID") == item_id){
            		JSONObject rJson = new JSONObject();
                	rJson.put("RestaurantID", restaurant_id);
                	rJson.put("ItemID", item_id);
                	rJson.put("UserID", rs.getString("userID"));
                	rJson.put("Date", rs.getString("date"));
                	rJson.put("Rating", rs.getInt("rating"));
                	rJson.put("Comment", rs.getString("comments"));
                	jArray.add(rJson);	
            	}
            }
            json.put("ratings", jArray);
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant read from rating table:" + e);
            }
        	
            String returnJson = json.toString();
        	
            db.closeConnection();
        
            return returnJson;
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/restaurant/get/<rid>/rating/<uid>/<date>
    //-------------------------------------------------------------------------------------------
    @GET
	@Path("/get/{rid}/rating/{uid}/{date}")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRestaurantRatingUserIDDate(@PathParam("rid") String restaurant_id, @PathParam("uid") String user_id, @PathParam("date") String date) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/restaurant/get/<rid>/rating/<uid>/<date>","/RestaurantAPI/rest/restaurant/get/<rid>/rating/<uid>/<date>");
        
        JSONObject json = new JSONObject();
        JSONArray jArray = new JSONArray();

        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT * FROM project.rating WHERE restaurantID="+restaurant_id);
            while (rs.next())
            {
            		if(user_id.equals(rs.getString("user_id")) && date.equals(rs.getString("date"))){
            		
                	json.put("UserID", rs.getString("userID"));
                	json.put("Date", rs.getString("date"));
                	json.put("Mood", rs.getInt("mood"));
                	json.put("Staff", rs.getInt("staff"));
                	json.put("Food", rs.getInt("food"));
                	json.put("Comment", rs.getString("comments"));
                	json.put("RestaurantID", restaurant_id);
            		}
                		
            }
            
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant read from rating table:" + e);
            }
                	
        	String returnJson = json.toString();
        
        	db.closeConnection();
        
            return returnJson;
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/restaurant/ADD
    //-------------------------------------------------------------------------------------------
    @POST
	@Path("/ADD")
	@Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String postRestaurant(String stringJsonRestaurant) {
    	
    	JSONParser parser = new JSONParser();
    	JSONObject jsonRestaurant = null;
    	String name ="";
    	String type ="";
    	String URL ="";
		try {
			jsonRestaurant = (JSONObject) parser.parse(stringJsonRestaurant);
			name = (String) jsonRestaurant.get("Name");
			type = (String) jsonRestaurant.get("Type");
	    	URL = (String) jsonRestaurant.get("Url");
		} catch (ParseException e1) {
			System.out.println("Could not read restaurant json. " + e1);
		}
    	    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/restaurant/ADD + restaurantJSON", "/RestaurantAPI/rest/restaurant/ADD + "+stringJsonRestaurant);
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("INSERT INTO restaurant(name, type, url) VALUES ('"+name+"', '"+type+"', '"+URL+"')");
           
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant insert into restaurant table: " + e);
            }
        
        	db.closeConnection();
       
        	JSONObject json = new JSONObject();
        	json.put("Name",name);
        	json.put("Type",type);
        	json.put("URL",URL);
        	
        	String returnJson = json.toString();
        	
        	return returnJson;
        	
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/restaurant/UPDATE
    //-------------------------------------------------------------------------------------------
    @PUT
	@Path("/UPDATE")
	@Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String putRestaurant(String stringJsonRestaurant) {
    	
    	JSONParser parser = new JSONParser();
    	JSONObject jsonRestaurant = null;
    	String restaurant_id ="";
    	String name ="";
    	String type ="";
    	String URL ="";
		try {
			jsonRestaurant = (JSONObject) parser.parse(stringJsonRestaurant);
			restaurant_id = (String) jsonRestaurant.get("RestaurantID");
			name = (String) jsonRestaurant.get("Name");
			type = (String) jsonRestaurant.get("Type");
	    	URL = (String) jsonRestaurant.get("URL");
		} catch (ParseException e1) {
			System.out.println("Could not read restaurant json. " + e1);
		}
    	    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/restaurant/UPDATE + restaurantJSON", "/RestaurantAPI/rest/restaurant/UPDATE + "+ stringJsonRestaurant);
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("UPDATE restaurant set name ='"+ name +"', type ='"+ type +"', url ='"+ URL +"' WHERE restaurantID="+restaurant_id);
           
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant update restaurant table: " + e);
            }
        
        	db.closeConnection();
        	
        	JSONObject json = new JSONObject();
        	json.put("RestaurantID",restaurant_id);
        	json.put("Name",name);
        	json.put("Type",type);
        	json.put("URL",URL);
        	
        	String returnJson = json.toString();
        	
        	return returnJson;
       
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/restaurant/DELETE/<rid>
    //-------------------------------------------------------------------------------------------
    @DELETE
	@Path("/DELETE/{rid}")
    public void deleteRestaurant(@PathParam("rid") String restaurant_id) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/restaurant/DELETE/<rid>","/RestaurantAPI/rest/restaurant/DELETE/"+restaurant_id);
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("DELETE FROM project.restaurant WHERE restaurantID="+restaurant_id);
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant delete from restaurant table:" + e);
            }
        	System.out.println("DELETED");
        	db.closeConnection();

    }
    
    
    
}
