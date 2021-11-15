import { Routes, Route, Link } from "react-router-dom";

import styles from './CSS/gocnhin.module.css';

function GocNhin() {
return (
    <>
    <section className={`${styles.section} ${styles.top_header} ${styles.top_header_folder}`}>
        <div className={styles.container}>
            <div className={`${styles.width_common} ${styles.top_folder} ${styles.flexbox}`}>
                <div className={styles.title_folder}>Góc nhìn</div>
            </div>
        </div>
    </section>
    <section className={`${styles.section} ${styles.section_container}`}>
        <div className={`${styles.container} ${styles.flexbox}`}>
            <div className={styles.col_left_home_gn}>
                <div className={`${styles.box_category} ${styles.box_author_home} ${styles.sticky}`}>
                    <h2 className={`${styles.width_common} ${styles.title_box_category}`}><a href="goc-nhin/tac-gia.html" title="Tác giả"  className={styles.inner_title}>Tác giả</a></h2>
                    <ul className={styles.list_author_home}>
                        <li>
                            <a href="tac-gia/nguyen-lan-dung-1203.html" title="Nguyễn Lân Dũng">Nguyễn Lân Dũng</a>
                        </li>
                        <li>
                            <a href="tac-gia/bach-ngoc-chien-1526.html" title="Bạch Ngọc Chiến">Bạch Ngọc Chiến</a>
                        </li>
                        <li>
                            <a href="tac-gia/bui-phu-chau-935.html" title="Bùi Phú Châu">Bùi Phú Châu</a>
                        </li>
                        <li>
                            <a href="tac-gia/quan-the-dan-1447.html" title="Quan Thế Dân">Quan Thế Dân</a>
                        </li>
                        <li>
                            <a href="tac-gia/nguyen-thi-thu-hien-1311.html" title="Nguyễn Thị Thu Hiền">Nguyễn Thị Thu Hiền</a>
                        </li>
                        <li>
                            <a href="tac-gia/nguyen-tran-hoang-phuong-1346.html" title="Nguyễn Trần Hoàng Phương">Nguyễn Trần Hoàng Phương</a>
                        </li>
                        <li>
                            <a href="tac-gia/jesse-peterson-1050.html" title="Jesse Peterson">Jesse Peterson</a>
                        </li>
                        <li>
                            <a href="tac-gia/nguyen-van-tho-28.html" title="Nguyễn Văn Thọ">Nguyễn Văn Thọ</a>
                        </li>
                        <li>
                            <a href="tac-gia/ngo-trong-thanh-1006.html" title="Ngô Trọng Thanh">Ngô Trọng Thanh</a>
                        </li>
                        <li>
                            <a href="tac-gia/nguyen-si-dung-928.html" title="Nguyễn Sĩ Dũng">Nguyễn Sĩ Dũng</a>
                        </li>
                    </ul>
                    <p className={`${styles.view_all} ${styles.width_common}`}><a href="goc-nhin/tac-gia.html">Xem thêm »</a></p>
                </div>
            </div>
            <div className={`${styles.col_left_folder_v2} ${styles.col_center_home_gn}`}>
                <div className={`${styles.width_common} ${styles.list_news_subfolder} ${styles.list_stream_gocnhin}`} id="paging" data-url="/ajax/goc-nhin" data-container="paging" data-category="1003450" data-page="2" data-error="1" data-exclude="3">
                    <article className={`${styles.item_news} ${styles.item_news_common} ${styles.item_1} ${styles.art_top}`}>
                        <div  className={styles.thumb_art}>
                            <a className={`${styles.thumb} ${styles.thumb_1x1} ${styles.thumb_circle}`} href="tac-gia/nguyen-dang-anh-thi-1191.html" title="Nguyễn Đăng Anh Thi">
                                <img src="https://i1-vnexpress.vnecdn.net/2021/11/09/nguyendanganhthipng1548661469png-1636469529.png?w=100&h=100&q=100&dpr=2&fit=crop&s=fMuj3i6faPMOR-fELv73qg" alt="Nguyễn Đăng Anh Thi" />
                            </a>
                        </div>
                        <h3 className={styles.title_news}><a data-medium="Item-1" data-thumb="0" href="tam-nhin-dien-gio-4383141.html" title="Tầm nhìn điện gió">Tầm nhìn điện gió</a></h3>
                        <p className={styles.description}>
                            <a data-medium="Item-1" data-thumb="0" href="tam-nhin-dien-gio-4383141.html" title="Tầm nhìn điện gió">Tôi bắt đầu nghiên cứu đầu tư vào điện gió 13 năm trước, khi gia nhập một quỹ về môi trường và năng lượng sạch của Mỹ tại Việt Nam.</a>
                        </p>
                        <p className={styles.meta_news}>
                            <a href="/goc-nhin/chinh-tri-chinh-sach" className={`${styles.cat} ${styles.parsed_cate}`} data-cate-id="1004930" title="Chính trị &amp; chính sách">
                                Chính trị &amp; chính sách</a>
                            <a href="tac-gia/nguyen-dang-anh-thi-1191.html" className={`${styles.cat} ${styles.name_author}`}  title="Nguyễn Đăng Anh Thi">Nguyễn Đăng Anh Thi</a>
                        </p>
                    </article>
                    <article className={`${styles.item_news} ${styles.item_news_common} ${styles.item_2}`}>
                        <div className={styles.thumb_art}>
                            <a className={`${styles.thumb} ${styles.thumb_1x1} ${styles.thumb_circle}`} href="tac-gia/le-dang-doanh-1278.html" title="Lê Đăng Doanh">
                                <img src="https://i1-vnexpress.vnecdn.net/2019/12/16/ledangdoanhpng-1576437381.png?w=100&h=100&q=100&dpr=2&fit=crop&s=q58nFlDAY3eKdcoijf8m2w" alt="Lê Đăng Doanh" />
                            </a>
                        </div>
                        <h3 className={styles.title_news}><a data-medium="Item-2" data-thumb="0" href="nang-luc-khang-thuong-4382608.html" title="Năng lực kháng thương">Năng lực kháng thương</a></h3>
                        <p className={styles.description}>
                            <a data-medium="Item-2" data-thumb="0" href="nang-luc-khang-thuong-4382608.html" title="Năng lực kháng thương">Một ngày mưa tầm tã hiếm thấy ở Hà Nội, chúng tôi lắng nghe các ý kiến về khôi phục nhịp đập kinh tế trong bình thường mới.</a>
                        </p>

                        <p className={styles.meta_news}>
                            <a href="/goc-nhin/kinh-doanh-quan-tri" className={`${styles.cat} ${styles.parsed_cate}`} data-cate-id="1004932" title="Kinh doanh &amp; quản trị">Kinh doanh &amp; quản trị</a>
                            <a href="tac-gia/le-dang-doanh-1278.html" className={`${styles.cat} ${styles.name_author}`} title="Lê Đăng Doanh">Lê Đăng Doanh</a>
                        </p>
                    </article>
                    <article className={`${styles.item_news} ${styles.item_news_common} ${styles.item_3}`}>
                        <div className={styles.thumb_art}>
                            <a className={`${styles.thumb} ${styles.thumb_1x1} ${styles.thumb_circle}`} href="tac-gia/le-van-thanh-1533.html" title="Lê Văn Thành">
                                <img src="https://i1-vnexpress.vnecdn.net/2021/11/05/unnamed2removebgpreviewpng-1636111303.png?w=100&h=100&q=100&dpr=2&fit=crop&s=mapg2hd0dCYKw4LSEPceow" alt="Lê Văn Thành" />
                            </a>
                        </div>
                        <h3 className={styles.title_news}><a data-medium="Item-3" data-thumb="0" href="tuyen-nguoi-o-google-4382034.html" title="Tuyển người ở Google">Tuyển người ở Google</a></h3>
                        <p className={styles.description}>
                            <a data-medium="Item-3" data-thumb="0" href="tuyen-nguoi-o-google-4382034.html" title="Tuyển người ở Google">Trung bình mỗi năm, Google nhận được hai triệu đơn xin việc trong khi chỉ tuyển vài nghìn. Nếu biết điều này sớm, tôi đã chẳng dám nộp đơn.</a>
                        </p>
                        <p className={styles.meta_news}>
                            <a href="/goc-nhin/kinh-doanh-quan-tri" className={`${styles.cat} ${styles.parsed_cate}`} data-cate-id="1004932" title="Kinh doanh &amp; quản trị">Kinh doanh &amp; quản trị</a>
                            <a href="tac-gia/le-van-thanh-1533.html" className={`${styles.cat} ${styles.name_author}`} title="Lê Văn Thành">Lê Văn Thành</a>
                        </p>
                    </article>
                    <article className={`${styles.item_news} ${styles.item_news_common} ${styles.item_4}`}>
                        <div className={styles.thumb_art}>
                            <a className={`${styles.thumb} ${styles.thumb_1x1} ${styles.thumb_circle}`} href="tac-gia/vo-dinh-tri-1104.html" title="Võ Đình Trí">
                                <img src="https://i1-vnexpress.vnecdn.net/2021/11/05/unnamed2removebgpreviewpng-1636111303.png?w=100&h=100&q=100&dpr=2&fit=crop&s=mapg2hd0dCYKw4LSEPceow" alt="Võ Đình Trí" />
                            </a>
                        </div>
                        <h3 className={styles.title_news}><a data-medium="Item-4" data-thumb="0" href="gia-xang-va-vi-tien-4381550.html" title="Giá xăng và ví tiền">Giá xăng và ví tiền</a></h3>
                        <p className={styles.description}>
                            <a data-medium="Item-4" data-thumb="0" href="gia-xang-va-vi-tien-4381550.html" title="Giá xăng và ví tiền">Dân tình nước Pháp đang xôn xao vì bánh mì baguette sắp tăng thêm khoảng 5-10 xu, lên đến mốc một Euro mỗi ổ, cao kỷ lục từ trước đến nay.</a>
                        </p>
                        <p className={styles.meta_news}>
                            <a href="/goc-nhin/kinh-doanh-quan-tri" className={`${styles.cat} ${styles.parsed_cate}`} data-cate-id="1004932" title="Kinh doanh &amp; quản trị">Kinh doanh &amp; quản trị</a>
                            <a href="tac-gia/vo-dinh-tri-1104.html" className={`${styles.cat} ${styles.name_author}`} title="Võ Đình Trí">Võ Đình Trí</a>
                        </p>
                    </article>
                    <article className={`${styles.item_news} ${styles.item_news_common} ${styles.item_5}`}>
                        <div className={styles.thumb_art}>
                            <a className={`${styles.thumb} ${styles.thumb_1x1} ${styles.thumb_circle}`} href="tac-gia/huynh-the-du-1026.html" title="Huỳnh Thế Du">
                                <img src="https://i1-vnexpress.vnecdn.net/2018/05/23/vodinhtripng-1527012028.png?w=100&h=100&q=100&dpr=2&fit=crop&s=0_KuJD283vq5-5YITpACBw" alt="Huỳnh Thế Du" />
                            </a>
                        </div>
                        <h3 className={styles.title_news}><a data-medium="Item-5" data-thumb="0" href="tra-tien-vao-thanh-pho-4381070.html" title="Trả tiền vào thành phố">Trả tiền vào thành phố</a></h3>
                        <p className={styles.description}>
                            <a data-medium="Item-5" data-thumb="0" href="tra-tien-vao-thanh-pho-4381070.html" title="Trả tiền vào thành phố">Tôi ủng hộ thu phí xe ô tô vào nội đô Hà Nội và TP HCM trên nguyên tắc ‘ai ăn bánh phải trả tiền’ song song với xây dựng bằng được hệ thống giao thông công cộng hiệu quả và tiện dụng.</a>
                        </p>
                        <p className={styles.meta_news}>
                            <a href="/goc-nhin/kinh-doanh-quan-tri" className={`${styles.cat} ${styles.parsed_cate}`} data-cate-id="1004932" title="Kinh doanh &amp; quản trị">Kinh doanh &amp; quản trị</a>
                            <a href="tac-gia/huynh-the-du-1026.html" className={`${styles.cat} ${styles.name_author}`} title="Huỳnh Thế Du">Huỳnh Thế Du</a>
                        </p>
                    </article>
                    <article className={`${styles.item_news} ${styles.item_news_common} ${styles.item_6}`}>
                        <div className={styles.thumb_art}>
                            <a className={`${styles.thumb} ${styles.thumb_1x1} ${styles.thumb_circle}`} href="tac-gia/vo-van-thanh-957.html" title="Võ Văn Thành">
                                <img src="https://i1-vnexpress.vnecdn.net/2017/06/14/vothanhpng-1497427293.png?w=100&h=100&q=100&dpr=2&fit=crop&s=Pp89oUHWYK7Z704RZvOjuw" alt="Võ Văn Thành" />
                            </a>
                        </div>
                        <h3 className={styles.title_news}><a data-medium="Item-6" data-thumb="0" href="cuu-trai-dat-4380583.html" title="Cứu trái đất">Cứu trái đất</a></h3>
                        <p className={styles.description}>
                            <a data-medium="Item-6" data-thumb="0" href="cuu-trai-dat-4380583.html" title="Cứu trái đất">Quan sát sự bận rộn của các đại biểu toàn cầu đến dự hội nghị khí hậu tuần này tại Glasgow và chờ đưa tin về hoạt động của họ, tôi tự hỏi đâu là nghĩa vụ của mình với Trái đất.</a>
                        </p>
                        <p className={styles.meta_news}>
                            <a href="/goc-nhin/kinh-doanh-quan-tri" className={`${styles.cat} ${styles.parsed_cate}`} data-cate-id="1004932" title="Kinh doanh &amp; quản trị">Kinh doanh &amp; quản trị</a>
                            <a href="tac-gia/vo-van-thanh-957.html" className={`${styles.cat} ${styles.name_author}`} title="Võ Văn Thành">Võ Văn Thành</a>
                        </p>
                    </article>
                </div>
                <input type="hidden" className={styles.lazy_more}  data-page="1" data-max-page="110" data-limit="20" data-total="2183" />
            </div>
            <div className={`${styles.col_right_folder_v2} ${styles.col_right_home_gn}`}>
                <div className={`${styles.box_category} ${styles.box_list_topic_gn}`}>
                    <h2 className={`${styles.width_common} ${styles.title_box_category}`}><a><span className={styles.inner_title} >Chủ đề</span></a></h2>
                    <div className={styles.list_topic}>
                        <a href="goc-nhin/covid-19.html" title="Covid-19">Covid-19</a>
                        <a href="goc-nhin/chinh-tri-chinh-sach.html" title="Chính trị & chính sách">Chính trị & chính sách</a>
                        <a href="goc-nhin/y-te-suc-khoe.html" title="Y tế & sức khỏe">Y tế & sức khỏe</a>
                        <a href="goc-nhin/kinh-doanh-quan-tri.html" title="Kinh doanh & quản trị">Kinh doanh & quản trị</a>
                        <a href="goc-nhin/giao-duc-tri-thuc.html" title="Giáo dục & tri thức">Giáo dục & tri thức</a>
                        <a href="goc-nhin/moi-truong.html" title="Môi trường">Môi trường</a>
                        <a href="goc-nhin/van-hoa-loi-song.html" title="Văn hóa & lối sống">Văn hóa & lối sống</a>
                    </div>
                </div>
                <div className={`${styles.box_category} ${styles.box_quantamnhieu}`}>
                    <h2 className={`${styles.width_common} ${styles.title_box_category}`}><span className={styles.inner_title}>Đọc nhiều</span></h2>
                    <div className={styles.list_news_subfolder}> 
                        <article className={`${styles.item_news} ${styles.item_news_common}`} data-campaign="Box-QuanTamNhieu">
                            <h3 className={styles.title_news}><a href="triet-ly-lam-bong-da-4370904.html" data-medium="Item-1" data-thumb="0" title="Triết lý làm bóng đá">Triết lý làm bóng đá</a></h3>
                            <p className={styles.description}><a href="triet-ly-lam-bong-da-4370904.html" data-medium="Item-1" data-thumb="0" title="Triết lý làm bóng đá">Ông Park Hang-seo đã gắn bó với Việt Nam bốn năm, là bốn năm rất đẹp với người hâm mộ, những người đã đợi rất lâu để được tận hưởng những tấm huy chương ở khu vực và châu lục.</a></p>
                            <p className={styles.meta_news}>
                                <a href="tac-gia/ha-quang-minh-1465.html" className={`${styles.cat} ${styles.name_author} ${styles.right}`} title="Hà Quang Minh">Hà Quang Minh</a>
                            </p>
                        </article>
                        <article className={`${styles.item_news} ${styles.item_news_common}`} data-campaign="Box-QuanTamNhieu">
                            <h3 className={styles.title_news}><a href="den-truong-de-lam-gi-4376099.html" data-medium="Item-2" data-thumb="0" title="Đến trường để làm gì?">Đến trường để làm gì?</a></h3>
                            <p className={styles.description}><a href="den-truong-de-lam-gi-4376099.html" data-medium="Item-2" data-thumb="0" title="Đến trường để làm gì?">Tôi cảm nhận sâu sắc những mất mát trong tâm hồn của một giáo viên không được đến trường.</a></p>
                            <p className={styles.meta_news}>                    
                                <a href="tac-gia/tran-huong-thao-1523.html" className={`${styles.cat} ${styles.name_author} ${styles.right}`} title="Trần Hương Thảo">Trần Hương Thảo</a>
                            </p>
                        </article>
                        <article className={`${styles.item_news} ${styles.item_news_common}`} data-campaign="Box-QuanTamNhieu">
                            <h3 className={styles.title_news}><a href="tiep-tuc-hay-dung-facebook-4372548.html" data-medium="Item-3" data-thumb="0" title="Tiếp tục hay dừng Facebook?">Tiếp tục hay dừng Facebook?</a></h3>
                            <p className={styles.description}><a href="tiep-tuc-hay-dung-facebook-4372548.html" data-medium="Item-3" data-thumb="0" title="Tiếp tục hay dừng Facebook?">Tôi sống hai cuộc đời. Cuộc đời thực đôi khi tẻ nhạt và một cuộc đời ảo sinh động trên Facebook.</a></p>
                            <p  className={styles.meta_news}>
                                <a href="tac-gia/bui-phu-chau-935.html" className={`${styles.cat} ${styles.name_author} ${styles.right}`} title="Bùi Phú Châu">Bùi Phú Châu</a>
                            </p>
                        </article>
                    </div>
                </div>
                <div className={`${styles.box_category} ${styles.box_quantamnhieu} ${styles.box_binhluannhieu}`}>
                    <h2 className={`${styles.width_common} ${styles.title_box_category}`}><a href="goc-nhin/binh-luan-nhieu.html" title="Bình luận nhiều" className={styles.inner_title}>Bình luận nhiều</a></h2>
                    <div className={styles.list_news_subfolder}>
                        <article className={`${styles.item_news} ${styles.item_news_common}`} data-campaign="Box-QuanBinhLuanNhieu">
                            <h3 className={styles.title_news}><a href="den-truong-hay-o-nha-4375149.html" data-medium="Item-1" data-thumb="0" title="Đến trường hay ở nhà?">Đến trường hay ở nhà?</a></h3>
                            <p className={styles.description}><a href="den-truong-hay-o-nha-4375149.html" data-medium="Item-1" data-thumb="0" title="Đến trường hay ở nhà?">Buổi họp phụ huynh online đầu tiên của năm học biến thành cuộc tranh luận: cho các con đến trường hay tiếp tục học online ở nhà.</a></p>
                            <p className={styles.meta_news}>
                                <a href="tac-gia/nguyen-thi-thu-hien-1311.html" className={`${styles.cat} ${styles.name_author} ${styles.right}`} title="Nguyễn Thị Thu Hiền">Nguyễn Thị Thu Hiền</a>
                            </p>
                        </article>
                        <article className={`${styles.item_news} ${styles.item_news_common}`} data-campaign="Box-QuanBinhLuanNhieu">
                            <h3 className={styles.title_news}><a href="khat-lao-dong-4374668.html" data-medium="Item-2" data-thumb="0" title="Khát lao động">Khát lao động</a></h3>
                            <p className={styles.description}><a href="khat-lao-dong-4374668.html" data-medium="Item-2" data-thumb="0" title="Khát lao động">Hàng chục doanh nghiệp phía Nam tôi quen buộc phải thu hẹp quy mô hoặc tiếp tục tạm dừng sản xuất bởi cùng lý do: thiếu người làm.</a></p>
                            <p className={styles.meta_news}>
                                <a href="tac-gia/ngo-trong-thanh-1006.html" className={`${styles.cat} ${styles.name_author} ${styles.right}`} title="Ngô Trọng Thanh">Ngô Trọng Thanh</a>
                            </p>
                        </article>
                        <article className={`${styles.item_news} ${styles.item_news_common}`} data-campaign="Box-QuanBinhLuanNhieu">
                            <h3 className={styles.title_news}><a href="chan-tu-4375886.html" data-medium="Item-3" data-thumb="0" title="Chân tu">Chân tu</a></h3>
                            <p className={styles.description}><a href="chan-tu-4375886.html" data-medium="Item-3" data-thumb="0" title="Chân tu">Ý nghĩ Đại lão hòa thượng Thích Phổ Tuệ sao không sống thêm cứ quanh quẩn với tôi vài ngày nay.</a></p>
                            <p className={styles.meta_news}>
                                <a href="tac-gia/nguyen-van-tho-28.html" className={`${styles.cat} ${styles.name_author} ${styles.right}`} title="Nguyễn Văn Thọ">Nguyễn Văn Thọ</a>
                            </p>
                        </article>
                    </div>
                    <div className={styles.xemthem_colright}>
                        <a title="Bình luận nhiều" href="goc-nhin/binh-luan-nhieu.html">Xem thêm</a>
                    </div>
                </div>
            </div>
        </div>
    </section>


    
    </>
);
}

export default GocNhin