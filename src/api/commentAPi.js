import axiosConfig from '../config/axiosConfig';

function getListCommentOfNews(newsId){
    return axiosConfig.get('/comment/get-list-comment-in-news',{
        params:{
            news_id:newsId
        }
    })
    .then(res => {
        return res.data
    })
    .catch((err) => {
        console.log(err);
    }); 
}

function addCommentForNews(accessToken, newsId, content){
    return axiosConfig.post('/comment/add-comment',{
        news_id: newsId,
        content: content
    },{
        headers: {"Authorization":`Bearer ${accessToken}`}
    }).then(res => res?.data)
    .catch((err) => {
        console.log(err);
    })
}
export {getListCommentOfNews, addCommentForNews};