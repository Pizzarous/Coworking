// const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        }, 
        password: {
            type: String,
            required: true,
        },
        acceptsTerms: {
            type: Boolean,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

// Encripta a password sempre que ela é guardada
userSchema.pre('save', async function (next){
    if(!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt);
})

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model('User', userSchema)

// module.exports = User;

export default User;