import axiosConfig from '../config/axiosConfig';

function getUserInformation(access_token){
    return axiosConfig.get('/users/get-user-info', {
        headers: {"Authorization":`Bearer ${access_token}`}
    }).then(res => res.data)
    .catch((err) => {
        console.log(err);
    })
}

export {getUserInformation};