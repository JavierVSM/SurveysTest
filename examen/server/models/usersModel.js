const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        minlength:3,
        maxlength: 20
    },
    lastName:{
        type:String,
        required: true,
        minlength:3,
        maxlength: 20
    },
    userName:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true,
    }
});

const User = mongoose.model ('users', UserSchema);

const UserModel={
    createUser: function(newUser){
        return User.create(newUser);
    },
    getUsers:function(){
        return User.find();
    },
    getUserbyUserId: function (userName){
        return User.findOne({userName})
    }
};

module.exports = {UserModel};