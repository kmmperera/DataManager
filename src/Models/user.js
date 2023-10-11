const mongoose = require('mongoose');
const userschema =new mongoose.Schema({
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
    
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
	 passwords: {
      type: String,
      required: true,
    },
    
    role: {
      type: String,
      enum: ["superadmin", "operator"],
      default: "operator",
    },
    contactNumber: { type: String },
    pofilePicture: { type: String },
    
	codiceFiscale:{ type: String}

	
	
},{ timestamps: true });

module.exports = mongoose.model('User', userschema);
