
const express = require('express');
const app = express();
const mysql=require('mysql2');
app.use(express.static("abc"));	


app.get('/getbookid', (req,resp)=>{
	console.log("ajax function called");
	const dbobject={
		port:3306,
		host: "localhost",
		user: "root",
		password: "jagbhav",
		database: "webexam"
	}
	const conn=mysql.createConnection(dbobject);

	let output={ status: false, detail: {bookid: 0, bookname: '',price:0 }}
	let bookid=req.query.bookid;
	console.log(bookid);
	conn.query('select bookid, bookname, price from Book where bookid= ?',[bookid],
	(error,rows)=>{
		if(error){
			console.log(error);
		}
		else{
			if(rows.length>0){
				output.status=true;
				output.detail=rows[0];
			}
			else{
				console.log("No price with this id");
			}
		}
      console.log(output);
	  resp.send(output);
	});
});

app.get('/updateprice', (req,resp)=>{
	console.log("ajax function called");
	const dbobject={
		port:3306,
		host: "localhost",
		user: "root",
		password: "jagbhav",
		database: "webexam"
	}
	const conn=mysql.createConnection(dbobject);

	let output={ status: false}
	let bookid=req.query.bookid;
	let bookname=req.query.bookname;
	let price=req.query.price;
	console.log(bookid);
	conn.query('update Book set price= ? where bookid = ?',[bookid,price,bookname],
	(error,res)=>{
		if(error){
			console.log(error);
		}
		else{
			if(res.affectedRows>0){
				output.status=true;
			}
			else{
				console.log("not get update");
			}
		}
      console.log(output);
	  resp.send(output);
	});
});

app.listen(8081, function () {
    console.log("server listening at port 8081...");
});