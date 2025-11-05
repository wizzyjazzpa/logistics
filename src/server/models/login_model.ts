import mongoose,{Schema,Document} from "mongoose";


export interface Login extends Document{
     first_name:string,
     last_name:string,
     email:string,
     username:string,
     password:string
}

const LoginSchema = new Schema<Login>({
     first_name:{
          type:String,
        require:true,
     },
      last_name:{
          type:String,
        require:true,
     },
      email:{
          type:String,
        require:true,
     },
     username:{
        type:String,
        require:true,
        
        
     },
     password:{
         type:String,
         require:true,
         
     }
})

export const admin_login = mongoose.model<Login>("Login",LoginSchema);
