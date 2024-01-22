import { RegularUser, userModel } from "../modals/userModal";

export const isUserPresent = async(email:string) =>{
    const data = await RegularUser.find({ email: email });
    console.log(data,'data in middleware')
    if(data.length>0){
        return data
    }
    return null
}