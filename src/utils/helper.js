function getIdPost(url){
    let targetId = url.split('/').at(-1)
    targetId = targetId.split('-').at(-1)
    targetId = targetId.split('.').at(0)
    return targetId
}

export{getIdPost}

