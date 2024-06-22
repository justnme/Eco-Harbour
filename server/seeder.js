import mongoose from 'mongoose'
import dotenv from 'dotenv'

import Users from './Models/userModel.js'
import Forum from './Models/forumModel.js'
import Fish from './Models/fishModel.js'
import MRA from './Models/MRAModel.js'
import Harbour from './Models/harbourModel.js'
import Reward from './Models/rewardModel.js';

import users from './data/User.js'
import fishes from './Data/Fish.js' 
import forum from './Data/Forum.js'
import mra from './Data/MRA.js'
import harbour from './Data/Harbours.js'
import reward from './Data/Reward.js';

import connectDB from './Config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
    try{
        await Users.deleteMany()
        await Fish.deleteMany()
        await Forum.deleteMany()
        await MRA.deleteMany()
        await Harbour.deleteMany()
        await Reward.deleteMany();

        await Users.insertMany(users);
        await Fish.insertMany(fishes);
        await Forum.insertMany(forum);
        await MRA.insertMany(mra);
        await Harbour.insertMany(harbour);
        await Reward.insertMany(reward);


        console.log('Data Inserted')
        process.exit()
    }
    catch(error) {
        console.log('Error in Insertion');
        console.log(error.message)
        process.exit()
    }
}

importData()
