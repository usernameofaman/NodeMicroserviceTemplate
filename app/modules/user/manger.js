const User = require('../../models/user')
// const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

export default class Manger {
    loginUser = async (requestData) => {
        const { name, password } = requestData;
        const user = await User.findOne({ name }).lean();
        const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'


        if (!user) {
            return { status: 'error', error: 'Invalid email' }
        }

        if (user.password === password) {

            const token = jwt.sign(
                {
                    id: user._id,
                    name: user.name
                },
                JWT_SECRET
            )
            return { status: 'ok', data: token }
        }
        return { status: 'error', error: 'Invalid username/password' };
    }

    registerUser = async (requestData) => {
        const { name, selectedBoardId, selectedMediumId,selectedStandardId, password } = requestData;
        try {
            const response = await User.create({
                name, selectedBoardId, selectedMediumId,selectedStandardId, password
            })
            console.log('User created successfully: ', response)
        } catch (error) {
            if (error.code === 11000) {
                // duplicate key
                return { status: 'error', error: 'Email already in use' }
            }
            throw error
        }

        return { status: 'success' };
    }

    getUser = async (requestData) => {
        const { email } = requestData;
        try {
            const user = await User.findOne({ email }).lean();
            if(user && user.email)
                return user;
        } catch (error) {
            if (error.code === 11000) {
                // duplicate key
                return { status: 'error', error: 'Unable to get' }
            }
            throw error
        }
    }
}
