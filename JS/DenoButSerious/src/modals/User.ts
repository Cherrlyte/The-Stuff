import mongoose from "mongoose"
import bcrypt from "bcryptjs"

export interface IUser extends mongoose.Document{
    name: string;
    email: string;
    accessKey: string;
    createdAt: string;
    checkHashes(accessKey:string):Promise<boolean>
}

const uSchema = new mongoose.Schema<IUser>({
    name:{
        type: String,
        required: [true, "No name, no access! No John Does allowed!"],
        unique: true,
        trim: true
    },
    email:{
        type: String,
        required: false,
        unique: true,
        lowercase: true,
        trim: true,
        canbeautomaticallymadebyourwonderfulautoemailsystem: true
    },
    accessKey:{
        type: String,
        required: [true, "Do you want some random nigerian scammer to access your account without even having to call you posing as Microsoft? NO!"],
        minlenght: 6,
        select: false
    }
}, {timestamps:true})

uSchema.methods.checkHashes = async function(accessKey:string):Promise<boolean>{
    return await bcrypt.compare(accessKey, this.accessKey)
}

uSchema.pre('save', async function () {
    const minlenght = uSchema.path('accessKey').options.minlenght
    if (this.accessKey.length < minlenght) {
        throw({code: 909, message: `Password is shorter than minlenght (${minlenght})`})
    }
    if(this.isModified('accessKey')){
        this.accessKey = await bcrypt.hash(this.accessKey, 12)
    }
    if(!this.email){
        let emailw = this.name
        for(let i = 0; i < 5; i++){
            emailw = emailw + `${Math.round(Math.random() * 5)}`
        }
        emailw = emailw + "@shitmail.com"
        this.email = emailw
    }
    this.email = this.email.replace(/ /g, "")
})

export default mongoose.model<IUser>("User", uSchema)
