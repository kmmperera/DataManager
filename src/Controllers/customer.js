const Customer = require("../Models/customer");




exports.newcustomer = (req, res) => {
	try{
	let {customer: customerreq}=req.body;
  Customer.findOne({ codicefiscale: customerreq.codicefiscale }).exec( (error, user) => {
    if (user)
      return res.status(400).json({
        error: "User already registered",
      });

    const { firstname :firstName, lastname :lastName, teln,codicefiscale   } = customerreq;
    
    const _customer = new Customer({
      firstName,
      lastName,
      teln,
      codicefiscale
     
     
    });

    _customer.save((error, customer) => {
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
		  error,
        });
      }

      if (customer) {
        
        const { _id, firstName, lastName,teln,codicefiscale  } = customer;
		let customerobj={};
		customerobj[customer._id]={...customer._doc};
        return res.status(200).json({
         customer:customerobj,
        });
      }
    });
  });
	}
	catch(error){ return res.status(400).json({
          message: "Something went wrong",
		  error,
        });}
};

exports.getallcustomers = (req, res) => {
	try{
	Customer.find({}).select("firstName lastName _id codicefiscale teln debts").exec((error,allcustomers)=>{
		if(error){
			
			res.status(400).json({error:"could not find users"});
		}
		if(allcustomers){
			let allcustomersobj={};
			allcustomers.forEach((c)=>{allcustomersobj[c._id]={...c._doc}});
			res.status(200).json({allcustomers:allcustomersobj});
		}
		
	});
	}
	catch(error){ return res.status(400).json({
          message: "Something went wrong",
		  error,
        });}
};


exports.submitdebts = (req, res) => {
	try{
	let {debts: debtsreq}=req.body;
	
	Customer.findOneAndUpdate({codicefiscale: debtsreq.customercodice},{$push:{debts:debtsreq.debtvalue}},{new:true})
	.select("firstName lastName _id codicefiscale teln debts")
	.exec((error,result)=>{
		
		if(error){return res.status(400).json({
			 message: "Something went wrong",
		  error,
			});}
		if(result){
			let customerobj={};
		customerobj[result._id]={...result._doc};
			res.status(200).json({updatedcustomer:customerobj});
		}
	});
  
	}
	catch(error){ return res.status(400).json({
          message: "Something went wrong",
		  error,
        });}
};


exports.deletecustomer = (req, res) => {
	try{
	let {customer: customeridreq}=req.body;
	
		Customer.findOneAndDelete({_id:customeridreq.customerid}).exec((error,result)=>{
		if(error){ return res.status(400).json({ message: "Something went wrong",
		  error,});}
		if(result){
		//	let deletedobj ={};
		//deletedobj[result._id] ={...result._doc};
			return res.status(200).json({deletedcustomer:result});
			}
	});

  
	}
	catch(error){ return res.status(400).json({
          message: "Something went wrong",
		  error,
        });}
};


exports.searchcustomer = (req, res) => {
	try{
	let {customer: customeridreq}=req.body;

		Customer.find({codicefiscale:	 new RegExp(customeridreq.searchinput, "i")  })
		.populate("moneytransfer","  _id operator customer amount date bankaccount")
		.populate("debts","  _id operator customer amount date ")
		.populate({path:'moneytransfer',populate:[{path:'customer',model:'Customer',select:'_id firstName codicefiscale '},{path:'operator',model:'User',select:'_id firstName '}]})
		.populate({path:'debts',populate:[{path:'customer',model:'Customer',select:'_id firstName codicefiscale'},{path:'operator',model:'User',select:'_id firstName '}]})

		.exec((error,result)=>{
		if(error){ return res.status(400).json({ message: "Something went wrong",
		  error,});}
		if(result){
			let searchresultsobj ={};
	
		result.forEach((r)=>{searchresultsobj[r._id]={...r._doc}});
			return res.status(200).json({searches:searchresultsobj});
			}
	});

  
	}
	catch(error){ return res.status(400).json({
          message: "Something went wrong",
		  error,
        });}
};

