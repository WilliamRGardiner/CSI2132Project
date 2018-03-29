package entities;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
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
    
    public Restaurant() {
    	
    }
       
    //GET ALL RESTAURANTS
    @GET
    @Path("/get")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRestaurants() {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        connection = db.getConnection();

        JSONObject json = new JSONObject();
        JSONArray jArray = new JSONArray();
        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT * FROM project.restaurant");
            
            while (rs.next())
            {
            	JSONObject rJson = new JSONObject();
            	rJson.put("rid", rs.getString("restaurant_id"));
            	rJson.put("name",rs.getString("name"));
            	rJson.put("type",rs.getString("type"));
            	rJson.put("url",rs.getString("url"));
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
    
    //GET RESTAURANT WITH RESTAURANTID
    @GET
	@Path("/get/{rid}")
	@Produces(MediaType.APPLICATION_JSON)
    public String getrestaurant(@PathParam("rid") int rid) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        int id = -1;
        String rname = "Not Found";
        String rURL = "Not Found";
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT * FROM project.restaurant");
            while (rs.next())
            {
            	if(rs.getInt("restaurant_id") == rid){
                rname = rs.getString("name");
            	rURL = rs.getString("url");
            	}
            }
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant read from restaurant table:" + e);
            }
        
        	JSONObject json = new JSONObject();
        	json.put("rid", rid);
        	json.put("name", rname);
        	json.put("url", rURL);
        	
        	String returnJson = json.toString();
        
        	db.closeConnection();
        
            return returnJson;
    }
    
    //GET MENUITEMS WITH RESTAURANTID
    @GET
	@Path("/get/{rid}/menuItem")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRestaurantMenuItems(@PathParam("rid") int rid) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        JSONObject json = new JSONObject();
        JSONArray jArray = new JSONArray();

        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT * FROM project.menuitem WHERE restaurant_id="+rid);
            while (rs.next())
            {
            		JSONObject rJson = new JSONObject();
                	rJson.put("rid", rid);
                	rJson.put("mid", rs.getString("item_id"));
                	rJson.put("name", rs.getString("name"));
                	rJson.put("type", rs.getString("type"));
                	rJson.put("category", rs.getString("category"));
                	rJson.put("description", rs.getString("description"));
                	rJson.put("price", rs.getString("price"));
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
    
  //GET MENUITEM WITH MENUITEMID AND RESTAURANTID
    @GET
	@Path("/get/{rid}/menuItem/{mid}")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRestaurantMenuItem(@PathParam("rid") int rid, @PathParam("mid") int mid) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        String name = "Not Found";
        String type = "Not Found";
        String category = "Not Found";
        String description = "Not Found";
        String price = "Not Found";

        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT * FROM project.menuitem WHERE restaurant_id="+rid);
            while (rs.next())
            {
            	if(rs.getInt("item_id") == mid){
            	    name = rs.getString("name");
            	    type = rs.getString("type");
            	    category = rs.getString("category");
            	    description = rs.getString("description");
            	    price = rs.getString("price");
            	}
            }
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant read from menuitem table:" + e);
            }
        
        	JSONObject json = new JSONObject();
        	json.put("rid", rid);
        	json.put("mid", mid);
        	json.put("name", name);
        	json.put("type", type);
        	json.put("category", category);
        	json.put("description", description);
        	json.put("price", price);
        	
        	String returnJson = json.toString();
        
        	db.closeConnection();
        
            return returnJson;
    }
    
  //GET MENUITEM TYPES WITH RESTAURANTID
    @GET
	@Path("/get/{rid}/menuItemType")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRestaurantMenuItemType(@PathParam("rid") int rid) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        connection = db.getConnection();

        JSONObject json = new JSONObject();
        JSONArray jArray = new JSONArray();
        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT DISTINCT type FROM project.menuitem WHERE restaurant_id="+rid);
            
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
    
    //GET MENUITEM CATEGORIES WITH RESTAURANTID
    @GET
	@Path("/get/{rid}/menuItemCategories")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRestaurantMenuItemCategories(@PathParam("rid") int rid) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        connection = db.getConnection();

        JSONObject json = new JSONObject();
        JSONArray jArray = new JSONArray();
        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT DISTINCT category FROM project.menuitem WHERE restaurant_id="+rid);
            
            while (rs.next())
            {
            	jArray.add(rs.getString("category"));
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
    
  //GET RATINGS WITH RESTAURANTID
    @GET
	@Path("/get/{rid}/rating")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRestaurantRatings(@PathParam("rid") int rid) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        JSONObject json = new JSONObject();
        JSONArray jArray = new JSONArray();

        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT * FROM project.rating WHERE restaurant_id="+rid);
            while (rs.next())
            {
            		JSONObject rJson = new JSONObject();
                	rJson.put("rid", rid);
                	rJson.put("uid", rs.getString("user_id"));
                	rJson.put("date", rs.getString("date"));
                	rJson.put("price", rs.getString("price"));
                	rJson.put("food", rs.getString("food"));
                	rJson.put("mood", rs.getString("mood"));
                	rJson.put("staff", rs.getString("staff"));
                	rJson.put("comments", rs.getString("comments"));
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
    
  //GET RATINGITEM WITH RATINGITEMID AND RESTAURANTID
    @GET
	@Path("/get/{rid}/rating/{aid}")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRestaurantRatingItem(@PathParam("rid") int rid, @PathParam("aid") int mid) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        String name = "Not Found";
        String type = "Not Found";
        String category = "Not Found";
        String description = "Not Found";
        String price = "Not Found";

        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT * FROM project.menuitem WHERE restaurant_id="+rid);
            while (rs.next())
            {
            	if(rs.getInt("item_id") == mid){
            	    name = rs.getString("name");
            	    type = rs.getString("type");
            	    category = rs.getString("category");
            	    description = rs.getString("description");
            	    price = rs.getString("price");
            	}
            }
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant read from menuitem table:" + e);
            }
        
        	JSONObject json = new JSONObject();
        	json.put("rid", rid);
        	json.put("mid", mid);
        	json.put("name", name);
        	json.put("type", type);
        	json.put("category", category);
        	json.put("description", description);
        	json.put("price", price);
        	
        	String returnJson = json.toString();
        
        	db.closeConnection();
        
            return returnJson;
    }
    
    //POST RESTAURANT WITH JSON
    @POST
	@Path("/post")
	@Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public void postRestaurant(String stringJsonRestaurant) {
    	
    	JSONParser parser = new JSONParser();
    	JSONObject jsonRestaurant = null;
    	String rid ="";
    	String rname ="";
    	String rURL ="";
		try {
			jsonRestaurant = (JSONObject) parser.parse(stringJsonRestaurant);
			rid = (String) jsonRestaurant.get("restaurant_id");
			rname = (String) jsonRestaurant.get("name");
	    	rURL = (String) jsonRestaurant.get("url");
		} catch (ParseException e1) {
			System.out.println("Could not read restaurant json. " + e1);
		}
    	    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("INSERT INTO restaurant(restaurantid, name, url) VALUES ('"+rid+"', '"+rname+"', '"+rURL+"')");
           
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant insert into restaurant table: " + e);
            }
        
        	db.closeConnection();
       
    }
    
    //DELETE RESTAURANT WITH RESTAURANTID
    @DELETE
	@Path("/del/{rid}")
    public void deleteRestaurant(@PathParam("rid") String rid) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("DELETE FROM project.restaurant WHERE restaurant_id="+rid);
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant delete from restaurant table:" + e);
            }
        	System.out.println("DELETED");
        	db.closeConnection();

    }
    
    
    
}
