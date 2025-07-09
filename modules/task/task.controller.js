const DATA = require('../../utils/mock/task.constant');

const getAllDatas = (req, res)=>{
    // return res.send("<h1> App is running </h1>")
    return res.json({
        data: DATA,
        message:'Data retrieved',
        status: 200
        // 500, 400, 401, 403, 200,201
    });
};

const getDataByStatus = (req,res)=>{
    return res.json({
        data:DATA.filter(v=>v.status === req.params.status),
        message:'Data retrieved successfully',
        status: 200
    });
}

const getDataById = (req, res)=>{
    const task =DATA.find(v=> v.id === +req.params.id);

    if(task){
    return res.json({
        data: DATA.find(v=> v.id === +req.params.id),
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
    getDataByStatus
}