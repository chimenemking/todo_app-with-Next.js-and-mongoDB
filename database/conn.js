
import mongoose from "mongoose"

const connectMongo = async()=>{
    try{

      const {connection} = await mongoose.connect(process.env.MONGO_URL)

      if (connection.ready==1){
        console.log("Database Connected")
      }

    }catch(errors){
        return Promise.reject(errors)
    }
}

export default connectMongo;