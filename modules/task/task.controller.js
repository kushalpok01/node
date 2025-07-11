const TASKS = require('../../utils/mock/task.constant');

const getAllDatas = (req, res)=>{
    // return res.send("<h1> App is running </h1>")
    return res.json({
        data: TASKS,
        message:'Data retrieved',
        status: 200
        // 500, 400, 401, 403, 200,201
    });
};

const getDataByStatus = (req,res)=>{
    return res.json({
        data:TASKS.filter(v=>v.status === req.params.status),
        message:'Data retrieved successfully',
        status: 200
    });
}
const getDataByCreatedDate =(req,res)=>
{
 const dateParam = req.params.createdAt; // already a string like "2001-04-01"
    const task = TASKS.filter(task => task.createdAt === dateParam);

    if (task.length > 0) {
        return res.json({
            Tasks: task,
            message: 'Users retrieved by creation date',
            status: 200
        });
    } else {
        return res.json({
            message: 'No user found associated with the date',
            status: 404
        });
    }
};



const getFutureData = (req, res) => {
    const today = new Date('2025-07-11'); // use current date or fixed for consistent testing

    const futureTasks = TASKS.filter(task => {
        const doc = new Date(task.createdAt); //date of creation
        const age = today.getFullYear() - doc.getFullYear(); //age of the task since creation
        const hasAnniv = today.getMonth() > doc.getMonth() || (today.getMonth() === doc.getMonth() && today.getDate() >= doc.getDate()); //if current month is greater than created month or equal to and todays date and doc date matches. 
        const actualAge = hasAnniv ? age : age - 1;
        return actualAge < 0; //the age of the task is negative if it is set in the future
    });

    if (futureTasks.length > 0) {
        return res.status(200).json({
            tasks: futureTasks,
            message: 'The tasks that are set in the future are retrieved successfully',
            status: 200
        });
    } else {
        return res.status(404).json({
            message: 'No future tasks found',
            status: 404
        });
    }
};








const getDataById = (req, res)=>{
    const task =TASKS.find(v=> v.id === +req.params.id);

    if(task){
    return res.json({
        data: TASKS.find(v=> v.id === +req.params.id),
        message:'Data retrieved',
        status: 200
    });
    }else{
        return res.json({
            message:'Data not found',
            status: 420
        })
    }
}

const createData = (req,res) => {
    return res.json(req.body);
}

const updateData = (req,res) => {
    return res.json({
        data: req.body,
        id: req.params.id,
        message:'You want me to update this'
    });
}

const deleteData = (req,res) => {
    return res.json({
        id: req.params.id,
        message:'You want me to delete this'
    });
}

module.exports={
    getAllDatas,
    getDataById,
    createData,
    updateData,
    deleteData,
    getDataByStatus,
  getDataByCreatedDate,
  getFutureData,
    // getDataByUserStatus,
    // getUsersByAge,
    // getDataByDate,
    // getDataBy,
}