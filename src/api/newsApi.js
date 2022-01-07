import axiosConfig from '../config/axiosConfig';

function getHotNews() {
    return axiosConfig.get('/news/get-hot-news')
    .then(res => res.data)
    .catch((err) => {
        console.log(err);
    });
}

export {getHotNews};