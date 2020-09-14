const con = require('../database/db');

exports.getAllProducts = (req,res) => {
    const query = "SELECT * FROM product";
    con.query(query, (err,result) => {
        if(err){
            throw err;
        }
        console.log(result);
        res.send("successful");
    });
};

exports.getProductByid = (req,res) => {
    const query = "SELECT * FROM product where product_id = ?";
    con.query(query, [req.params.id],(err,result) => {
        if(err) throw err;

        console.log(result);
        res.send("Successful");
    }) 
};