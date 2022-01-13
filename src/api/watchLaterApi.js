import axiosConfig from '../config/axiosConfig';

function addNewsToWatchLater(access_token, newsId, topic) {
    return axiosConfig.post('/api/watch-later/add-news', {
        news_id: newsId,
        topic: topic
    },{
        headers: {"Authorization":`Bearer ${access_token}`}
    }).then(res => res.data)
    .catch((err) => {
        console.log(err);
    });
}

export {addNewsToWatchLater};