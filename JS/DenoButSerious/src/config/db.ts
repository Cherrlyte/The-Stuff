import mongoose from "mongoose";

export default async function contactDB():Promise<void>{
    try{
        const connection = await mongoose.connect(String(Deno.env.get("MONGO_URI")) || "")
        console.log(`Connected to Mongo @ ${connection.connection.host}`)
    }catch(err){
        console.log("Could not connect: ", err)
        Deno.exit(1)
    }
}