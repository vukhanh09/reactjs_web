import axiosConfig from '../config/axiosConfig';

function getUserInformation(accessToken){
    return axiosConfig.get('/users/get-user-info', {
        headers: {"Authorization":`Bearer ${accessToken}`}
    }).then(res => res.data)
    .catch((err) => {
        console.log(err);
    })
}

function updateNickName(newNickName, accessToken){
    return axiosConfig.post('/users/update-nickname', {
        nickName: newNickName
    },{
        headers: {"Authorization":`Bearer ${accessToken}`}
    }).then(res => res.data)
    .catch((err) => {
        console.log(err);
    })
}

function updateEmail(newEmail, accessToken){
    return axiosConfig.post('/users/update-email', {
        newEmail: newEmail
    },{
        headers: {"Authorization":`Bearer ${accessToken}`}
    }).then(res => res.data)
    .catch((err) => {
        console.log(err);
    })
}

function updateAddress(newAddress, accessToken){
    return axiosConfig.post('/users/update-address', {
        newAddress: newAddress
    },{
        headers: {"Authorization":`Bearer ${accessToken}`}
    }).then(res => res.data)
    .catch((err) => {
        console.log(err);
    })
}

export {getUserInformation, updateNickName, updateEmail, updateAddress};