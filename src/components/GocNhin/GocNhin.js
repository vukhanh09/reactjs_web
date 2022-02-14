import React, { useEffect, useState } from "react";
import styles from './CSS/gocnhin.module.css';
import { useNavigate } from 'react-router-dom';
import { getTop5Author } from "../../api/authorApi";
import { getTop10Perspective } from "../../api/perspectiveApi";

function GocNhin() {
    const [top5Author, setTop5Author] = useState([])
    const [itemNews, setItemNews] = useState([])
    const [listNewsSubfolder, setListNewsSubfolder] = useState([])
    const [manyComments, setManyComments] = useState([])

    const navigate = useNavigate();
    const navigatePath = function(path){
        if (window.location.pathname !== path){
            navigate(path)
        }
    
      }

    useEffect(() => {
        getTop5Author()
        .then(res => {
            setTop5Author(res.data)
        }).catch((err) => {
            console.log(err)
        })

        getTop10Perspective()
        .then(res => {
            setItemNews(res.data.filter((item, index) => index < 6))
            setListNewsSubfolder(res.data.filter((item, index) => index >= 6 && index < 8))
            setManyComments(res.data.filter((item, index) => index < 10 && index >= 8))
        })
    },[])

      const item_news_author = [ 
        {
          title: 'Tầm nhìn điện gió',
          description: 'Tôi bắt đầu nghiên cứu đầu tư vào điện gió 13 năm trước, khi gia nhập một quỹ về môi trường và năng lượng sạch của Mỹ tại Việt Nam.',
          name: 'Nguyễn Đăng Anh Thi',
          category: 'Chính trị & chính sách',
        },
      ];

      const item_news = [ 
        {
          id: '01',
          title: 'Năng lực kháng thương',
          description: 'Một ngày mưa tầm tã hiếm thấy ở Hà Nội, chúng tôi lắng nghe các ý kiến về khôi phục nhịp đập kinh tế trong bình thường mới.',
          name: 'Lê Đăng Doanh',
          category: 'Kinh doanh & quản trị',
          url_image: 'https://i1-vnexpress.vnecdn.net/2019/12/16/ledangdoanhpng-1576437381.png?w=100&h=100&q=100&dpr=2&fit=crop&s=q58nFlDAY3eKdcoijf8m2w',
        },
        {
            id: '02',
            title: 'Học thôi, đừng sợ',
            description: 'Cháu tôi, đang học lớp 9, đã được đến trường hơn một tuần qua: vui vẻ và rất hào hứng; khác hẳn khoảng thời gian phải đút chân vào gầm bàn học online.',
            url_image: 'https://i1-vnexpress.vnecdn.net/2021/12/28/IMG31422JPG-1640702351.jpg?w=100&h=100&q=100&dpr=2&fit=crop&s=yp_B4cxWsHWcK9xecqRZ1g',
            name: 'Trương Hữu Khanh ',
            category: 'Giáo dục & tri thức',
        },
        {
            id: '03',
            title: 'Những người thiện tâm',
            description: 'Một linh mục Dòng Chúa Cứu Thế ở trong khu cách ly đảm nhận việc dâng thánh lễ mỗi ngày. Ông cũng quét nhà, đổ rác, chăm sóc F0.',
            url_image: 'https://i1-vnexpress.vnecdn.net/2017/07/06/nguyendongokpng-1499298246.png?w=100&h=100&q=100&dpr=2&fit=crop&s=mxROAfncRhBuQQv2mGTA8Q',
            name: 'Nguyễn Đông' ,
            category: 'Văn hóa & lối sống',
        },
      ];
  
      const list_topic = [ 
        {
          id: '01',
          category: 'Chính trị & chính sách',
        },
        {
            id: '02',
            category: 'Y tế & sức khỏe',
        },
        {
            id: '03',
            category: 'Kinh doanh & quản trị',
        },
        {
            id: '04',
            category: 'Giáo dục & tri thức',
        },
        {
            id: '05',
            category: 'Văn hóa & lối sống',
        },
      ];
     
      const  list_news_subfolder = [ 
        {
          id: '01',
          title: 'Triết lý làm bóng đá',
          description: 'Ông Park Hang-seo đã gắn bó với Việt Nam bốn năm, là bốn năm rất đẹp với người hâm mộ, những người đã đợi rất lâu để được tận hưởng những tấm huy chương ở khu vực và châu lục.',
          name: 'Hà Quang Minh',
        },
        {
            id: '02',
            title: 'Đến trường để làm gì?',
            description: 'Tôi cảm nhận sâu sắc những mất mát trong tâm hồn của một giáo viên không được đến trường.',
            name: 'Trần Hương Thảo',
        },
        {
            id: '03',
            title: 'Tiếp tục hay dừng Facebook?',
            description: 'Tôi sống hai cuộc đời. Cuộc đời thực đôi khi tẻ nhạt và một cuộc đời ảo sinh động trên Facebook.',
            name: 'Bùi Phú Châu',
        },
      ];
      
      const  box_binhluannhieu = [ 
        {
          id: '01',
          title: 'Đến trường hay ở nhà?',
          description: 'Buổi họp phụ huynh online đầu tiên của năm học biến thành cuộc tranh luận: cho các con đến trường hay tiếp tục học online ở nhà.',
          name: 'Nguyễn Thị Thu Hiền',
        },
        {
            id: '02',
            title: 'Khát lao động',
            description: 'Hàng chục doanh nghiệp phía Nam tôi quen buộc phải thu hẹp quy mô hoặc tiếp tục tạm dừng sản xuất bởi cùng lý do: thiếu người làm.',
            name: 'Ngô Trọng Thanh',
        },
      ];
  
return (
    <>
    <section className={`${styles.section} ${styles.top_header} ${styles.top_header_folder}`}>
        <div>
            <div className={`${styles.width_common} ${styles.top_folder} ${styles.flexbox}`}>
                <div className={styles.title_folder}>Góc nhìn</div>
            </div>
        </div>
    </section>
    <section className={`${styles.section} ${styles.section_container}`}>
        <div className={`${styles.container} ${styles.flexbox}`}>
            <div className={styles.col_left_home_gn}>
                <div className={`${styles.box_category} ${styles.box_author_home} ${styles.sticky}`}>
                    <h2 className={`${styles.width_common} ${styles.title_box_category}`}><a href="#" title="Tác giả"  className={styles.inner_title}>Tác giả</a></h2>
                    <ul className={styles.list_author_home}>
                        {top5Author.map((data) => (
                            <li key={data.author_id}>
                                <a href="#">{data.name}</a>
                            </li>
                        ))}
                    </ul>
                    <p className={`${styles.view_all} ${styles.width_common}`}><a href="#">Xem thêm »</a></p>
                </div>
            </div>
            <div className={`${styles.col_left_folder_v2} ${styles.col_center_home_gn}`}>
                <div className={`${styles.width_common} ${styles.list_news_subfolder} ${styles.list_stream_gocnhin}`} id="paging" data-url="/ajax/goc-nhin" data-container="paging" data-category="1003450" data-page="2" data-error="1" data-exclude="3">
                    {/* {item_news_author.map((data) => (
                        <article onClick={()=>navigatePath('/view-post')} key={data.id} className={`${styles.item_news} ${styles.item_news_common} ${styles.item_1} ${styles.art_top}`}>
                            <div  className={styles.thumb_art}>
                                <a className={`${styles.thumb} ${styles.thumb_1x1} ${styles.thumb_circle}`} href="" title="Nguyễn Đăng Anh Thi">
                                    <img src="https://i1-vnexpress.vnecdn.net/2021/11/09/nguyendanganhthipng1548661469png-1636469529.png?w=100&h=100&q=100&dpr=2&fit=crop&s=fMuj3i6faPMOR-fELv73qg" alt="Nguyễn Đăng Anh Thi" />
                                </a>
                            </div>
                            <h3 className={styles.title_news}><a data-medium="Item-1" data-thumb="0" href="" title="Tầm nhìn điện gió">{data.title}</a></h3>
                            <p className={styles.description}>
                                <a data-medium="Item-1" data-thumb="0" href="" title="Tầm nhìn điện gió">{data.description}</a>
                            </p>
                            <p className={styles.meta_news}>
                                <a href="" className={`${styles.cat} ${styles.parsed_cate}`} data-cate-id="1004930" title="Chính trị &amp; chính sách">
                                {data.category}</a>
                                <a href="" className={`${styles.cat} ${styles.name_author}`}  title="Nguyễn Đăng Anh Thi">{data.name}</a>
                            </p>
                        </article>
                    ))} */}
                  
                    {itemNews.map((data) => (
                        <article className={`${styles.item_news} ${styles.item_news_common} ${styles.item_2}`}>
                            <div className={styles.thumb_art}>
                                <a className={`${styles.thumb} ${styles.thumb_1x1} ${styles.thumb_circle}`} href="tac-gia/le-dang-doanh-1278.html" title="Lê Đăng Doanh">
                                    <img src={data.author_image}  />
                                </a>
                            </div>
                            <h3 className={styles.title_news}><a data-medium="Item-2" data-thumb="0" href="nang-luc-khang-thuong-4382608.html" title="Năng lực kháng thương">{data.title}</a></h3>
                            <p className={styles.description}>
                                <a data-medium="Item-2" data-thumb="0" href="nang-luc-khang-thuong-4382608.html" title="Năng lực kháng thương">{data.content[0]}</a>
                            </p>

                            <p className={styles.meta_news}>
                                <a href="/goc-nhin/kinh-doanh-quan-tri" className={`${styles.cat} ${styles.parsed_cate}`} data-cate-id="1004932" title="Kinh doanh &amp; quản trị">{data.description}</a>
                                <a href="tac-gia/le-dang-doanh-1278.html" className={`${styles.cat} ${styles.name_author}`} title="Lê Đăng Doanh">{data.author}</a>
                            </p>
                        </article>
                    ))} 
                </div>
                <input type="hidden" className={styles.lazy_more}  data-page="1" data-max-page="110" data-limit="20" data-total="2183" />
            </div>
            <div className={`${styles.col_right_folder_v2} ${styles.col_right_home_gn}`}>
                <div className={`${styles.box_category} ${styles.box_list_topic_gn}`}>
                    <h2 className={`${styles.width_common} ${styles.title_box_category}`}><a><span className={styles.inner_title} >Chủ đề</span></a></h2>
                        {list_topic.map((data) => (
                            <div className={styles.list_topic} key={data.id}> 
                                <a href="goc-nhin/covid-19.html" title="Covid-19">{data.category}</a>
                            </div>
                        ))}
                </div>
                <div className={`${styles.box_category} ${styles.box_quantamnhieu}`}>
                    <h2 className={`${styles.width_common} ${styles.title_box_category}`}><span className={styles.inner_title}>Đọc nhiều</span></h2>
                    <div className={styles.list_news_subfolder}> 
                        {listNewsSubfolder.map((data) => (
                            <article key={data.id} className={`${styles.item_news} ${styles.item_news_common}`} data-campaign="Box-QuanTamNhieu">
                                <h3 className={styles.title_news}><a href="triet-ly-lam-bong-da-4370904.html" data-medium="Item-1" data-thumb="0" title="Triết lý làm bóng đá">{data.title}</a></h3>
                                <p className={styles.description}><a href="triet-ly-lam-bong-da-4370904.html" data-medium="Item-1" data-thumb="0" title="Triết lý làm bóng đá">{data.content[0]}</a></p>
                                <p className={styles.meta_news}>
                                    <a href="tac-gia/ha-quang-minh-1465.html" className={`${styles.cat} ${styles.name_author} ${styles.right}`} title="Hà Quang Minh">{data.author}</a>
                                </p>
                            </article>
                        ))}
                       
                    </div>
                </div>
                <div className={`${styles.box_category} ${styles.box_quantamnhieu} ${styles.box_binhluannhieu}`}>
                    <h2 className={`${styles.width_common} ${styles.title_box_category}`}><a href="goc-nhin/binh-luan-nhieu.html" title="Bình luận nhiều" className={styles.inner_title}>Bình luận nhiều</a></h2>
                    <div className={styles.list_news_subfolder}>
                        {manyComments.map((data) => (
                            <article key={data.id} className={`${styles.item_news} ${styles.item_news_common}`} data-campaign="Box-QuanTamNhieu">
                                <h3 className={styles.title_news}><a href="triet-ly-lam-bong-da-4370904.html" data-medium="Item-1" data-thumb="0" title="Triết lý làm bóng đá">{data.title}</a></h3>
                                <p className={styles.description}><a href="triet-ly-lam-bong-da-4370904.html" data-medium="Item-1" data-thumb="0" title="Triết lý làm bóng đá">{data.content[0]}</a></p>
                                <p className={styles.meta_news}>
                                    <a href="tac-gia/ha-quang-minh-1465.html" className={`${styles.cat} ${styles.name_author} ${styles.right}`} title="Hà Quang Minh">{data.author}</a>
                                </p>
                            </article>
                        ))}
                       
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