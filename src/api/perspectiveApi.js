import axiosConfig from '../config/axiosConfig';

function getTop10Perspective() {
    return axiosConfig.get("/perspective/get-top10-perspectives")
    .then(res => res.data)
    .catch((err) => {
        console.log(err)
    })
}

export{getTop10Perspective}