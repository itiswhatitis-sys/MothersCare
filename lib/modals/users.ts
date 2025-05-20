import { Schema ,model , models } from "mongoose"; 

const UserSchema = new Schema (

    {
        parentsname: {type:"string" , required:"true"} ,
        studentname: {type:"string" , required:"true"} ,
        phone:{ type:"number" , required:"true"},
        std:{type:"string" , required:"true"}
    },
    {
        timestamps: true ,
    }
)
const User = models.User || model("User", UserSchema) ;
export default User ;