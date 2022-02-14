"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHotNews = getHotNews;
exports.getHotNewsByTopic = getHotNewsByTopic;
exports.getNewsById = getNewsById;
exports.get3NewestNews = get3NewestNews;
exports.getTop3NewsTopic = getTop3NewsTopic;
exports.get3NewestNewsOfTopic = get3NewestNewsOfTopic;
exports.getTop10News = getTop10News;
exports.getTop4Tourism = getTop4Tourism;
exports.getHotNewsOfEachTopic = getHotNewsOfEachTopic;
exports.getTop4NewestNewsOfEachTopic = getTop4NewestNewsOfEachTopic;
exports.submitFile = void 0;

var _axiosConfig = _interopRequireDefault(require("../config/axiosConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getHotNews() {
  return _axiosConfig["default"].get('/news/get-hot-news').then(function (res) {
    return res.data;
  })["catch"](function (err) {
    console.log(err);
  });
}

function getHotNewsByTopic() {
  return _axiosConfig["default"].get('/news/get-hot-news-by-topic').then(function (res) {
    return res.data;
  })["catch"](function (err) {
    console.log(err);
  });
}

function getNewsById(id) {
  return _axiosConfig["default"].get('/news/get-news-by-id', {
    params: {
      news_id: id
    }
  }).then(function (res) {
    console.log("res", res.data);
    return res.data;
  })["catch"](function (err) {
    console.log(err);
  });
}

function get3NewestNews() {
  return _axiosConfig["default"].get('/news/get-3-newest-news').then(function (res) {
    return res.data;
  })["catch"](function (err) {
    console.log(err);
  });
}

function get3NewestNewsOfTopic(topic) {
  return _axiosConfig["default"].get('/news/get-3-newest-news-topic', {
    params: {
      topic: topic
    }
  }).then(function (res) {
    return res.data;
  })["catch"](function (err) {
    console.log(err);
  });
}

function getTop3NewsTopic(topic) {
  return _axiosConfig["default"].get('/news/get-top3-news-topic', {
    params: {
      topic: topic
    }
  }).then(function (res) {
    return res.data;
  })["catch"](function (err) {
    console.log(err);
  });
}

function getTop10News() {
  return _axiosConfig["default"].get('/news/get-top10-hot-news').then(function (res) {
    return res.data;
  })["catch"](function (err) {
    console.log(err);
  });
}

function getTop4Tourism() {
  return _axiosConfig["default"].get('/news/get-top4-tourism').then(function (res) {
    return res.data;
  })["catch"](function (err) {
    console.log(err);
  });
}

function getHotNewsOfEachTopic(topic) {
  return _axiosConfig["default"].get('/news/get-hot-news-each-topic', {
    params: {
      topic: topic
    }
  }).then(function (res) {
    return res.data;
  })["catch"](function (err) {
    console.log(err);
  });
}

function getTop4NewestNewsOfEachTopic(topic) {
  return _axiosConfig["default"].get('/news/get-top4-newest-news-each-topic', {
    params: {
      topic: topic
    }
  }).then(function (res) {
    return res.data;
  });
}

var submitFile = function submitFile() {
  var formFile = new FormData();
  var imagefile = document.getElementById('formFile');
  formFile.append("formFile", imagefile.files[0]);
  return _axiosConfig["default"].post('/uploadFile', formFile, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(function (res) {
    return res.data.data;
  })["catch"](function (err) {
    console.log(err);
  });
};

exports.submitFile = submitFile;