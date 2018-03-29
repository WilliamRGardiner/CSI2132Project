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

@Path("/rater")
public class Rater {
	
	private Connection connection;
    private Statement st;
    private ResultSet rs;
    
    public Rater() {
    	
    }

	@GET
    @Path("/get")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRaters() {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();

        connection = db.getConnection();

        JSONObject json = new JSONObject();
        JSONArray jArray = new JSONArray();
        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT * FROM project.rater");
            
            while (rs.next())
            {
            	JSONObject rJson = new JSONObject();
            	rJson.put("uid", rs.getString("user_id"));
            	rJson.put("email",rs.getString("email"));
            	rJson.put("name",rs.getString("name"));
            	rJson.put("joindate",rs.getString("join_date"));
            	rJson.put("type",rs.getString("type"));
            	rJson.put("reputation",rs.getString("reputation"));
            	jArray.add(rJson);
            }
            json.put("raters", jArray);
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant read from raters table:" + e);
            }      
        	
        	String returnJson = json.toString();
        
        	db.closeConnection();
        
            return returnJson;
    }
	
	@GET
	@Path("/get/{uid}")
	@Produces(MediaType.APPLICATION_JSON)
    public String getRater(@PathParam("uid") int uid) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        String email = "Not Found";
        String name = "Not Found";
        String joindate = "Not Found";
        String type = "Not Found";
        String rep = "Not Found";
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT * FROM project.rater");
            while (rs.next())
            {
            	if(rs.getInt("user_id") == uid){
            	email =  rs.getString("email");
                name =  rs.getString("name");;
                joindate =  rs.getString("join_date");;
                type =  rs.getString("type");
                rep =  rs.getString("reputation");
            	}
            }
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant read from rater table:" + e);
            }
        
        	JSONObject json = new JSONObject();
        	json.put("uid", uid);
        	json.put("email", email);
        	json.put("name", name);
        	json.put("join_date", joindate);
        	json.put("type", type);
        	json.put("reputation", rep);
        	
        	String returnJson = json.toString();
        
        	db.closeConnection();
        
            return returnJson;
    }
	

}
