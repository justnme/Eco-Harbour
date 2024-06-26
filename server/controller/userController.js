import aysncHandler from '../middleware/asyncHandler.js'
import asyncHandler from '../middleware/asyncHandler.js'
import Users from '../Models/userModel.js'
import generateToken from '../utils/generateTokens.js'

const getUsers = asyncHandler(async (req, res) => {
    res.send("Get All Users")
})

const registerUser = asyncHandler(async (req, res) => {
    const { user_name, password, contact_no } = req.body;

    const userExist = await Users.findOne({ contact_no })

    if(userExist){
        res.status(400);
        throw new Error("Mobile No. already Exist")
    }
    
    const split_name = user_name.split(' ')
    const first_name = split_name[0]

    const user = await Users.create({
        first_name,
        user_name,  
        password, 
        contact_no
    });

    if(user){
        generateToken(res, user._id)

        res.status(201)
        res.json({
            _id: user._id, 
            first_name: user.first_name, 
            contact_no: user.contact_no,
        })
    }
    else{
        res.status(400)
        throw new Error ("Invalid User Data")
    }
})

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true, 
        expires: new Date(0)
    });

    res.status(200)
    res.json({
        message: "Logout Successfull"
    })
})

const authUser = asyncHandler (async (req, res) => {
    const { user_name, password } = req.body

    const user = await Users.findOne({user_name})

    if(user && (await user.matchPassword(password))) {
        generateToken(res, user._id)
        
        res.json({
            _id: user._id,
            first_name : user.first_name, 
            user_name: user.user_name,
            score: user.score,
        })
    } else {
        res.status(401)
        throw new Error('Invalid Email or Password')
    }
})

const reduceScore = asyncHandler(async (req, res) => {
    const { user_id, points } = req.body
    const user = await Users.findById(user_id)

    if(user){
        user.score = user.score - points
        const updatedUser = await user.save()

        if(updatedUser){
            res.status(200)
            res.json("Score Updated")
        }
        else{
            res.status(400)
            res.json("Opeartion Failed")
        }
    }
    else{
        res.status(401).json("No User Found")
    }
})

const authAdmin = asyncHandler(async (req, res) => {
    const { user_name, password } = req.body

    const user = await Users.findOne({user_name})

    if(user && (await user.matchPassword(password))) {
        generateToken(res, user._id);
        
        res.json({
            _id: user._id,
            first_name : user.first_name, 
            user_name: user.user_name,
            score: user.score, 
            isAdmin: user.isAdmin
        })
    } else {
        res.status(401)
        throw new Error('Invalid Email or Password')
    }
})

const getAdminProfile = asyncHandler(async (req, res) => {
    const admin = await Users.findById(req.user._id)

    if(admin) {
        res.status(200)
        res.json({
            _id: admin._id, 
            first_name: admin.first_name, 
            user_name: admin.user_name,
            email: admin.email,
            password: admin.password, 
            status: admin.status, 
            contact_no: admin.contact_no, 
        })
    }
    else {
        res.status(401)
        res.json("No Admin Found")
    }
})

const countUser = asyncHandler(async (req, res) => {
    const users = await Users.find({})

    if(users){
        const data = users.filter((user) =>  user.isAdmin === false)

        res.status(200)
        res.json(data)
    }
    else{
        res.status(401)
        res.json("No Users Found")
    }
})

const approveSail = aysncHandler(async (req, res) => {
    const user = await Users.findById(req.params.id)

    if(user){
        user.score = user.score + 20
        const updatedUser = user.save()

        if(updatedUser){
            res.status(200)
            res.json("Score Updated Successfully")
        }
        else{
            res.status(401)
            res.json("Score Updation Failed")
        }
    }
    else{
        res.status(401)
        res.json("No User Found")
    }
})

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await Users.findById( req.user._id )

    if(user){
        res.status(200)
        res.json({
            _id: user._id, 
            first_name: user.first_name, 
            user_name: user.user_name,
            email: user.email,
            password: user.password, 
            status: user.status, 
            contact_no: user.contact_no, 
            score: user.score
        })  
    }
    else{
        res.status(404)
        throw new Error("No User Found")
    }
})

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await Users.findById(req.user._id)

    if(user) {
        user.first_name = req.body.first_name || user.first_name
        user.user_name = req.body.user_name || user.user_name
        user.email = req.body.email || user.email
        user.contact_no = req.body.contact_no || user.contact_no

        if(req.body.password){
            user.password = req.body.password
        }

        const updateUser = await user.save()

        res.status(200)
        res.json({
            _id: user._id, 
            first_name: user.first_name, 
            user_name: user.user_name,
            email: user.email,
            password: user.password, 
            status: user.status, 
            contact_no: user.contact_no, 
            score: user.score
        })
    }
    else{
        res.status(400)
        throw new Error("No User Found")
    }   
})

const suspendUser = asyncHandler(async (req, res) => {
    const user = await Users.findById(req.params.id)

    if(user){
        user.status = "Suspended"
        const updatedUser = user.save()

        if(updatedUser){
            res.status(200)
            res.json("User Suspended")
        }
        else{
            res.status(401)
            res.json("Operation failed")
        }
    }
    else{
        res.status(401)
        res.json("No User Found")
    }
})

const getUserById = asyncHandler(async (req, res) => {
    const user = await Users.findById(req.params.id)

    if(user){
        res.status(200)
        res.json(user)
    }
    else{
        res.status(401)
        res.json("No User Found")
    }
})

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, reduceScore, authAdmin, countUser, approveSail, getAdminProfile, getUsers, getUserById, suspendUser }