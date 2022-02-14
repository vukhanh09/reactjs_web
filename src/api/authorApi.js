import axiosConfig from '../config/axiosConfig';

function getTop5Author() {
    return axiosConfig.get('/author/get-top5-author-by-first-name')
    .then(res => res.data)
    .catch((err) => {
        console.log(err);
    })
}

export{getTop5Author}