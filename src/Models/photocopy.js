const mongoose = require('mongoose');
const photocopyschema =new mongoose.Schema({
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
	
    
   
	
	
},{ timestamps: true });

module.exports = mongoose.model('Photocopy', photocopyschema);
