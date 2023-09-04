// Importing Model
const Todo = require('../models/Todo');

// define Route handler

exports.getTodo = async(req, res) => {
    try {
        const todos = await Todo.find({});

        // response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is fetched"
        })
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    }
}

exports.getTodoById = async(req, res) => {
    try {
        // extract todo base on id

        // fetching id from request's parameter
        const id = req.params.id;
        // fetching the item of  that id from database
        const todo = await Todo.findById({_id : id});

        // data for the given id not found
        if(!todo) {
            res.status(404).json({
                success:false,
                message:`data for id ${id} not found`
            })
        }
        // data found
        res.status(200).json({
            success:true,
            data:todo,
            message:`data for id ${id} fetched successfully`
        })
    }
    catch(err) {
        console.log(err)
        res.status(400).json({
            success:false,
            error:err.message,
            message:`server error`,
        })
        


    }
}