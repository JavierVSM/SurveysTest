const mongoose = require ('mongoose');

const {ScoreSchema, ScoreModel} = require( './scoresModel' );

const SurveySchema = new mongoose.Schema({
    question:{
        type:String,
        required: true,
        minlength:8
    },
    optionA:{
        type:String,
        required: true,
        minlength:3
    },
    optionB:{
        type:String,
        required: true,
        minlength:3
    },
    optionC:{
        type:String,
        required: true,
        minlength:3
    },
    optionD:{
        type:String,
        required: true,
        minlength:3
    },
    author:{
        type:String,
        required: true,
    },
    username:{
        type:String,
        required: true,
    },
    date:{
        type:Date
    },
    scores : [ ScoreSchema ]
});

const Survey = mongoose.model('surveys', SurveySchema);

const SurveyModel = {
    createSurvey : function( question ){
        return Survey.create( question );
    },
    getSurveys : function(){
        return Survey.find();
    },
    getSurveyById : function( question ){
        return Survey.findOne({ question });
    },
    deleteSurveyById : function( question ){
        return Survey.remove( {question} );
    },
    updateSurvey : function( question, valueToUpdate ){
        return User.findOneAndUpdate( {question}, {$set : valueToUpdate }, {new : true} )
    }
};

module.exports = {SurveyModel};