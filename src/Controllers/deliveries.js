const Delivery = require("../Models/deliveries");




exports.newdelivery = (req, res) => {
	try{
	let {delivery: deliveryreq}=req.body;
    const { name,price,customer,status,paidDate,operator  } = deliveryreq;
    
    const _delivery = new Delivery({
     
        name,
        price,
        customer,
        status,
        paidDate,
        operator
     
    });

    _delivery.save((error, result) => {
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
		  error,
        });
      }

      if (result) {
        
       
	
        return res.status(200).json({
         saveddelivery:result,
        });
      }
  
    });

  
	}
	catch(error){ return res.status(400).json({
          message: "Something went wrong",
		  error,
        });}
};

exports.getongoingdelivery = (req, res) => {
	try{
    Delivery.find({onGoing:"yes"}).exec((error,result)=>{

      if(error){
        return res.status(400).json({
          message: "Something went wrong",
		  error,
        });

      }
      if(result){
        let ongoingdeliveryobj={};
        //console.log(result);
        result.forEach((r)=>{
          ongoingdeliveryobj[r._id]={...r._doc};

        });
        
            return res.status(200).json({
              savedongoingdelivery:ongoingdeliveryobj,
            });

      }
    });
  
  }

	catch(error){ return res.status(400).json({
          message: "Something went wrong",
		  error,
        });
      }
};

exports.updategetongoingdelivery = (req, res) => {
	try{
   // console.log(req.body.details);
    const {date,selectedobj}=req.body.details;
    Delivery.findOne({_id:selectedobj.id}).exec((error,result)=>{

      if(error){
        return res.status(400).json({
          message: "Something went wrong 1",
		  error,
        });

      }
      if(result){
       // console.log(result);
        let updatedeleiverobj={_id:selectedobj.id,recievedDate:result.recievedDate,deliveredDate:result.deliveredDate,onGoing:result.onGoing};
      let shouldurecieve=  (result.recievedDate && selectedobj.received) || (result.recievedDate ==null  && selectedobj.received ==false );
      let shouldudelivere=  (result.deliveredDate && selectedobj.delievered) || (result.deliveredDate ==null  && selectedobj.delievered ==false );

       if(!shouldurecieve){
        updatedeleiverobj={...updatedeleiverobj,recievedDate:date,onGoing:result.onGoing};
       }
       if(!shouldudelivere){
        updatedeleiverobj={...updatedeleiverobj,deliveredDate:date,onGoing:"no"};
       }
       Delivery.findOneAndUpdate({_id:updatedeleiverobj._id},{recievedDate:updatedeleiverobj.recievedDate,deliveredDate:updatedeleiverobj.deliveredDate,onGoing:updatedeleiverobj.onGoing},{new:true})
       .exec((error,updateddelivery)=>{
        if(error){
          return res.status(400).json({
            message: "Something went wrong 2",
        error,
          });
        }
        if(updateddelivery){
         let uobj={};
          uobj[updateddelivery._id]={...updateddelivery._doc};
          return res.status(200).json({updatedongoingdelivery:uobj });
          

        }
        

       });

      }
    });
  
	}
	catch(error){ return res.status(400).json({
          message: "Something went wrong 3",
		  error,
        });
      }
};


exports.getcompleteddeliveries = (req, res) => {
	try{
    Delivery.find({onGoing:"no"}).exec((error,result)=>{

      if(error){
        return res.status(400).json({
          message: "Something went wrong",
		  error,
        });

      }
      if(result){
        let completeddeliveryobj={};
        //console.log(result);
        result.forEach((r)=>{
          completeddeliveryobj[r._id]={...r._doc};

        });
        
            return res.status(200).json({
              completeddeliveries:completeddeliveryobj,
            });

      }
    });
  
  }

	catch(error){ return res.status(400).json({
          message: "Something went wrong",
		  error,
        });
      }
};