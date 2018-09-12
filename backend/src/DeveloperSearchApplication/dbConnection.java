package DeveloperSearchApplication;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.SQLException;

public class dbConnection {

	public static void main(String args[]) {
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = null;
			conn = DriverManager.getConnection("jdbc:mysql://localhost/developer_search", "root", "");
			System.out.print("Database is connected !");
			conn.close();
		} catch (Exception e) {
			System.out.print("Do not connect to DB - Error:" + e);
		}
	}

}
