// npm install mysql -y
// tutorial: https://www.sitepoint.com/using-node-mysql-javascript-client/

const mysql = require('mysql');

// First you need to create a connection to the db
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database : 'developer_search'
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established!');
  
});


// con.query('SELECT * FROM developers where developer_id = 3', (err,rows) => {
//     if(err) throw err;
  
//     console.log('Data received from Db:\n');
//     console.log(rows);
// });

// const developer = { developer_email: 'winniepooh@mymail.com' };
// con.query('INSERT INTO developers SET ?', developer, (err, res) => {
//   if(err) throw err;

//   console.log('Last insert', res);
//   console.log(rows);
// });

// const java = { programming_language_id: 1, programming_language_name: 'JAVA' };
// con.query('INSERT INTO programming_languages SET ?', java, (err, res) => {
//   if(err) throw err;

//   console.log('Last insert', res);
// });

// con.query('SELECT * FROM programming_languages', (err,rows) => {
//     if(err) throw err;

//     console.log('Data received from Db:\n');
//     console.log(rows);
// });


con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});