const Debts = require("../Models/debts");
const Customer = require("../Models/customer");





exports.newdebt =  (req, res) => {
	try{
        const{date,id,operator,debtvalue}=req.body.details;
    //    console.log(date,id,operator,debtvalue);
    // return res.status(200).json({succusse:"got it"})
const _debt=new Debts({date,customer:id,operator,amount:debtvalue});
_debt.save((error,result)=>{

    if(error){
    return res.status(400).json({
        message: "Something went wrong1",
        error,
      });
    }
    if(result){
        Customer.findByIdAndUpdate({_id:id},{$push:{debts:result._id}},{new:true}).exec((error,updatedcustomer)=>{
            if(error){
                return res.status(400).json({
                    message: "Something went wrong1",
                    error,
                  });
            }
            if(updatedcustomer){
                return res.status(200).json({updatedcustomer});

            }

        });

    }
    });

	}
	catch(error){ return res.status(400).json({
          message: "Something went wrong3",
		  error,
        });}
};
