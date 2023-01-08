const noteModel = require("../models/note");

const createNote = async (req, res)=>{
    const {title, description}=req.body;
    const newNote = new noteModel({
        title:title,
        description: description,
        userId: req.userId
    });

    try{
        console.log("try line 12")
        
        await newNote.save();
        console.log("try line 1y77newNote");
        res.status(201).json(newNote);
        console.log("try line 12");
    } catch (error){
        console.log(error)
        res.status(501).json({message: "Something went Wrong notecontroller 17"});
    }

}
const updateNote = async (req, res)=>{

    const id = req.params.id;
    const {title, description}=req.body;
    const newNote ={
        title:title,
        description: description,
        userId: req.userId
    }
    try{
        await noteModel.findByIdAndUpdate(id, newNote,{new: true});

    }catch{ (error)
        console.log(error);
        res.status(501).json({message: "Something went Wrong notecontroller 39"});

    }


}
const deleteNote =(req, res)=>{
    

}
const getNotes  =async (req, res)=>{
    try{
        const notes = await noteModel.find({userId: req.userId});
        res.status(200).json(notes);
    }
    catch (error){
        console.log(error);
        res.status(501).json({message: "Something went Wrong notecontroller 34"});
    }

}

module.exports ={
createNote,
updateNote,
deleteNote,
getNotes 
}