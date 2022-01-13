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

export {loginUser};
