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

@Path("/menuItem")
public class MenuItem {

	private Connection connection;
	private Statement st;
	private ResultSet rs;
	    

	public MenuItem(){};

    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/menuItem/ADD
    //-------------------------------------------------------------------------------------------
    @POST
	@Path("/ADD")
	@Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String postMenuItem(String stringJsonMenuItem) {
    	
    	JSONParser parser = new JSONParser();
    	JSONObject jsonMenuItem = null;
    	String name ="";
    	String type ="";
    	String category ="";
    	String description ="";
    	String price ="";
    	String restaurant_id ="";

		try {
			jsonMenuItem = (JSONObject) parser.parse(stringJsonMenuItem);
	    	name = (String) jsonMenuItem.get("Name");
	    	type = (String) jsonMenuItem.get("Type");
	    	category = (String) jsonMenuItem.get("Category");
	    	description = (String) jsonMenuItem.get("Description");
	    	price = (String) jsonMenuItem.get("Price").toString();
	    	restaurant_id = (String) jsonMenuItem.get("RestaurantID").toString();
		} catch (ParseException e1) {
			System.out.println("Could not read menuItem json. " + e1);
		}
    	    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/menuItem/ADD + meuItemJson", "/RestaurantAPI/rest/menuItem/ADD + "+stringJsonMenuItem);
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("INSERT INTO menuItem(name, type, category, description, price, restaurantID) VALUES ('"+name+"', '"+type+"', '"+category+"', '"+description.replaceAll("'", "''")+"', "+price+", "+restaurant_id+")");
           
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant insert into menuItem table: " + e);
            }
        
        	db.closeConnection();
        	
        	JSONObject json = new JSONObject();
        	json.put("Name", name);
        	json.put("Type", type);
        	json.put("Category", category);
        	json.put("Description", description);
        	json.put("Price", price);
        	json.put("RestaurantID", restaurant_id);
        	
        	String returnJson = json.toString();
        	
        	return returnJson;
       
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/menuItem/UPDATE
    //-------------------------------------------------------------------------------------------
    @PUT
	@Path("/UPDATE")
	@Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String putMenuItem(String stringJsonMenuItem) {
    	
    	JSONParser parser = new JSONParser();
    	JSONObject jsonMenuItem = null;
    	String item_id ="";
    	String name ="";
    	String type ="";
    	String category ="";
    	String description ="";
    	String price ="";
    	String restaurant_id ="";

		try {
			jsonMenuItem = (JSONObject) parser.parse(stringJsonMenuItem);
	    	item_id = (String) jsonMenuItem.get("ItemID").toString();
	    	name = (String) jsonMenuItem.get("Name");
	    	type = (String) jsonMenuItem.get("Type");
	    	category = (String) jsonMenuItem.get("Category");
	    	description = (String) jsonMenuItem.get("Description");
	    	price = (String) jsonMenuItem.get("Price").toString();
	    	restaurant_id = (String) jsonMenuItem.get("RestaurantID").toString();
		} catch (ParseException e1) {
			System.out.println("Could not read menuItem json. " + e1);
		}
    	    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/menuItem/UPDATE + menuItemJson", "/RestaurantAPI/rest/menuItem/UPDATE + "+stringJsonMenuItem);
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("UPDATE restaurant set name ='"+ name +"', type ='"+ type+"', category ='"+ category+"', description ='"+ description.replaceAll("'", "''")+"', price ="+ price +", restaurantID ="+ restaurant_id +" WHERE itemID="+item_id);
           
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant update menuItem table: " + e);
            }
        
        	db.closeConnection();
        	

        	JSONObject json = new JSONObject();
        	json.put("ItemID", item_id);
        	json.put("Name", name);
        	json.put("Type", type);
        	json.put("Category", category);
        	json.put("Description", description);
        	json.put("Price", price);
        	json.put("RestaurantID", restaurant_id);
        	
        	String returnJson = json.toString();
        	
        	return returnJson;
       
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/menuItem/DELETE/<mid>
    //-------------------------------------------------------------------------------------------
    @DELETE
	@Path("/DELETE/{mid}")
    public void deleteMenuItem(@PathParam("mid") String item_id) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection("/RestaurantAPI/rest/menuItem/DELETE/<mid>", "/RestaurantAPI/rest/menuItem/DELETE/"+item_id);
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("DELETE FROM project.menuItem WHERE itemID="+item_id);
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant delete from menuItem table:" + e);
            }
        	System.out.println("DELETED");
        	db.closeConnection();

    }
	
	
}
