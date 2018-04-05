package entities;

import java.sql.Connection;
import java.sql.ResultSet;
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
            	rJson.put("UserID", rs.getString("userID"));
            	rJson.put("Email",rs.getString("email"));
            	rJson.put("Username",rs.getString("username"));
            	rJson.put("Join_Date",rs.getString("join_date"));
            	rJson.put("Type",rs.getString("type"));
            	
            	
            	Statement st2 = connection.createStatement();
            	ResultSet rs2 = st2.executeQuery("SELECT * FROM project.ratingVotes WHERE raterID="+rs.getString("userID"));
            	int upVote = 0;
            	int totalVote = 0;
            	
            	while (rs2.next())
                {
            		
            		if(rs2.getString("type").equals("UP")){
            			upVote++;
            			totalVote++;
            		}
            		else{
            			totalVote++;
            		}
            		
                }
            	
            	if(totalVote==0){
            		rJson.put("reputation", 0);
            	}
            	else{
            		rJson.put("reputation", (upVote/totalVote)*5);
            	}
            	
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
    public String getRater(@PathParam("uid") String user_id) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        connection = db.getConnection();
        JSONObject json = new JSONObject();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("SELECT * FROM project.rater");
            while (rs.next())
            {
            	if(rs.getString("userID").equals(user_id)){
                    System.out.println("UserID found::" + user_id);

                json.put("UserID", user_id);
            	json.put("Email", rs.getString("email"));
            	json.put("username", rs.getString("username"));
            	json.put("Join_Date", rs.getString("join_date"));
            	json.put("Type", rs.getString("type"));
            	
            	Statement st2 = connection.createStatement();
            	ResultSet rs2 = st2.executeQuery("SELECT * FROM project.ratingVotes WHERE raterID="+rs.getString("userID"));
            	int upVote = 0;
            	int totalVote = 0;
            	
            	while (rs2.next())
                {
            		
            		if(rs2.getString("type").equals("UP")){
            			upVote++;
            			totalVote++;
            		}
            		else{
            			totalVote++;
            		}
            		
                }
            	
            	if(totalVote==0){
            		json.put("Reputation", 0);
            	}
            	else{
            		json.put("Reputation", (upVote/totalVote)*5);
            	}
            	
            	}
            }
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant read from rater table:" + e);
            }
                	
        	String returnJson = json.toString();
        
        	db.closeConnection();
            System.out.println("returnJson: " + returnJson);

            return returnJson;
    }
	

    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/rating/ADD
    //-------------------------------------------------------------------------------------------
    @POST
	@Path("/ADD")
	@Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public void postRater(String stringJsonRater) {
    	
    	JSONParser parser = new JSONParser();
    	JSONObject jsonRater = null;
    	String user_id ="";
    	String email ="";
    	String join_date = "";
    	String type = "";
    	String username = "";
    	String password ="";


		try {
			jsonRater = (JSONObject) parser.parse(stringJsonRater);
	    	email = (String) jsonRater.get("email");
	    	join_date = (String) jsonRater.get("join_date");
	    	type = (String) jsonRater.get("type");
	    	username = (String) jsonRater.get("username");
	    	password = (String) jsonRater.get("password");
		} catch (ParseException e1) {
			System.out.println("Could not read rater json. " + e1);
		}
    	    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("INSERT INTO rater(email, joinDate, type, username, password) VALUES ('"+email+"', '"+join_date+"', '"+type+"', '"+username+"', '"+password+"')");
           
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant insert into rater table: " + e);
            }
        
        	db.closeConnection();
       
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/rater/UPDATE
    //-------------------------------------------------------------------------------------------
    @PUT
	@Path("/UPDATE")
	@Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public void putRater(String stringJsonRater) {
    	
    	JSONParser parser = new JSONParser();
    	JSONObject jsonRater = null;
    	String user_id ="";
    	String email ="";
    	String join_date = "";
    	String type = "";
    	String username = "";
    	String password ="";


		try {
			jsonRater = (JSONObject) parser.parse(stringJsonRater);
	    	user_id = (String) jsonRater.get("userID");
	    	email = (String) jsonRater.get("email");
	    	join_date = (String) jsonRater.get("join_date");
	    	type = (String) jsonRater.get("type");
	    	username = (String) jsonRater.get("username");
	    	password = (String) jsonRater.get("password");
		} catch (ParseException e1) {
			System.out.println("Could not read rater json. " + e1);
		}
    	    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("UPDATE rater set email ="+ email +", join_date ="+ join_date+", type ="+ type+", username ="+ username+", password ="+ password +" WHERE userID="+user_id);
           
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant update rater table: " + e);
            }
        
        	db.closeConnection();
       
    }
    
    //-------------------------------------------------------------------------------------------
    ///RestaurantAPI/rest/rater/DELETE/<uid>
    //-------------------------------------------------------------------------------------------
    @DELETE
	@Path("/DELETE/{uid}")
    public void deleteRater(@PathParam("uid") String user_id) {
    	
    	//Need to figure out how to not make a million database connections
    	DataAccess db;
        db= new DataAccess();
        db.openConnection();
        
        connection = db.getConnection();

        try{
            st = connection.createStatement();
            rs  = st.executeQuery("DELETE FROM project.rater WHERE userID="+user_id);
            rs.close();
            st.close();
            }catch(Exception e){
                System.out.println("Cant delete from rater table:" + e);
            }
        	System.out.println("DELETED");
        	db.closeConnection();

    }
	
}
