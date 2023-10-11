const Debts = require("../Models/debts");
const Photocopy = require("../Models/photocopy");
const Moneytransfer = require("../Models/moneytransfer");
const Delivery =require("../Models/deliveries");



exports.getevents = async (req, res) => {
	try{
        const{fromdate,todate,operator}=req.body.details;
        console.log(fromdate,todate,operator);
        const pc= Photocopy.find({date:{ $gte: new Date(fromdate), $lt: new Date(todate)}}).populate("operator", "_id firstName ");
        const mt= Moneytransfer.find({date:{$gte: new Date(fromdate), $lt: new Date(todate)}}).populate("operator", "_id firstName ").populate("customer"," _id firstName");
        const ds= Debts.find({date:{$gte: new Date(fromdate), $lt: new Date(todate)}}).populate("operator", "_id firstName ").populate("customer"," _id firstName");
        const dly=Delivery.find({updatedAt:{$gte: new Date(fromdate), $lt: new Date(todate)}}).populate("operator", "_id firstName ").populate("customer"," _id firstName");
//	return res.status(200).json({allevents:{pc,mt,ds}});
    Promise.all([pc,mt,ds,dly]).then((result) => {
       // console.log(result);
        const[rpc,rmt,rds,rdly]=result;
        let resultpc={};
        let resultmt={};
        let resultds={};
        let resultdly={};
        rpc.forEach((p)=>{
            resultpc[p._id]={...p._doc};
        });
        rmt.forEach((m)=>{
            resultmt[m._id]={...m._doc};
        });
        rds.forEach((d)=>{
            resultds[d._id]={...d._doc};
        });
        rdly.forEach((dl)=>{
            resultdly[dl._id]={...dl._doc};
        });
        	return res.status(200).json({allevents:{resultpc,resultmt,resultds,resultdly}});


    },(error)=>{
        return res.status(400).json({
            message: "Something went wrong1",
            error,
          });

    });


	}
	catch(error){ return res.status(400).json({
          message: "Something went wrong2",
		  error,
        });}
};
