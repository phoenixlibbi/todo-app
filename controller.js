const Todo = require('./model')

exports.getTodos=async (req,res)=>{
    console.log('get all todo called!')
    const todo =await Todo.find();
    res.status(200).json({
        status: "success",
        results: todo.length,
        data: {
            todo,
        }
    })
}

exports.getTodo=async (req,res)=>{
    console.log('get todo called!')
    const todo =await Todo.findById(req.params.id);
    res.status(200).json({
        status: "success",
        data: {
            todo,
        }
    })
}

exports.createTodo=async (req,res)=>{
    console.log('create todo called!')
    const todo =await Todo.create(req.body);
    res.status(201).json({
        status: "success",
    })
}
exports.updateTodo=async (req,res)=>{
    console.log('update todo called!')
    const todo = await Todo.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        {
          new: true,
          runValidators: true,
        }
      );
    res.status(200).json({
        status: "success",
        data: {
            todo,
        }
    })
}

exports.deleteTodo=async (req,res)=>{
    console.log('delete todo called!')
    const todo =await Todo.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: "success",
        data: null
    })
}

exports.checked=async (req,res)=>{
    console.log('checked todo called!')
    const todo =await Todo.findById(req.params.id);
    todo.completed=!todo.completed;
    todo.save();
    res.status(200).json({
        status: "success",
        data: {
            todo,
        }
    })
}