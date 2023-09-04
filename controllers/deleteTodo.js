// Importing Model
const Todo = require('../models/Todo');

exports.deleteTodo = async(req, res) => {
    try{
        const {id} = req.params;
        const todo = await Todo.findByIdAndDelete({_id:id});

        res.status(200).json({
            success:true,
            data:todo,
            message:`Deleted Successfully`
        })
    }
    catch(err) {
        console.log(err)
        res.status(400).json({
            success:false,
            message:`Server Error`,
        })
    }
}