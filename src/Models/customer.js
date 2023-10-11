const mongoose = require('mongoose');
const customerschema =new mongoose.Schema({
	firstName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    
    teln: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
	 codicefiscale: {
      type: String,
      required: true,
    },
	debts:[{
    type: mongoose.Schema.ObjectId, ref: 'Debt',
  }],
  moneytransfer:[{
    type: mongoose.Schema.ObjectId, ref: 'Moneytransfer',
  }],
    
   
	
	
},{ timestamps: true });

module.exports = mongoose.model('Customer', customerschema);
