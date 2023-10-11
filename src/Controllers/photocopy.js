const Photocopy = require("../Models/photocopy");


exports.addphotocopy = (req, res) => {
	try{
	let {photocopy: photocopyreq}=req.body;
    const { date ,operator,amount   } = photocopyreq;
    
    const _photocopy = new Photocopy({
     
        date ,
        operator,
        amount
     
    });

    _photocopy.save((error, result) => {
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
		  error,
        });
      }

      if (result) {
        
       
		let photocopyobj={};
		photocopyobj[result._id]={...result._doc};
        return res.status(200).json({
         savedphotocopy:photocopyobj,
        });
      }
  
    });

  
	}
	catch(error){ return res.status(400).json({
          message: "Something went wrong",
		  error,
        });}
};

exports.searchphotocopy = (req, res) => {
	try{
	let {details: searchphotocopyreq}=req.body;
    const { todate ,operator,fromdate   } = searchphotocopyreq;
    
    
    Photocopy.find({ 
      date: {
          $gte: new Date(fromdate), 
          $lt: new Date(todate)
      }
       }).exec((error,result)=>{
        if(error){
			
          res.status(400).json({error:"could not find photocopies"});
        }
        if(result){
          let searchedphotocopyobj={};
          result.forEach((c)=>{searchedphotocopyobj[c._id]={...c._doc}});
          res.status(200).json({searchedphotocopy:searchedphotocopyobj});
        }


       });

   
  
	}
	catch(error){ return res.status(400).json({
          message: "Something went wrong",
		  error,
        });}
};
