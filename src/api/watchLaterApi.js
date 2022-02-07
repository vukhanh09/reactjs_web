import axiosConfig from '../config/axiosConfig';

function addNewsToWatchLater(accessToken, newsId, topic) {
    return axiosConfig.post('/watch-later/add-news', {
        news_id: newsId,
        topic: topic
    },{
        headers: {"Authorization":`Bearer ${accessToken}`}
    }).then(res => res.data)
    .catch((err) => {
        console.log(err);
    });
}

function checkExistNewsInListWatchLater(accessToken, newsId){
    return axiosConfig.post('/watch-later/check-exist', {
        news_id: newsId
    },{
        headers: {"Authorization":`Bearer ${accessToken}`}
    }).then(res => res.data)
    .catch((err) => {
        console.log(err);
    });
}

function getListWatchLaterNews(accessToken){
    return axiosConfig.get('/watch-later/get-list',{
        headers: {"Authorization":`Bearer ${accessToken}`}
    }).then(res => res.data)
    .catch((err) => {
        console.log(err);
    });
}

function getListWatchLaterByTopic(accessToken, topic){
    return axiosConfig.get(`/watch-later/get-list-by-topic?topic=${topic}`,{
        headers: {"Authorization":`Bearer ${accessToken}`}
    }).then(res => res.data)
    .catch((err) => {
        console.log(err);
    }) 
}
export {addNewsToWatchLater, checkExistNewsInListWatchLater, getListWatchLaterNews, getListWatchLaterByTopic};