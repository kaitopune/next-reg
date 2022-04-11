var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "data"
});



con.connect(function (err) {
    if (err){
        console.log("Error connecting to db..!");
}
    console.log("Connected to db..");
});

const executeQuery=(query,arraParms)=>{
    return new Promise((resolve,reject)=>{
        try{
            con.query(query, arraParms, (err,data)=>{
                if (err){
                    console.log("error in excuteing the query");
                    reject(err);
                }
                resolve(data);
            });
        }catch (err){
            reject(err);
        }
    });
};

module.exports = { executeQuery };