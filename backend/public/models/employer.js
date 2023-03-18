
import mongoose from 'mongoose';


const employerSchema = new mongoose.Schema({

    username: {
        type: String,
        unique: true
    },

    level: {
        type: String
    },

    email: {
        type: String
    },
    fname: {
        type: String
    },
    lname: {
        type: String
    },

    gender: {
        type: String
    },

    dob: {
        type: String
    },
    address: {
        type: String
    },
    pincode: {
        type: Number
    },
    phone: {
        type: Number
    },

    password: {
        type: String
    }
    ,
    confirmPassword: {
        type: String
    },
    pay: {
        type: String
    }
})

const Employer = new mongoose.model("Employer", employerSchema);


export default Employer;