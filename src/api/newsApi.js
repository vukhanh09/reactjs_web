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

function getNewsById(id){
    return axiosConfig.get('/news/get-news-by-id',{
        params: {
            news_id : id
        }
    })
    .then(res => {
        console.log("res", res.data);
        return res.data
    })
    .catch((err) => {
        console.log(err);
    }); 
}
function get3NewestNews() {
    return axiosConfig.get('/news/get-3-newest-news')
    .then(res => res.data)
    .catch((err) => {
        console.log(err);
    });
}
function getTop3NewsTopic(topic){
    return axiosConfig.get('/news/get-top3-news-topic',{
        params: {
            topic: topic
        }
    })
    .then(res => {
        console.log("res", res.data);
        return res.data
    })
    .catch((err) => {
        console.log(err);
    }); 
}

export {getHotNews, getHotNewsByTopic, getNewsById, get3NewestNews};