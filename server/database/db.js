import mongoose from "mongoose";


const DBConnection = async () => {
    const MONODB_URI=`mongodb://Yash:Yash14092002@ac-tnnjogl-shard-00-00.unaavlp.mongodb.net:27017,ac-tnnjogl-shard-00-01.unaavlp.mongodb.net:27017,ac-tnnjogl-shard-00-02.unaavlp.mongodb.net:27017/?ssl=true&replicaSet=atlas-qlkhgo-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
         await mongoose.connect(MONODB_URI,{useNewURLParser:true});
        console.log("Database Connected Successfully");
    } catch (error) {
        console.error('Error while connecting with the database',error.message);

        
    }
}

export default DBConnection;