import axiosConfig from '../config/axiosConfig';

function loginUser(username, password){
    return axiosConfig.post('/auth/signin',{
        username: username,
        password: password,
    }).then(res => {
        return res.data
    }
    ).catch((err) => {
        console.log(err);
    })
}

function registration(userRegister){
    return axiosConfig.post('/auth/signup',{
        username: userRegister.username,
        email: userRegister.email,
        password: userRegister.password,
        address: userRegister.address,
        date_of_birth: userRegister.dateOfBirth
    }).then(res => {
        return res.data
    }
    ).catch((err) => {
        console.log(err);
    })
}

export {loginUser, registration};
