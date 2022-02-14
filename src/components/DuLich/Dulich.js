import React, { useEffect, useState } from "react";
import { getHotNewsOfEachTopic, getTop4NewestNewsOfEachTopic } from "../../api/newsApi";
import styles from './CSS/dulich.module.css'

function Dulich({topic}){
    const [dataTop, setDataTop] = useState()
    const [dataItems, setDataItems] = useState([])
    const [dataSeeMore, setDataSeeMore] = useState([])
    useEffect(() => {
        getHotNewsOfEachTopic(topic)
        .then(res => {
            setDataTop(res.data);
        }).catch((err) => {
            console.log(err);
        })

        getTop4NewestNewsOfEachTopic(topic)
        .then(res => {
            setDataItems(res.data.filter((item, index) => index < 4))
            setDataSeeMore(res.data.filter((item, index) => index >= 4))
        }).catch((err) => {
            console.log(err)
        })
    }, [])
      
    return (
        <div className={styles.body}>
            <section className={`${styles.section} ${styles.top_header} ${styles.top_header_folder}`}>
                <div className={styles.container}>
                    <div className={`${styles.width_common} ${styles.top_folder} ${styles.flexbox}`}>
                        <div className={styles.title_folder}>{topic}</div>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.section_topstory_folder}`}>
                <div className={`${styles.container} ${styles.flexbox}`}>
                    <div className={styles.col_left_top}>
                        <div className={`${styles.wrapper_topstory_folder} ${styles.wrapper_topstory_folder_v2} ${styles.flexbox}`}>
                                <article key={dataTop?.id} className={`${styles.item_news} ${styles.full_thumb} ${styles.article_topstory} ${styles.article_style}`}>
                                    <div className={styles.thumb_art}>
                                        <a className={`${styles.thumb} ${styles.thumb_5x3}`} href={`/view-post/${dataTop?.url}`}>
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    intrinsicsize="680x408"
                                                    className={styles.lazy}
                                                    src = {dataTop?.url_image[0]}
                                                />
                                            </picture>
                                        </a>
                                    </div>
                                    <h3 className={styles.title_news}>
                                        <a href={`/view-post/${dataTop?.url}`}>{dataTop?.title}</a>
                                    </h3>
                                    <p className={styles.description}>
                                        <a>{dataTop?.description}</a>
                                    </p>
                                    <p className={styles.meta_news}>
                                        <span className={styles.time_public}>
                                            <span className={styles.time_ago}>{`Ngày đăng: ${dataTop?.add_time}`}</span>
                                        </span>
                                        <a className={styles.count_cmt}>
                                            <span
                                                className={`${styles.txt_num_comment} ${styles.font_icon}`}
                                            ></span>
                                        </a>
                                    </p>
                                </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.section_five_news} ${styles.mt20}`}>
                <div className={`${styles.container} ${styles.Border}`}>     
                    <div className={`${styles.list_news_five} ${styles.width_common}`}>
                        <div className={`${styles.inner_list_news_five} ${styles.flexbox}`}>
                            {/* <article className={`${styles.item_news} ${styles.full_thumb} ${styles.item_news_no_border}`}>
                                <div className={`${styles.inner_item_news_five} ${styles.width_common}`}>
                                    <div className={styles.thumb_art}>
                                        <a className={`${styles.thumb} ${styles.thumb_5x3}`}>
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    intrinsicsize="220x132"
                                                    className={styles.lazy}
                                                    src="https://i1-dulich.vnecdn.net/2022/01/08/1628136812939thenarrowestplace-7226-9237-1641619665.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=JxbVp6NeWOK7ndQOL7DE9w"
                                                />
                                            </picture>
                                        </a>
                                    </div>
                                    <h3 className={styles.title_news}>
                                        <a>Thành phố hẹp nhất thế giới ở đâu?</a>
                                    </h3>
                                </div>
                            </article> */}
                            {dataItems.map((data) => (
                                <article key={data?.id} className={`${styles.item_news} ${styles.full_thumb} ${styles.item_news_border}`}>
                                    <div className={`${styles.inner_item_news_five} ${styles.width_common}`}>
                                        <div className={styles.thumb_art}>
                                            <a className={`${styles.thumb} ${styles.thumb_5x3}`} href={`/view-post/${data?.url}`}>
                                                <picture>
                                                    <img
                                                        loading="lazy"
                                                        intrinsicsize="220x132"
                                                        className={styles.lazy}
                                                        src = {data?.url_image[0]}
                                                    />
                                                </picture>
                                            </a>
                                        </div>
                                        <h3 className={styles.title_news}>
                                            <a href={`/view-post/${data?.url}`}>{data?.title}</a>
                                        </h3>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        
            <section className={`${styles.section} ${styles.section_container}`}>
                <div className={`${styles.container} ${styles.has_border} ${styles.flexbox} ${styles.col_style}`}>
                    <div className={styles.col_left_folder_v2}>
                        <div className={`${styles.width_common} ${styles.list_news_subfolder}`}>
                            {dataSeeMore.map((data) => (
                                <article key={data?.id}  className={`${styles.item_news} ${styles.item_news_common}`}>
                                    <div className={styles.thumb_art}>
                                        <a className={`${styles.thumb} ${styles.thumb_5x3}`} href={`/view-post/${data?.url}`}>
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    intrinsicsize="220x132"
                                                    className={styles.lazy}
                                                    src = {data?.url_image[0]}
                                                />
                                            </picture>
                                        </a>
                                    </div>
                                    <h3 className={styles.title_news}>
                                        <a href={`/view-post/${data?.url}`}> {data?.title}</a>
                                    </h3>
                                    <p className={styles.description}>
                                        <a >{data?.description}</a>
                                        <span className={styles.meta_news}>
                                            <a className={styles.count_cmt}>
                                                <span className={`${styles.txt_num_comment} ${styles.font_icon}`} ></span>
                                            </a>
                                        </span>
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dulich