const mongoose = require ('mongoose');

const ScoreSchema = new mongoose.Schema({
    scoreA:{
        type:Number,
    },
    scoreB:{
        type:Number,
    },
    scoreC:{
        type:Number,
    },
    scoreD:{
        type:Number,
    }
});

const Score = mongoose.model('scores', ScoreSchema);

const ScoreModel = {
        createScore : function( question ){
            return Score.create( question );
        },
        updateScore : function( question, valueToUpdate ){
            return Score.findOneAndUpdate( {question}, {$set : valueToUpdate }, {new : true} )
        }
    };

module.exports = {ScoreSchema, ScoreModel};