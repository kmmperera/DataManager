const mongoose = require('mongoose');
const deliveriesschema =new mongoose.Schema({
	customer: 
        {type: mongoose.Schema.ObjectId, ref: 'Customer', required: true,}
    ,
    operator: 
        {type: mongoose.Schema.ObjectId, ref: 'User', required: true,}
    ,
    
    
    price: {
      type: Number,
      required: true,
      trim: true,
      
    },
	name:{
      type: String,
      required: true,
      trim: true,
    },
    status:{
        type:String,
        enum:["paid","received","delivered"],
        required:true,
        default:"paid"

    },

    paidDate:{
        type: Date,
        required: true,
        trim: true,
    },
    recievedDate:{
        type: Date,
        
        trim: true,
    },
    deliveredDate:{
        type: Date,
       
        trim: true,
    },
   onGoing:{
       type:String,
       enum:["yes","no"],
       required:true,
       default:"yes"
   }
	
	
},{ timestamps: true });

module.exports = mongoose.model('Delivery', deliveriesschema);
