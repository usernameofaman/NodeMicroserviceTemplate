const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, unique: true },
		selectedMediumId : {type : String , default :""},
		selectedStandardId : {type : String , default :""},
		selectedBoardId : {type : String , default :""},
		password: { type: String, required: true, unique: true },
	},
	{ collection: 'students' }
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model
