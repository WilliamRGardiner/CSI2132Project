package entities;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import connection.DataAccess;

@Path("/category")
public class Category {
    private Connection connection;
    private Statement st;
    private ResultSet rs;
    
    public Category() {
    	
    }
       
    
    
    //GET RESTAURANTS OF CATEGORY
    @GET
	@Path("/get/{category}/restaurant")
	@Produces(MediaType.APPLICATION_JSON)
    public String getrestaurant(@PathParam("category") String category) {
    	
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
            if(category.replaceAll("\\s+","").toLowerCase().equals("all")){
            	 while (rs.next())
                 {
                 	
                 	JSONObject rJson = new JSONObject();
                 	rJson.put("rid", rs.getString("restaurant_id"));
                 	rJson.put("name",rs.getString("name"));
                 	rJson.put("type",rs.getString("type"));
                 	rJson.put("url",rs.getString("url"));
                 	jArray.add(rJson);
                 	
                 }
            }
            else{
            	 while (rs.next())
                 {
                	if(rs.getString("type").replaceAll("\\s+","").toLowerCase().equals(category.replaceAll("\\s+","").toLowerCase())){
                 		
                 	JSONObject rJson = new JSONObject();
                 	rJson.put("rid", rs.getString("restaurant_id"));
                 	rJson.put("name",rs.getString("name"));
                 	rJson.put("type",rs.getString("type"));
                 	rJson.put("url",rs.getString("url"));
                 	jArray.add(rJson);
                 	}
                 }
            }
           
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant read from restaurant table:" + e);
            }
        
        	json.put("restaurants", jArray);
        	
        	String returnJson = json.toString();
        
        	db.closeConnection();
        
            return returnJson;
    }
    
    
    //GET ALL RESTAURANTS TYPES 
    @GET
    @Path("/get/restaurantType")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRestaurantCategories() {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        connection = db.getConnection();

        JSONObject json = new JSONObject();
        JSONArray jArray = new JSONArray();
        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT DISTINCT type FROM project.restaurant");
            
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
    
    //GET ALL MENUITEM TYPES 
    @GET
    @Path("/get/menuItemType")
	@Produces(MediaType.APPLICATION_JSON)
    public String getMenuItemTypes() {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        connection = db.getConnection();

        JSONObject json = new JSONObject();
        JSONArray jArray = new JSONArray();
        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT DISTINCT type FROM project.menuitem");
            
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
    
    //GET ALL MENUITEM CATEGORIES 
    @GET
    @Path("/get/menuItemCategory")
	@Produces(MediaType.APPLICATION_JSON)
    public String getMenuItemCategories() {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        connection = db.getConnection();

        JSONObject json = new JSONObject();
        JSONArray jArray = new JSONArray();
        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT DISTINCT category FROM project.menuitem ");
            
            while (rs.next())
            {
            	jArray.add(rs.getString("category"));
            }
            json.put("categories", jArray);
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant read from restaurant table:" + e);
            }      
        	
        	String returnJson = json.toString();
        
        	db.closeConnection();
        
            return returnJson;
    }
    
}
