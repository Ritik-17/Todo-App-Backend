// Importing Model
const Todo = require('../models/Todo');

exports.updateTodo = async(req, res) => {

    try{
        const {id} = req.params;
        const {title, description} = req.body;
    
        const todo = await Todo.findByIdAndUpdate(
            {_id: id},
            {title, description, updatedAt: Date.now()}
        )
    
        res.status(200).json({
            success:true,
            data:todo,
            message:`Updated Successfully`,
        })
    }
    catch(err){
        console.log(err)
        res.status(400).json({
            success:false,
            message:`Server Error`,
        })
    }
}