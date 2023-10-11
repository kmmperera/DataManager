const Customer = require("../Models/customer");
const Moneytransfer =require("../Models/moneytransfer");



exports.newmoneytransfer = async(req, res,next) => {
	try{
	let {details: detailsreq}=req.body;
  
    const { operator,customer, amount,date,bankaccount } = detailsreq;
    
    const _newtransfer = new Moneytransfer({
        operator,customer, amount,date,bankaccount
     
     
    });

   await  _newtransfer.save((error, result) => {
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
		  error,
        });
      }

      if (result) {
        
        const { _id } = result;
		req.savedid=_id;
        next();
      }
    });
	}
	catch(error){ return res.status(400).json({
          message: "Something went wrong",
		  error,
        });}
};

exports.updatecustomer = (req, res) => {
	try{
	let {details: detailsreq}=req.body;
	
	Customer.findOneAndUpdate({_id: detailsreq.customer},{$push:{moneytransfer:req.savedid}},{new:true})
    .select("firstName lastName _id codicefiscale teln debts moneytransfer ")
    .populate("moneytransfer","  _id operator customer amount date bankaccount")
	.exec((error,result)=>{
		
		if(error){return res.status(400).json({
			 message: "Something went wrong",
		  error,
			});}
		if(result){
			let moneytransfercustomerobj={};
            moneytransfercustomerobj[result._id]={...result._doc};
			res.status(200).json({savedmoneytransfer:moneytransfercustomerobj});
		}
	});
  
	}
	catch(error){ return res.status(400).json({
          message: "Something went wrong",
		  error,
        });}
};