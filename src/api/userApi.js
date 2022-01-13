import axiosConfig from '../config/axiosConfig';

function getUserInformation(access_token){
    return axiosConfig.get('/users/get-user-info', {
        headers: {"Authorization":`Bearer ${access_token}`}
    }).then(res => res.data)
    .catch((err) => {
        console.log(err);
    })
}

function updateNickName(newNickName, access_token){
    return axiosConfig.post('/users/update-nickname', {
        nickName: newNickName
    },{
        headers: {"Authorization":`Bearer ${access_token}`}
    }).then(res => res.data)
    .catch((err) => {
        console.log(err);
    })
}

function updateEmail(newEmail, access_token){
    return axiosConfig.post('/users/update-email', {
        newEmail: newEmail
    },{
        headers: {"Authorization":`Bearer ${access_token}`}
    }).then(res => res.data)
    .catch((err) => {
        console.log(err);
    })
}

function updateAddress(newAddress, access_token){
    return axiosConfig.post('/users/update-address', {
        newAddress: newAddress
    },{
        headers: {"Authorization":`Bearer ${access_token}`}
    }).then(res => res.data)
    .catch((err) => {
        console.log(err);
    })
}

export {getUserInformation, updateNickName, updateEmail, updateAddress};