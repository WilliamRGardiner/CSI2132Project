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
       
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/category/get/{type}/restaurant
    //-------------------------------------------------------------------------------------------
    @GET
	@Path("/get/{type}/restaurant")
	@Produces(MediaType.APPLICATION_JSON)
    public String getrestaurant(@PathParam("type") String type) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/category/get/{type}/restaurant","/RestaurantAPI/rest/category/get/"+type+"/restaurant");
        
        connection = db.getConnection();

        JSONObject json = new JSONObject();
        JSONArray jArray = new JSONArray();
        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT * FROM project.restaurant");
   
            	 while (rs.next())
                 {
                 
            		 
            		if(rs.getString("type").replaceAll("\\s", "").toLowerCase().equals(type.replaceAll("\\s+","").toLowerCase())){ 
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
            		else if(("any").equals(type.replaceAll("\\s+","").toLowerCase())){
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
    
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/category/get/restaurantType
    //-------------------------------------------------------------------------------------------
    @GET
    @Path("/get/restaurantType")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRestaurantCategories() {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/category/get/restaurantType","/RestaurantAPI/rest/category/get/restaurantType");
        
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
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/category/get/menuItemType
    //-------------------------------------------------------------------------------------------
    @GET
    @Path("/get/menuItemType")
	@Produces(MediaType.APPLICATION_JSON)
    public String getMenuItemTypes() {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/category/get/menuItemType","/RestaurantAPI/rest/category/get/menuItemType");
        
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
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/category/get/menuItemCategory
    //-------------------------------------------------------------------------------------------
    @GET
    @Path("/get/menuItemCategory")
	@Produces(MediaType.APPLICATION_JSON)
    public String getMenuItemCategories() {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/category/get/menuItemCategory","/RestaurantAPI/rest/category/get/menuItemCategory");
        
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
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/category/get/<category>/menuItem
    //-------------------------------------------------------------------------------------------
   @GET
	@Path("/get/{category}/menuItem")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRestaurantMenuItemsCategories(@PathParam("category") String category) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/category/get/<category>/menuItem","/RestaurantAPI/rest/category/get/"+category+"/menuItem");
        
        JSONObject json = new JSONObject();
        JSONArray jArray = new JSONArray();

        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT * FROM project.menuitem");
            while (rs.next())
            {
            	if(rs.getString("category").replaceAll("\\s", "").toLowerCase().equals(category.replaceAll("\\s+","").toLowerCase())){
            		JSONObject rJson = new JSONObject();
            		rJson.put("ItemID", rs.getString("itemID"));
            		rJson.put("Name", rs.getString("name"));
                	rJson.put("Type", rs.getString("type"));
                	rJson.put("Category", rs.getString("category"));
                	rJson.put("Description", rs.getString("description"));
                	rJson.put("Price", rs.getString("price"));
                	rJson.put("RestaurantID", rs.getString("restaurantID"));
                	
                	jArray.add(rJson);	
            	}
            	else if(("any").equals(category.replaceAll("\\s+","").toLowerCase())){
            		JSONObject rJson = new JSONObject();
            		rJson.put("ItemID", rs.getString("itemID"));
            		rJson.put("Name", rs.getString("name"));
                	rJson.put("Type", rs.getString("type"));
                	rJson.put("Category", rs.getString("category"));
                	rJson.put("Description", rs.getString("description"));
                	rJson.put("Price", rs.getString("price"));
                	rJson.put("RestaurantID", rs.getString("restaurantID"));
                	
                	jArray.add(rJson);	
            	}
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
    ///RestaurantAPI/rest/category/get/<type>/menuItem
    //-------------------------------------------------------------------------------------------
   /* @GET
	@Path("/get/{type}/menuItem")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRestaurantMenuItemsTypes(@PathParam("type") String type) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/category/get/<type>/menuItem", "/RestaurantAPI/rest/category/get/"+type+"/menuItem");
        
        JSONObject json = new JSONObject();
        JSONArray jArray = new JSONArray();

        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT * FROM project.menuitem");
            while (rs.next())
            {
            	if(rs.getString("type").replaceAll("\\s", "").toLowerCase().equals(type.replaceAll("\\s+","").toLowerCase())){
            		JSONObject rJson = new JSONObject();
            		rJson.put("ItemID", rs.getString("itemID"));
            		rJson.put("Name", rs.getString("name"));
                	rJson.put("Type", rs.getString("type"));
                	rJson.put("Category", rs.getString("category"));
                	rJson.put("Description", rs.getString("description"));
                	rJson.put("Price", rs.getString("price"));
                	rJson.put("RestaurantID", rs.getString("restaurantID"));
                	
                	jArray.add(rJson);	
            	}
            	else if(("any").equals(type.replaceAll("\\s+","").toLowerCase())){
            		JSONObject rJson = new JSONObject();
            		rJson.put("ItemID", rs.getString("itemID"));
            		rJson.put("Name", rs.getString("name"));
                	rJson.put("Type", rs.getString("type"));
                	rJson.put("Category", rs.getString("category"));
                	rJson.put("Description", rs.getString("description"));
                	rJson.put("Price", rs.getString("price"));
                	rJson.put("RestaurantID", rs.getString("restaurantID"));
                	
                	jArray.add(rJson);	
            	}
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
    }*/
    
}
