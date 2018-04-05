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
    public void postMenuItem(String stringJsonMenuItem) {
    	
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
	    	name = (String) jsonMenuItem.get("name");
	    	type = (String) jsonMenuItem.get("type");
	    	category = (String) jsonMenuItem.get("category");
	    	description = (String) jsonMenuItem.get("description");
	    	price = (String) jsonMenuItem.get("price");
	    	restaurant_id = (String) jsonMenuItem.get("restaurant_id");
		} catch (ParseException e1) {
			System.out.println("Could not read menuItem json. " + e1);
		}
    	    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("INSERT INTO menuItem(name, type, category, description, price, restaurant_id) VALUES ('"+name+"', '"+type+"', '"+category+"', '"+description+"', '"+price+"', '"+restaurant_id+"')");
           
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant insert into menuItem table: " + e);
            }
        
        	db.closeConnection();
       
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/menuItem/UPDATE
    //-------------------------------------------------------------------------------------------
    @PUT
	@Path("/UPDATE")
	@Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public void putMenuItem(String stringJsonMenuItem) {
    	
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
	    	item_id = (String) jsonMenuItem.get("item_id");
	    	name = (String) jsonMenuItem.get("name");
	    	type = (String) jsonMenuItem.get("type");
	    	category = (String) jsonMenuItem.get("category");
	    	description = (String) jsonMenuItem.get("description");
	    	price = (String) jsonMenuItem.get("price");
	    	restaurant_id = (String) jsonMenuItem.get("restaurant_id");
		} catch (ParseException e1) {
			System.out.println("Could not read menuItem json. " + e1);
		}
    	    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("UPDATE restaurant set name ="+ name +", type ="+ type+", category ="+ category+", description ="+ description+", price ="+ price +", restaurant_id ="+ restaurant_id +" WHERE item_id="+item_id);
           
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant update menuItem table: " + e);
            }
        
        	db.closeConnection();
       
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
        db.openConnection();
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("DELETE FROM project.menuItem WHERE item_id="+item_id);
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant delete from menuItem table:" + e);
            }
        	System.out.println("DELETED");
        	db.closeConnection();

    }
	
	
}
