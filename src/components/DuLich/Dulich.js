import React from "react";
import styles from './CSS/dulich.module.css'

function Dulich(){
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
                            <article className={`${styles.item_news} ${styles.full_thumb} ${styles.article_topstory} ${styles.article_style}`}>
                                <div className={styles.thumb_art}>
                                    <a
                                        href="https://vnexpress.net/nhung-doi-co-o-tay-nguyen-ruc-ro-dip-cuoi-nam-4382068.html"
                                        className={`${styles.thumb} ${styles.thumb_5x3}`}
                                        title="Những đồi cỏ ở Tây Nguyên rực rỡ dịp cuối năm"
                                    >
                                        <picture>
                                            <img
                                                itemprop="contentUrl"
                                                loading="lazy"
                                                intrinsicsize="680x408"
                                                alt="Những đồi cỏ ở Tây Nguyên rực rỡ dịp cuối năm"
                                                className={styles.lazy}
                                                src="https://i1-dulich.vnecdn.net/2021/11/08/icgystmngxhi03-1636340962-1636-9223-3257-1636357125.jpg?w=680&amp;h=408&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=_nXXlfqSJVqz_3tF7Lk8Lw"
                                            />
                                        </picture>
                                    </a>
                                </div>
                                <h3 className={styles.title_news}>
                                    <a
                                        href="https://vnexpress.net/nhung-doi-co-o-tay-nguyen-ruc-ro-dip-cuoi-nam-4382068.html"
                                        title="Những đồi cỏ ở Tây Nguyên rực rỡ dịp cuối năm"
                                    >
                                        Những đồi cỏ ở Tây Nguyên rực rỡ dịp cuối năm
                                    </a>
                                </h3>
                                <p className={styles.description}>
                                    <a
                                        href="https://vnexpress.net/nhung-doi-co-o-tay-nguyen-ruc-ro-dip-cuoi-nam-4382068.html"
                                        title="Những đồi cỏ ở Tây Nguyên rực rỡ dịp cuối năm"
                                    >
                                        Tháng 11 là thời điểm cỏ hồng, cỏ lau ở Đà Lạt và Pleiku vào mùa, hút du khách đến chụp ảnh.
                                        Tháng 11 là thời điểm cỏ hồng, cỏ lau ở Đà Lạt và Pleiku vào mùa, hút du khách đến chụp ảnh.
                                        Tháng 11 là thời điểm cỏ hồng, cỏ lau ở Đà Lạt và Pleiku vào mùa, hút du khách đến chụp ảnh.
                                        Tháng 11 là thời điểm cỏ hồng, cỏ lau ở Đà Lạt và Pleiku vào mùa, hút du khách đến chụp ảnh.
                                        Tháng 11 là thời điểm cỏ hồng, cỏ lau ở Đà Lạt và Pleiku vào mùa, hút du khách đến chụp ảnh.
                                    </a>
                                </p>
                                <p className={styles.meta_news}>
                                    <span className={styles.time_public}>
                                        <span className={styles.time_ago}>2h trước</span>
                                    </span>
                                    <a className={styles.count_cmt} href="https://vnexpress.net/nhung-doi-co-o-tay-nguyen-ruc-ro-dip-cuoi-nam-4382068.html#box_comment_vne" 
                                    // style="white-space: nowrap; display: none;"
                                    >
                                        <span
                                            className={`${styles.txt_num_comment} ${styles.font_icon}`}
                                        ></span>
                                    </a>
                                </p>
                            </article>
                            <div className={styles.sub_news_top}>
                                <div className={styles.inner_sub_news_top}>
                                    <div className={styles.scroll_sub_featured}>
                                        <ul className={styles.list_sub_feature}>
                                            <li>
                                                <h3 className={styles.title_news}>
                                                    <a
                                                        href="https://vnexpress.net/bo-viec-luong-120-trieu-dong-de-du-lich-khap-the-gioi-4382770.html"
                                                        title="Bỏ việc lương 120 triệu đồng để du lịch khắp thế giới"
                                                    >
                                                        Bỏ việc lương 120 triệu đồng để du lịch khắp thế giới
                                                    </a>
                                                </h3>
                                                <p className={styles.description}>
                                                    <a
                                                        href="https://vnexpress.net/bo-viec-luong-120-trieu-dong-de-du-lich-khap-the-gioi-4382770.html"
                                                        title="Bỏ việc lương 120 triệu đồng để du lịch khắp thế giới"
                                                    >
                                                        Ở tuổi 30, nghỉ làm giám đốc kinh doanh, Nguyễn Thanh Tùng (Tony Balo) đã du lịch 20 quốc gia và thực hiện sở thích làm travel blogger.
                                                        Ở tuổi 30, nghỉ làm giám đốc kinh doanh, Nguyễn Thanh Tùng (Tony Balo) đã du lịch 20 quốc gia và thực hiện sở thích làm travel blogger.
                                                    </a>
                                                </p>
                                                <p className={styles.meta_news}>
                                                    <a className={styles.count_cmt} href="https://vnexpress.net/bo-viec-luong-120-trieu-dong-de-du-lich-khap-the-gioi-4382770.html#box_comment_vne" 
                                                    // style="white-space: nowrap; display: none;"
                                                    >
                                                        <span
                                                            className={`${styles.txt_num_comment} ${styles.font_icon}`}
                                                        ></span>
                                                    </a>
                                                </p>
                                            </li>
                                            <li>
                                                <h3 className={styles.title_news}>
                                                    <a
                                                        href="https://vnexpress.net/afghanistan-don-du-khach-dau-tien-tu-khi-taliban-nam-quyen-4383256.html"
                                                        title="Afghanistan đón du khách đầu tiên từ khi Taliban nắm quyền"
                                                    >
                                                        Afghanistan đón du khách đầu tiên từ khi Taliban nắm quyền
                                                    </a>
                                                </h3>
                                                <p className={styles.description}>
                                                    <a
                                                        href="https://vnexpress.net/afghanistan-don-du-khach-dau-tien-tu-khi-taliban-nam-quyen-4383256.html"
                                                        title="Afghanistan đón du khách đầu tiên từ khi Taliban nắm quyền"
                                                    >
                                                        Hai khách nước ngoài đã đến du lịch kể từ Taliban lên nắm quyền nước này hồi tháng 8.
                                                        Hai khách nước ngoài đã đến du lịch kể từ Taliban lên nắm quyền nước này hồi tháng 8.
                                                    </a>
                                                </p>
                                                <p className={styles.meta_news}>
                                                    <a className={styles.count_cmt} href="https://vnexpress.net/afghanistan-don-du-khach-dau-tien-tu-khi-taliban-nam-quyen-4383256.html#box_comment_vne" 
                                                    // style="white-space: nowrap; display: none;"
                                                    >
                                                        <span
                                                            className={`${styles.txt_num_comment} ${styles.font_icon}`}
                                                            
                                                        ></span>
                                                    </a>
                                                </p>
                                            </li>
                                            <li>
                                                <h3 className={styles.title_news}>
                                                    <a
                                                        href="https://vnexpress.net/afghanistan-don-du-khach-dau-tien-tu-khi-taliban-nam-quyen-4383256.html"
                                                        title="Afghanistan đón du khách đầu tiên từ khi Taliban nắm quyền"
                                                    >
                                                        Hai từ không bao giờ nên nói với tiếp viên
                                                    </a>
                                                </h3>
                                                <p className={styles.description}>
                                                    <a
                                                        href="https://vnexpress.net/afghanistan-don-du-khach-dau-tien-tu-khi-taliban-nam-quyen-4383256.html"
                                                        title="Afghanistan đón du khách đầu tiên từ khi Taliban nắm quyền"
                                                    >
                                                        Dù thật lòng hay trêu đùa, chỉ cần tiếp viên nghe thấy khách nói "Tôi say", họ có thể đuổi bạn khỏi máy bay.
                                                        Dù thật lòng hay trêu đùa, chỉ cần tiếp viên nghe thấy khách nói "Tôi say", họ có thể đuổi bạn khỏi máy bay.
                                                    </a>
                                                </p>
                                                <p className={styles.meta_news}>
                                                    <a className={styles.count_cmt} href="https://vnexpress.net/afghanistan-don-du-khach-dau-tien-tu-khi-taliban-nam-quyen-4383256.html#box_comment_vne" 
                                                    // style="white-space: nowrap; display: none;"
                                                    >
                                                        <span
                                                            className={`${styles.txt_num_comment} ${styles.font_icon}`}
                                                            
                                                        ></span>
                                                    </a>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.section_five_news} ${styles.mt20}`}>
                <div className={`${styles.container} ${styles.Border}`}>     
                    <div className={`${styles.list_news_five} ${styles.width_common}`}>
                        <div className={`${styles.inner_list_news_five} ${styles.flexbox}`}>
                            <article className={`${styles.item_news} ${styles.full_thumb}`}>
                                <div className={`${styles.inner_item_news_five} ${styles.width_common}`}>
                                    <div className={styles.thumb_art}>
                                        <a
                                            title="Khu phố mang hương vị Bắc giữa Sài Gòn"
                                            href="https://vnexpress.net/khu-pho-mang-huong-vi-bac-giua-sai-gon-4381328.html"
                                            className={`${styles.thumb} ${styles.thumb_5x3}`}
                                        >
                                            <picture>
                                                <img
                                                    itemprop="contentUrl"
                                                    // style="transform: translateX(-50%); left: 50%;"
                                                    loading="lazy"
                                                    intrinsicsize="220x132"
                                                    alt="Khu phố mang hương vị Bắc giữa Sài Gòn"
                                                    className={styles.lazy}
                                                    src="https://i1-dulich.vnecdn.net/2021/11/05/gianhngmanothcnysignjpg-163609-7472-3326-1636095745.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=o80RTAfd7x8TK-A4bSdJ_g"
                                                />
                                            </picture>
                                        </a>
                                    </div>
                                    <h3 className={styles.title_news}>
                                        <a
                                            title="Khu phố mang hương vị Bắc giữa Sài Gòn"
                                            href="https://vnexpress.net/khu-pho-mang-huong-vi-bac-giua-sai-gon-4381328.html"
                                        >Khu phố mang hương vị Bắc giữa Sài Gòn</a>
                                    </h3>
                                </div>
                            </article>
                            <article className={`${styles.item_news} ${styles.full_thumb} ${styles.item_news_border}`}>
                                <div className={`${styles.inner_item_news_five} ${styles.width_common}`}>
                                    <div className={styles.thumb_art}>
                                        <a
                                            title="Khu phố mang hương vị Bắc giữa Sài Gòn"
                                            href="https://vnexpress.net/khu-pho-mang-huong-vi-bac-giua-sai-gon-4381328.html"
                                            className={`${styles.thumb} ${styles.thumb_5x3}`}
                                        >
                                            <picture>
                                                <img
                                                    itemprop="contentUrl"
                                                    // style="transform: translateX(-50%); left: 50%;"
                                                    loading="lazy"
                                                    intrinsicsize="220x132"
                                                    alt="Khu phố mang hương vị Bắc giữa Sài Gòn"
                                                    className={styles.lazy}
                                                    src="https://i1-dulich.vnecdn.net/2021/11/05/gianhngmanothcnysignjpg-163609-7472-3326-1636095745.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=o80RTAfd7x8TK-A4bSdJ_g"
                                                />
                                            </picture>
                                        </a>
                                    </div>
                                    <h3 className={styles.title_news}>
                                        <a
                                            title="Khu phố mang hương vị Bắc giữa Sài Gòn"
                                            href="https://vnexpress.net/khu-pho-mang-huong-vi-bac-giua-sai-gon-4381328.html"
                                        >Khu phố mang hương vị Bắc giữa Sài Gòn</a>
                                    </h3>
                                </div>
                            </article>
                            <article className={`${styles.item_news} ${styles.full_thumb} ${styles.item_news_border}`}>
                                <div className={`${styles.inner_item_news_five} ${styles.width_common}`}>
                                    <div className={styles.thumb_art}>
                                        <a
                                            title="Khu phố mang hương vị Bắc giữa Sài Gòn"
                                            href="https://vnexpress.net/khu-pho-mang-huong-vi-bac-giua-sai-gon-4381328.html"
                                            className={`${styles.thumb} ${styles.thumb_5x3}`}
                                        >
                                            <picture>
                                                <img
                                                    itemprop="contentUrl"
                                                    // style="transform: translateX(-50%); left: 50%;"
                                                    loading="lazy"
                                                    intrinsicsize="220x132"
                                                    alt="Khu phố mang hương vị Bắc giữa Sài Gòn"
                                                    className={styles.lazy}
                                                    src="https://i1-dulich.vnecdn.net/2021/11/05/gianhngmanothcnysignjpg-163609-7472-3326-1636095745.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=o80RTAfd7x8TK-A4bSdJ_g"
                                                />
                                            </picture>
                                        </a>
                                    </div>
                                    <h3 className={styles.title_news}>
                                        <a
                                            title="Khu phố mang hương vị Bắc giữa Sài Gòn"
                                            href="https://vnexpress.net/khu-pho-mang-huong-vi-bac-giua-sai-gon-4381328.html"
                                        >Khu phố mang hương vị Bắc giữa Sài Gòn</a>
                                    </h3>
                                </div>
                            </article>
                            <article className={`${styles.item_news} ${styles.full_thumb} ${styles.item_news_border}`}>
                                <div className={`${styles.inner_item_news_five} ${styles.width_common}`}>
                                    <div className={styles.thumb_art}>
                                        <a
                                            title="Khu phố mang hương vị Bắc giữa Sài Gòn"
                                            href="https://vnexpress.net/khu-pho-mang-huong-vi-bac-giua-sai-gon-4381328.html"
                                            className={`${styles.thumb} ${styles.thumb_5x3}`}
                                        >
                                            <picture>
                                                <img
                                                    itemprop="contentUrl"
                                                    // style="transform: translateX(-50%); left: 50%;"
                                                    loading="lazy"
                                                    intrinsicsize="220x132"
                                                    alt="Khu phố mang hương vị Bắc giữa Sài Gòn"
                                                    className={styles.lazy}
                                                    src="https://i1-dulich.vnecdn.net/2021/11/05/gianhngmanothcnysignjpg-163609-7472-3326-1636095745.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=o80RTAfd7x8TK-A4bSdJ_g"
                                                />
                                            </picture>
                                        </a>
                                    </div>
                                    <h3 className={styles.title_news}>
                                        <a
                                            title="Khu phố mang hương vị Bắc giữa Sài Gòn"
                                            href="https://vnexpress.net/khu-pho-mang-huong-vi-bac-giua-sai-gon-4381328.html"
                                        >Khu phố mang hương vị Bắc giữa Sài Gòn</a>
                                    </h3>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        
            <section className={`${styles.section} ${styles.section_container}`}>
                <div className={`${styles.container} ${styles.has_border} ${styles.flexbox} ${styles.col_style}`}>
                    <div className={styles.col_left_folder_v2}>
                        <div className={`${styles.width_common} ${styles.list_news_subfolder}`}>
                            <article className={`${styles.item_news} ${styles.item_news_common}`}>
                                <div className={styles.thumb_art}>
                                    <a
                                        title="10 khách sạn miền Bắc có bể bơi nước nóng"
                                        href="https://vnexpress.net/10-khach-san-mien-bac-co-be-boi-nuoc-nong-4382461.html"
                                        className={`${styles.thumb} ${styles.thumb_5x3}`}
                                    >
                                        <picture>
                                        
                                            <img
                                                itemprop="contentUrl"
                                                // style="transform: translateX(-50%); left: 50%;"
                                                loading="lazy"
                                                intrinsicsize="220x132"
                                                alt="10 khách sạn miền Bắc có bể bơi nước nóng"
                                                className={styles.lazy}
                                                src="https://i1-dulich.vnecdn.net/2021/12/28/7-camping-in-binh-chau-forest-8339-2656-1640680648.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=asbUz-BP5Qh4pNrIcAQAPw"
                                            />
                                        </picture>
                                    </a>
                                </div>
                                <h3 className={styles.title_news}>
                                    <a
                                    
                                        title="10 khách sạn miền Bắc có bể bơi nước nóng"
                                        href="https://vnexpress.net/10-khach-san-mien-bac-co-be-boi-nuoc-nong-4382461.html"
                                    >10 khách sạn miền Bắc có bể bơi nước nóng</a>
                                </h3>
                                <p className={styles.description}>
                                    <a
                                    
                                    
                                        title="10 khách sạn miền Bắc có bể bơi nước nóng"
                                        href="https://vnexpress.net/10-khach-san-mien-bac-co-be-boi-nuoc-nong-4382461.html"
                                    >Thư giãn trong làn nước ấm khi bên ngoài nhiệt độ xuống thấp, khung cảnh sương phủ bồng bềnh... là trải nghiệm hấp dẫn trong mùa đông.</a>
                                    <span className={styles.meta_news}>
                                        <a className={styles.count_cmt} href="https://vnexpress.net/10-khach-san-mien-bac-co-be-boi-nuoc-nong-4382461.html#box_comment_vne" 
                                        // style="white-space: nowrap; display: none;"
                                        >
                                            <span
                                                className={`${styles.txt_num_comment} ${styles.font_icon}`}
                                            ></span>
                                        </a>
                                    </span>
                                </p>
                            </article>
                            <article className={`${styles.item_news} ${styles.item_news_common}`}>
                                <div className={styles.thumb_art}>
                                    <a
                                        title="10 khách sạn miền Bắc có bể bơi nước nóng"
                                        href="https://vnexpress.net/10-khach-san-mien-bac-co-be-boi-nuoc-nong-4382461.html"
                                        className={`${styles.thumb} ${styles.thumb_5x3}`}
                                    >
                                        <picture>
                                        
                                            <img
                                                itemprop="contentUrl"
                                                // style="transform: translateX(-50%); left: 50%;"
                                                loading="lazy"
                                                intrinsicsize="220x132"
                                                alt="10 khách sạn miền Bắc có bể bơi nước nóng"
                                                className={styles.lazy}
                                                src="https://i1-dulich.vnecdn.net/2021/12/28/mainqimg263d3a6d29d6db48e7a009-2786-4277-1640678006.png?w=220&h=132&q=100&dpr=1&fit=crop&s=v3aNfeRpjNaBPQxGrRESUg"
                                            />
                                        </picture>
                                    </a>
                                </div>
                                <h3 className={styles.title_news}>
                                    <a
                                    
                                        title="10 khách sạn miền Bắc có bể bơi nước nóng"
                                        href="https://vnexpress.net/10-khach-san-mien-bac-co-be-boi-nuoc-nong-4382461.html"
                                    >10 khách sạn miền Bắc có bể bơi nước nóng</a>
                                </h3>
                                <p className={styles.description}>
                                    <a
                                    
                                    
                                        title="10 khách sạn miền Bắc có bể bơi nước nóng"
                                        href="https://vnexpress.net/10-khach-san-mien-bac-co-be-boi-nuoc-nong-4382461.html"
                                    >Thư giãn trong làn nước ấm khi bên ngoài nhiệt độ xuống thấp, khung cảnh sương phủ bồng bềnh... là trải nghiệm hấp dẫn trong mùa đông.</a>
                                    <span className={styles.meta_news}>
                                        <a className={styles.count_cmt} href="https://vnexpress.net/10-khach-san-mien-bac-co-be-boi-nuoc-nong-4382461.html#box_comment_vne" 
                                        // style="white-space: nowrap; display: none;"
                                        >
                                            <span
                                                className={`${styles.txt_num_comment} ${styles.font_icon}`}
                                            ></span>
                                        </a>
                                    </span>
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className={styles.col_right_folder_v2}>
                        <div className={`${styles.width_common} ${styles.list_news_subfolder}`}>
                            <article className={`${styles.item_news} ${styles.item_news_common}`}>
                                <div className={styles.thumb_art}>
                                    <a
                                        title="10 khách sạn miền Bắc có bể bơi nước nóng"
                                        href="https://vnexpress.net/10-khach-san-mien-bac-co-be-boi-nuoc-nong-4382461.html"
                                        className={`${styles.thumb} ${styles.thumb_5x3}`}
                                    >
                                        <picture>
                                        
                                            <img
                                                itemprop="contentUrl"
                                                // style="transform: translateX(-50%); left: 50%;"
                                                loading="lazy"
                                                intrinsicsize="220x132"
                                                alt="10 khách sạn miền Bắc có bể bơi nước nóng"
                                                className={styles.lazy}
                                                src="https://i1-dulich.vnecdn.net/2021/12/28/baikal-2-8115-1640312850-16406-2819-1228-1640662289.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=z3eLKKQcDE6WNkzSAxMakw"
                                            />
                                        </picture>
                                    </a>
                                </div>
                                <h3 className={styles.title_news}>
                                    <a
                                    
                                        title="10 khách sạn miền Bắc có bể bơi nước nóng"
                                        href="https://vnexpress.net/10-khach-san-mien-bac-co-be-boi-nuoc-nong-4382461.html"
                                    >10 khách sạn miền Bắc có bể bơi nước nóng</a>
                                </h3>
                                <p className={styles.description}>
                                    <a
                                    
                                    
                                        title="10 khách sạn miền Bắc có bể bơi nước nóng"
                                        href="https://vnexpress.net/10-khach-san-mien-bac-co-be-boi-nuoc-nong-4382461.html"
                                    >Thư giãn trong làn nước ấm khi bên ngoài nhiệt độ xuống thấp, khung cảnh sương phủ bồng bềnh... là trải nghiệm hấp dẫn trong mùa đông.</a>
                                    <span className={styles.meta_news}>
                                        <a className={styles.count_cmt} href="https://vnexpress.net/10-khach-san-mien-bac-co-be-boi-nuoc-nong-4382461.html#box_comment_vne" 
                                        // style="white-space: nowrap; display: none;"
                                        >
                                            <span
                                                className={`${styles.txt_num_comment} ${styles.font_icon}`}
                                            ></span>
                                        </a>
                                    </span>
                                </p>
                            </article>
                            <article className={`${styles.item_news} ${styles.item_news_common}`}>
                                <div className={styles.thumb_art}>
                                    <a
                                        title="10 khách sạn miền Bắc có bể bơi nước nóng"
                                        href="https://vnexpress.net/10-khach-san-mien-bac-co-be-boi-nuoc-nong-4382461.html"
                                        className={`${styles.thumb} ${styles.thumb_5x3}`}
                                    >
                                        <picture>
                                        
                                            <img
                                                itemprop="contentUrl"
                                                // style="transform: translateX(-50%); left: 50%;"
                                                loading="lazy"
                                                intrinsicsize="220x132"
                                                alt="10 khách sạn miền Bắc có bể bơi nước nóng"
                                                className={styles.lazy}
                                                src="https://i1-dulich.vnecdn.net/2021/12/28/amsterdam-mua-dong-1640659753-1640680763.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=7B6WETw6zY-LMEydzWk7Ng"
                                            />
                                        </picture>
                                    </a>
                                </div>
                                <h3 className={styles.title_news}>
                                    <a
                                    
                                        title="10 khách sạn miền Bắc có bể bơi nước nóng"
                                        href="https://vnexpress.net/10-khach-san-mien-bac-co-be-boi-nuoc-nong-4382461.html"
                                    >10 khách sạn miền Bắc có bể bơi nước nóng</a>
                                </h3>
                                <p className={styles.description}>
                                    <a
                                    
                                    
                                        title="10 khách sạn miền Bắc có bể bơi nước nóng"
                                        href="https://vnexpress.net/10-khach-san-mien-bac-co-be-boi-nuoc-nong-4382461.html"
                                    >Thư giãn trong làn nước ấm khi bên ngoài nhiệt độ xuống thấp, khung cảnh sương phủ bồng bềnh... là trải nghiệm hấp dẫn trong mùa đông.</a>
                                    <span className={styles.meta_news}>
                                        <a className={styles.count_cmt} href="https://vnexpress.net/10-khach-san-mien-bac-co-be-boi-nuoc-nong-4382461.html#box_comment_vne" 
                                        // style="white-space: nowrap; display: none;"
                                        >
                                            <span
                                                className={`${styles.txt_num_comment} ${styles.font_icon}`}
                                            ></span>
                                        </a>
                                    </span>
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dulich