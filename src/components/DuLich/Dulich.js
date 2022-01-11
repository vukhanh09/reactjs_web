import React from "react";
import styles from './CSS/dulich.module.css'

function Dulich(){

    const Headdulich = [
        { 
            id: '01',
            title: 'Ngôi nhà đơn độc nhất thế giới',
            url_image: 'https://i1-dulich.vnecdn.net/2022/01/07/191064420-848486432415800-5825401786878743553-n-1641523283.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=gqIORkjfMF8uBhMhPqENLw',
            description: 'Nhiều du khách thậm chí không nhận ra ngôi nhà ở sườn núi hẻo lánh, chứ đừng nói đến việc bước vào.Nhiều du khách thậm chí không nhận ra ngôi nhà ở sườn núi hẻo lánh, chứ đừng nói đến việc bước vào.Nhiều du khách thậm chí không nhận ra ngôi nhà ở sườn núi hẻo lánh, chứ đừng nói đến việc bước vào.Nhiều du khách thậm chí không nhận ra ngôi nhà ở sườn núi hẻo lánh, chứ đừng nói đến việc bước vào.Nhiều du khách thậm chí không nhận ra ngôi nhà ở sườn núi hẻo lánh, chứ đừng nói đến việc bước vào.',
        },
    ];

    const dulich_content = [
        {
            id: '01',
            title_news: 'Phở bò vào top các món ăn có nước ngon nhất thế giới ',
            url_image: 'https://i1-dulich.vnecdn.net/2022/01/09/270612122133566505688238653348-9564-5324-1641737845.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=gXVeLSXtZfMgssKtkx3cqw',
        },
        {
            id: '02',
            title_news: 'Đường Hậu Giang ở TP HCM thành phố ẩm thực ',
            url_image: 'https://i1-dulich.vnecdn.net/2022/01/10/tuyenphoamthuccholon02jpg-1641-8142-3437-1641788476.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=xRasGKUGg2PfvTgfTXKv2g',
        },
        {
            id: '03',
            title_news: '10 điều nên biết để không thất vọng khi đến châu Âu',
            url_image: 'https://i1-dulich.vnecdn.net/2022/01/09/ban-cong-juliet-jpeg-3872-1641-9065-8282-1641699599.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=iJnmCwxRNDSwE1KVqCjS7w',
        },
      
    ];

    const dulich_xemthem = [
        {
            id: '01',
            title: ' 1Thành Đô - thành phố hạnh phúc nhất Trung Quốc',
            description: 'Thành Đô là thành phố hạnh phúc nhất đất nước tỷ dân trong 12 năm liên tiếp, đồng thời cũng là kinh đô ẩm thực thế giới.',
            url_image: 'https://i1-dulich.vnecdn.net/2022/01/06/xiaolongkan-1641462165-6767-1641462225.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=I7qRFRCnOwph1wzXHYYcsg',
        },
        {
            id: '02',
            title: 'Mai anh đào nở rộ ở Măng Đen',
            description: 'KON TUMĐầu năm mới, hàng nghìn cây mai anh đào khoe sắc, nhiều khách du lịch đổ lên thị thị trấn Măng Đen, huyện Kon Plông ngắm hoa.',
            url_image: 'https://i1-vnexpress.vnecdn.net/2022/01/06/6d7951da-deed-4365-9593-fd4d8ed31378-jpeg-1641289802-1641451637.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=J76c8C9VolAM4s6arP1A_w',
        },
        {
            id: '03',
            title: 'Cô gái lang thang khắp nước Mỹ bằng xe cứu thương',
            description: 'MỸDanielle Gross có cuộc hôn nhân không thể lạ lùng hơn và hiện có cuộc sống chu du khắp nơi không thể hạnh phúc hơn.',
            url_image: 'https://i1-dulich.vnecdn.net/2022/01/06/2-2286-1641442304-1641442680-4271-1641442688.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=05CkybWrnnzZcWzpBXfE2g',
        },
        {
            id: '04',
            title: '10 chuyến tàu xa xỉ nhất thế giới',
            description: 'Chuyến tàu Rovos Rail (Nam Phi), Seven Stars (Nhật Bản)... đầy đủ tiện nghi như resort 5 sao, đem đến trải nghiệm độc đáo cho những du khách chịu chi.',
            url_image: 'https://i1-dulich.vnecdn.net/2022/01/05/75f4ed1a-3212-11e3-a16d-00144feab7de-1641286426-1641360094.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=tr5CJP7lxVAiBlSiyM8hOg',
        },
        {
            id: '05',
            title: 'Chuyến leo núi nhớ đời của cô gái mê chụp ảnh',
            description: 'ÁONghĩ rằng ôtô lên đến gần đỉnh, không chuẩn bị trước tinh thần phải leo bộ, Thanh Thảo không đi giày chuyên dụng, chưa kể cô còn mặc váy ngắn.',
            url_image: 'https://i1-dulich.vnecdn.net/2022/01/04/olperer-1-7386-1640840292-1641-9301-4062-1641261705.png?w=220&h=132&q=100&dpr=1&fit=crop&s=SisE_sWxe-5B33NqwpoIhQ',
        },
    ];
      
    return (
        <div className={styles.body}>
            <section className={`${styles.section} ${styles.top_header} ${styles.top_header_folder}`}>
                <div className={styles.container}>
                    <div className={`${styles.width_common} ${styles.top_folder} ${styles.flexbox}`}>
                        <div className={styles.title_folder}>Du lịch</div>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.section_topstory_folder}`}>
                <div className={`${styles.container} ${styles.flexbox}`}>
                    <div className={styles.col_left_top}>
                        <div className={`${styles.wrapper_topstory_folder} ${styles.wrapper_topstory_folder_v2} ${styles.flexbox}`}>
                            {Headdulich.map((data) => (
                                <article key={data.id} className={`${styles.item_news} ${styles.full_thumb} ${styles.article_topstory} ${styles.article_style}`}>
                                    <div className={styles.thumb_art}>
                                        <a className={`${styles.thumb} ${styles.thumb_5x3}`}>
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    intrinsicsize="680x408"
                                                    className={styles.lazy}
                                                    src = {data.url_image}
                                                />
                                            </picture>
                                        </a>
                                    </div>
                                    <h3 className={styles.title_news}>
                                        <a>{data.title}</a>
                                    </h3>
                                    <p className={styles.description}>
                                        <a>{data.description}</a>
                                    </p>
                                    <p className={styles.meta_news}>
                                        <span className={styles.time_public}>
                                            <span className={styles.time_ago}>2h trước</span>
                                        </span>
                                        <a className={styles.count_cmt}>
                                            <span
                                                className={`${styles.txt_num_comment} ${styles.font_icon}`}
                                            ></span>
                                        </a>
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.section_five_news} ${styles.mt20}`}>
                <div className={`${styles.container} ${styles.Border}`}>     
                    <div className={`${styles.list_news_five} ${styles.width_common}`}>
                        <div className={`${styles.inner_list_news_five} ${styles.flexbox}`}>
                            <article className={`${styles.item_news} ${styles.full_thumb} ${styles.item_news_no_border}`}>
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
                            </article>
                            {dulich_content.map((data) => (
                                <article key={data.id} className={`${styles.item_news} ${styles.full_thumb} ${styles.item_news_border}`}>
                                    <div className={`${styles.inner_item_news_five} ${styles.width_common}`}>
                                        <div className={styles.thumb_art}>
                                            <a className={`${styles.thumb} ${styles.thumb_5x3}`}>
                                                <picture>
                                                    <img
                                                        loading="lazy"
                                                        intrinsicsize="220x132"
                                                        className={styles.lazy}
                                                        src = {data.url_image}
                                                    />
                                                </picture>
                                            </a>
                                        </div>
                                        <h3 className={styles.title_news}>
                                            <a>{data.title_news}</a>
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
                            {dulich_xemthem.map((data) => (
                                <article key={data.id}  className={`${styles.item_news} ${styles.item_news_common}`}>
                                    <div className={styles.thumb_art}>
                                        <a className={`${styles.thumb} ${styles.thumb_5x3}`}>
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    intrinsicsize="220x132"
                                                    className={styles.lazy}
                                                    src = {data.url_image}
                                                />
                                            </picture>
                                        </a>
                                    </div>
                                    <h3 className={styles.title_news}>
                                        <a> {data.title}</a>
                                    </h3>
                                    <p className={styles.description}>
                                        <a >{data.description}</a>
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