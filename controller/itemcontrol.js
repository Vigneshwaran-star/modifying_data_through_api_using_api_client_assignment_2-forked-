const menuItem =require("../model/menuItemModel.js");
const create = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        if (!name || !description || !price) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const item = new menuItem({ name, description, price });
        await item.save();
        res.json(item);
    } catch (error) {
        console.error("Error creating item:", error);  
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const   fetch= async(req,res)=>{
    
        const item = await menuItem.find({});
        res.json(item);
   
}
const   Update= async(req,res)=>{
    try{
        const id= req.params.id;
        const item = await menuItem.findOne({_id:id})
        if (!item){
            return res.status(400).json({message:"Item does not exists"})

        }
        const UpdateItem = await menuItem.findByIdAndUpdate(id ,req.body, {new:true})
        return res.status(201).json(UpdateItem);
    }catch(error){
        return res.status(500).json({message:"Internal Server Error"})
    }
}
const Delete = async(req,res)=>{
    try{
    const id =req.params.id;
    const item =await menuItem.findOne({_id:id})
    if(!item){
    return res.status(400).json({message:"Item not found"});
    }
    await menuItem.findByIdAndDelete(id);
    return res.status(201).json({message:"Item deleted successfully"})
}catch(error){
    return res.status(500).json({message:"Internal Server Error"})
}}
module.exports={Update,Delete,fetch,create}