import axiosConfig from '../config/axiosConfig';

function getHotNews() {
    return axiosConfig.get('/news/get-hot-news')
    .then(res => res.data)
    .catch((err) => {
        console.log(err);
    });
}
function getHotNewsByTopic() {
    return axiosConfig.get('/news/get-hot-news-by-topic')
    .then(res => res.data)
    .catch((err) => {
        console.log(err);
    });
}

export {getHotNews, getHotNewsByTopic};