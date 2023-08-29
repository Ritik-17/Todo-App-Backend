// Importing Model
const Todo = require('../models/Todo');

// define Route handler

exports.createTodo = async(req, res) => {
    try {

        // extracting teh title and description from req body
        const {title, description} = req.body;
        // Creating a new Todo object and inserting in DB
        const response = await Todo.create({title, description});
        // sending a json response with success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry created successfully'
            }
        );
    }
    catch(err) {
        console.error(err)
        console.log(err)
        res.status(500).json({
            success:false,
            data:'Internal Error',
            message:err.message,
        })
    }
}