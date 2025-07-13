const USERS = require('../../utils/mock/user.constant');

const getAllUsers = (req, res) => {
    // return res.send("<h1> App is running </h1>")
    return res.json({
        Users: USERS,
        message: 'Users retrieved',
        status: 200
        // 500, 400, 401, 403, 200,201
    });
};

const getUsersByStatus = (req, res) => {
    return res.json({
        Users: USERS.filter(v => v.status === req.params.status),
        message: 'Users retrieved successfully',
        status: 200
    });
}


const getUsersById = (req, res) => {
    const user = USERS.find(v => v.id === +req.params.id);

    if (user) {
        return res.json({
            Users: USERS.find(v => v.id === +req.params.id),
            message: 'Users retrieved',
            status: 200
        });
    } else {
        return res.json({
            message: 'no any user that has the id',
            status: 420
        })
    }
}
const getUsersByDob = (req, res) => {
    const dobParam = req.params.dob; // already a string like "2001-04-01"
    const user = USERS.filter(user => user.dob === dobParam);

    if (user.length > 0) {
        return res.json({
            Users: user,
            message: 'Users retrieved by DOB',
            status: 200
        });
    } else {
        return res.json({
            message: 'No user found associated with this DOB',
            status: 404
        });
    }
};


const getUsersUnder18 = (req, res) => {
    const today = new Date('2025-07-11'); // use current date or fixed for consistent testing

    const under18Users = USERS.filter(user => {
        const dob = new Date(user.dob);
        const age = today.getFullYear() - dob.getFullYear();
        const hasHadBirthday = today.getMonth() > dob.getMonth() ||
            (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());
        const actualAge = hasHadBirthday ? age : age - 1;
        return actualAge < 18;
    });

    if (under18Users.length > 0) {
        return res.status(200).json({
            users: under18Users,
            message: 'Users under age 18 retrieved successfully',
            status: 200
        });
    } else {
        return res.status(404).json({
            message: 'No users under age 18 found',
            status: 404
        });
    }
};

const getUsersByGender = (req, res) => {
    const genderParam = req.params.gender; // already a string like "2001-04-01"
    const user = USERS.filter(user => user.gender === genderParam);

    if (user.length > 0) {
        return res.json({
            Users: user,
            message: 'Users retrieved by gender',
            status: 200
        });
    } else {
        return res.json({
            message: 'No user found associated with this gender',
            status: 404
        });
    }
};





const createUsers = (req, res) => {
    return res.json(req.body);
}

const updateUsers = (req, res) => {
    return res.json({
        Users: req.body,
        id: req.params.id,
        message: 'You want me to update this'
    });
}

const deleteUsers = (req, res) => {
    return res.json({
        id: req.params.id,
        message: 'You want me to delete this'
    });
}

module.exports = {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    getUsersByStatus,
    getUsersByDob,
    getUsersUnder18,
    getUsersByGender,
    // getUsersByDate,
    // getUsersBy,
}