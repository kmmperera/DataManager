const mongoose = require('mongoose');
const moneytransferschema =new mongoose.Schema({
	customer: 
        {type: mongoose.Schema.ObjectId, ref: 'Customer', required: true,}
    ,
    operator: 
        {type: mongoose.Schema.ObjectId, ref: 'User', required: true,}
    ,
    date: {
        type: Date,
        required: true,
        trim: true,
    },
    
    amount: {
      type: Number,
      required: true,
      trim: true,
      
    },
	bankaccount:{
      type: String,
      required: true,
      trim: true,
    },
    
   
	
	
},{ timestamps: true });

module.exports = mongoose.model('Moneytransfer', moneytransferschema);
