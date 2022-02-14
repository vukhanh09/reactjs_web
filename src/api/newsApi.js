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
function get3NewestNewsOfTopic(topic) {
    return axiosConfig.get('/news/get-3-newest-news-topic',{
        params:{
            topic: topic
        }
    })
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
        return res.data
    })
    .catch((err) => {
        console.log(err);
    }); 
}
function getTop10News(){
    return axiosConfig.get('/news/get-top10-hot-news')
    .then(res => {
        return res.data
    }).catch((err) => {
        console.log(err);
    })
}

function getTop4Tourism(){
    return axiosConfig.get('/news/get-top4-tourism')
    .then(res => res.data)
    .catch((err) => {
        console.log(err);
    })
}

function getHotNewsOfEachTopic(topic){
    return axiosConfig.get('/news/get-hot-news-each-topic', {
        params: {
            topic: topic
        }
    }).then(res => res.data)
    .catch((err) => {
        console.log(err);
    })
}


function getTop4NewestNewsOfEachTopic(topic){
    return axiosConfig.get('/news/get-top4-newest-news-each-topic', {
        params: {
            topic: topic
        }
    }).then(res => res.data)
}

const submitFile = ()=>{
    var formFile = new FormData();
    var imagefile = document.getElementById('formFile');
    formFile.append("formFile", imagefile.files[0]);
    return axiosConfig.post('/uploadFile', formFile, {
        headers: {
        'Content-Type': 'multipart/form-data'
        }
    })
    .then(res=>{
        return res.data.data
    })

    .catch((err) => {
        console.log(err);
    })
}

export {getHotNews, 
        getHotNewsByTopic, 
        getNewsById, 
        get3NewestNews, 
        getTop3NewsTopic, 
        get3NewestNewsOfTopic, 
        getTop10News, 
        getTop4Tourism,
        getHotNewsOfEachTopic,
        getTop4NewestNewsOfEachTopic,
        submitFile
    };
