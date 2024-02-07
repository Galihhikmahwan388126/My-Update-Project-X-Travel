import Hotel from "../models/User.js";

export const updateUser = async(req,res,next)=>{
   try {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,
        {$set:req.body},
        {new: true})
    res.status(200).json(updatedHotel)

 }catch (err){
        next(err);
    }
}

export const deleteUser = async(req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id);
       res.status(200).json("Hotel has been deleted.")
    }catch (err){

        next(err);
    }
}

export const getUser = async(req,res)=>{
    try {
        const user = await Hotel.findById(req.params.id);
        res.status(200).json(user)
     }catch (err){
        next(err);
    }
}

export const getUsers = async(req,res,next)=>{
    try {
        const users = await User.find();
        res.status(200).json(users)

     }catch (err){
        next(err);
    }
}
