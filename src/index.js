const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

//routes
const authRoutes = require("./Routes/auth");
const customerRoutes = require("./Routes/customer");
const photocopyRoutes = require("./Routes/photocopy");
const moneytransferRoutes = require("./Routes/moneytransfer");
const deliveriesRoutes = require("./Routes/deliveries");
const eventsRoutes = require("./Routes/events");
const debtsRoutes = require("./Routes/debts");

env.config();
const dblink=process.env.DB_LINK;
const port=process.env.PORT || 4000;
// mongodb connection
mongoose
  .connect(
   dblink, { useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false, }
  )
  .then(() => {
    console.log("Database connected");
  }).
  catch(error => console.log(error));

app.use(cors());
app.use(express.json());

if(process.env.NODE_ENV === 'production'){
		app.use(express.static('client/build'));
	//app.use(express.static(path.join(__dirname, 'client/build')));

}

  app.use("/uploads", express.static('uploads'));
 app.use("/api", authRoutes);
  app.use("/api", customerRoutes);
  app.use("/api", photocopyRoutes);
  app.use("/api", moneytransferRoutes);
  app.use("/api", deliveriesRoutes);
  app.use("/api", eventsRoutes);
  app.use("/api", debtsRoutes);

app.use("/api/test",(req,res)=>{res.status(200).json({reply:"hello from api"});});






let backendserver =app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});



app.get('*', (req,res) =>{
let reqpath=req.originalUrl;
if(reqpath.startsWith("/uploads")){
app.use("/uploads", express.static('uploads'));
}
else{
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'),);
	 //   res.sendFile(path.join(__dirname+'/client/build/index.html'));
	   //   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

}


	});





