import React from "react";
import searchImage from '../../assets/magnifier.png'
import userImage from '../../assets/user1.png'
import menuImage from '../../assets/squares.png'
import './HeaderCSS.css'
import {useState,useEffect} from 'react'

function Header() {
  const dictDay = {
    0:'Chủ nhật',
    1:'Thứ Hai',
    2:'Thứ Ba',
    3:'Thứ Tư',
    4:'Thứ Năm',
    5:'Thứ Sáu',
    6:'Thứ Bảy'
  }
  let date = new Date()
  const dateCurr = date.toLocaleDateString()
  const dayCurr = dictDay[date.getDate()]

  const listTopic = [['Thời sự','thoi-su'],['Góc nhìn','goc-nhin'],['Thế giới','the-gioi'],
  ['Kinh doanh','kinh-doanh'],['Giải trí','giai-tri'],['Thể thao','the-thao'],
  ['Khoa học','khoa-hoc'],['Giáo dục','giao-duc'],['Sức khỏe','suc-khoe'],['Du lịch','du-lich']]

  const topicThoiSu = [['Chính trị','thoi-su/chinh-tri'],['Dân sinh','thoi-su/dan-sinh'],['Giao thông','thoisu-dan-sinh']]
  const toppicGocNhin = [['Bình luận nhiều','goc-nhin/nhieu-binh-luan'],['Covid-19','goc-nhin/covid-19'],['Kinh doanh','goc-nhin/kinh-doanh']]

  const [isScroll,setIsScroll] = useState('')
  const [VisibleMenuAll,setVisibleMenuAll] = useState(false)
  const [VisibleMenuTop,setVisibleMenuTop] = useState(71+47)


  useEffect(()=>{
    const handlleScroll = ()=>{
      let x1 = document.querySelector('.nar-bar').clientHeight
      let x2 = document.querySelector('.tool-bar').clientHeight
      if(window.scrollY>71){
        setIsScroll('fixed')
        setVisibleMenuTop(x1)
      }else{
        setIsScroll('')
        setVisibleMenuTop(x1+x2-window.scrollY)
      }
    }

    window.addEventListener('scroll',handlleScroll)
  },[])

  
  const handlleVisibleMenu = ()=>{
    setVisibleMenuAll(!VisibleMenuAll)
  }


  return (
    <div className="Header">
      <div className="tool-bar">
        <label className='namePaper'>Time News</label>
        <label className='text-color text-date'>{`${dayCurr}, ${dateCurr}`}</label>

        
        <div className='div-search'>
            <input type='text' placeholder='Nhập nội dung...' className='search'/>
            <img src={searchImage} className='image' alt='search'/>
        </div>
            
        <div className='div-user'>
            <img src ={userImage} className='userIcon' />
            <p className='text-color'>Đăng nhập</p>

        </div>

      </div>

      <div className="nar-bar" style={{position:isScroll,top:0}}>
        <ul className='text-color nar-menu'>
          {
            listTopic.map(topic => <li ><a href={`/${topic[1]}`} >{topic[0]}</a></li>)
          }
          <li >
            <div className='div-user' onClick={handlleVisibleMenu}>
              <a>
                Tất cả
              </a>
              <img src={menuImage} className='image'  alt='menuImage'/>
            </div>


          </li>
        </ul>

        

      </div>




      

      {VisibleMenuAll &&<div className='row-menu' style={{top:VisibleMenuTop}}>
        <div className='row-menu-1 text-color'>
          <ul>
            <h2>Thời sự</h2>
            {
              topicThoiSu.map(topic => <li><a href={`/${topic[1]}`}>{topic[0]}</a></li>)
            }
          </ul>
          <ul>
            <h2>Góc nhìn</h2>
            {
              toppicGocNhin.map(topic => <li><a href={`/${topic[1]}`}>{topic[0]}</a></li>)
            }
          </ul>
          <ul>
            <h2>Thời sự</h2>
            {
              topicThoiSu.map(topic => <li><a href={`/${topic[1]}`}>{topic[0]}</a></li>)
            }
          </ul>
          <ul>
            <h2>Góc nhìn</h2>
            {
              toppicGocNhin.map(topic => <li><a href={`/${topic[1]}`}>{topic[0]}</a></li>)
            }
          </ul>
          <ul>
            <h2>Thời sự</h2>
            {
              topicThoiSu.map(topic => <li><a href={`/${topic[1]}`}>{topic[0]}</a></li>)
            }
          </ul>        
        </div>

        <div className='row-menu-2'>
          <ul>
            <h2>Thời sự</h2>
            {
              topicThoiSu.map(topic => <li><a href={`/${topic[1]}`}>{topic[0]}</a></li>)
            }
          </ul>
          <ul>
            <h2>Góc nhìn</h2>
            {
              toppicGocNhin.map(topic => <li><a href={`/${topic[1]}`}>{topic[0]}</a></li>)
            }
          </ul>
          <ul>
            <h2>Thời sự</h2>
            {
              topicThoiSu.map(topic => <li><a href={`/${topic[1]}`}>{topic[0]}</a></li>)
            }
          </ul>
          <ul>
            <h2>Góc nhìn</h2>
            {
              toppicGocNhin.map(topic => <li><a href={`/${topic[1]}`}>{topic[0]}</a></li>)
            }
          </ul>
          <ul>
            <h2>Thời sự</h2>
            {
              topicThoiSu.map(topic => <li><a href={`/${topic[1]}`}>{topic[0]}</a></li>)
            }
          </ul>        
        </div>
        <br/>
        
      </div>
      }


      <h1>Vietjet và Airbus trao thỏa thuận hợp tác chiến lược về cung cấp 184 tàu bay, phát triển mới đội tàu bay thân rộng và bàn giao 3 tàu bay thân rộng A330.

HDBank ký với tổ chức tài chính Phát triển Pháp (Proparco) tài trợ tín dụng dài hạn trị giá 100 triệu USD cho các dự án năng lượng tái tạo tại Việt Nam; ký với DEG (Đức) tổng giá trị thực hiện từ 200 tới 300 triệu USD trong lĩnh vực phát triển bền vững...

Tập đoàn T&T có loạt thỏa thuận hợp tác chiến lược với Total Eren trong lĩnh vực năng lượng tái tạo tại Việt Nam trị giá 3 tỷ USD. Tập đoàn này cũng thoả thuận với NG Biotech về nghiên cứu phát triển và chuyển giao công nghệ sản xuất 175 loại test nhanh, với đại diện Trung tâm phòng chống Ung thư Francois Baclesse xây dựng hệ thống bệnh viện chất lượng cao và bệnh viện tư nhân chuyên khoa về ung bướu tại TP HCM. Đồng thời, T&T cũng ký thoả thuận với đại diện Trường Quản trị Normandie về tư vấn xây dựng các mô hình giáo dục quốc tế chất lượng cao.</h1>
<h1>Vietjet và Airbus trao thỏa thuận hợp tác chiến lược về cung cấp 184 tàu bay, phát triển mới đội tàu bay thân rộng và bàn giao 3 tàu bay thân rộng A330.

HDBank ký với tổ chức tài chính Phát triển Pháp (Proparco) tài trợ tín dụng dài hạn trị giá 100 triệu USD cho các dự án năng lượng tái tạo tại Việt Nam; ký với DEG (Đức) tổng giá trị thực hiện từ 200 tới 300 triệu USD trong lĩnh vực phát triển bền vững...

Tập đoàn T&T có loạt thỏa thuận hợp tác chiến lược với Total Eren trong lĩnh vực năng lượng tái tạo tại Việt Nam trị giá 3 tỷ USD. Tập đoàn này cũng thoả thuận với NG Biotech về nghiên cứu phát triển và chuyển giao công nghệ sản xuất 175 loại test nhanh, với đại diện Trung tâm phòng chống Ung thư Francois Baclesse xây dựng hệ thống bệnh viện chất lượng cao và bệnh viện tư nhân chuyên khoa về ung bướu tại TP HCM. Đồng thời, T&T cũng ký thoả thuận với đại diện Trường Quản trị Normandie về tư vấn xây dựng các mô hình giáo dục quốc tế chất lượng cao.</h1>
<h1>Vietjet và Airbus trao thỏa thuận hợp tác chiến lược về cung cấp 184 tàu bay, phát triển mới đội tàu bay thân rộng và bàn giao 3 tàu bay thân rộng A330.

HDBank ký với tổ chức tài chính Phát triển Pháp (Proparco) tài trợ tín dụng dài hạn trị giá 100 triệu USD cho các dự án năng lượng tái tạo tại Việt Nam; ký với DEG (Đức) tổng giá trị thực hiện từ 200 tới 300 triệu USD trong lĩnh vực phát triển bền vững...

Tập đoàn T&T có loạt thỏa thuận hợp tác chiến lược với Total Eren trong lĩnh vực năng lượng tái tạo tại Việt Nam trị giá 3 tỷ USD. Tập đoàn này cũng thoả thuận với NG Biotech về nghiên cứu phát triển và chuyển giao công nghệ sản xuất 175 loại test nhanh, với đại diện Trung tâm phòng chống Ung thư Francois Baclesse xây dựng hệ thống bệnh viện chất lượng cao và bệnh viện tư nhân chuyên khoa về ung bướu tại TP HCM. Đồng thời, T&T cũng ký thoả thuận với đại diện Trường Quản trị Normandie về tư vấn xây dựng các mô hình giáo dục quốc tế chất lượng cao.</h1>
<h1>Vietjet và Airbus trao thỏa thuận hợp tác chiến lược về cung cấp 184 tàu bay, phát triển mới đội tàu bay thân rộng và bàn giao 3 tàu bay thân rộng A330.

HDBank ký với tổ chức tài chính Phát triển Pháp (Proparco) tài trợ tín dụng dài hạn trị giá 100 triệu USD cho các dự án năng lượng tái tạo tại Việt Nam; ký với DEG (Đức) tổng giá trị thực hiện từ 200 tới 300 triệu USD trong lĩnh vực phát triển bền vững...

Tập đoàn T&T có loạt thỏa thuận hợp tác chiến lược với Total Eren trong lĩnh vực năng lượng tái tạo tại Việt Nam trị giá 3 tỷ USD. Tập đoàn này cũng thoả thuận với NG Biotech về nghiên cứu phát triển và chuyển giao công nghệ sản xuất 175 loại test nhanh, với đại diện Trung tâm phòng chống Ung thư Francois Baclesse xây dựng hệ thống bệnh viện chất lượng cao và bệnh viện tư nhân chuyên khoa về ung bướu tại TP HCM. Đồng thời, T&T cũng ký thoả thuận với đại diện Trường Quản trị Normandie về tư vấn xây dựng các mô hình giáo dục quốc tế chất lượng cao.</h1>
<h1>Vietjet và Airbus trao thỏa thuận hợp tác chiến lược về cung cấp 184 tàu bay, phát triển mới đội tàu bay thân rộng và bàn giao 3 tàu bay thân rộng A330.

HDBank ký với tổ chức tài chính Phát triển Pháp (Proparco) tài trợ tín dụng dài hạn trị giá 100 triệu USD cho các dự án năng lượng tái tạo tại Việt Nam; ký với DEG (Đức) tổng giá trị thực hiện từ 200 tới 300 triệu USD trong lĩnh vực phát triển bền vững...

Tập đoàn T&T có loạt thỏa thuận hợp tác chiến lược với Total Eren trong lĩnh vực năng lượng tái tạo tại Việt Nam trị giá 3 tỷ USD. Tập đoàn này cũng thoả thuận với NG Biotech về nghiên cứu phát triển và chuyển giao công nghệ sản xuất 175 loại test nhanh, với đại diện Trung tâm phòng chống Ung thư Francois Baclesse xây dựng hệ thống bệnh viện chất lượng cao và bệnh viện tư nhân chuyên khoa về ung bướu tại TP HCM. Đồng thời, T&T cũng ký thoả thuận với đại diện Trường Quản trị Normandie về tư vấn xây dựng các mô hình giáo dục quốc tế chất lượng cao.</h1>
<h1>Vietjet và Airbus trao thỏa thuận hợp tác chiến lược về cung cấp 184 tàu bay, phát triển mới đội tàu bay thân rộng và bàn giao 3 tàu bay thân rộng A330.

HDBank ký với tổ chức tài chính Phát triển Pháp (Proparco) tài trợ tín dụng dài hạn trị giá 100 triệu USD cho các dự án năng lượng tái tạo tại Việt Nam; ký với DEG (Đức) tổng giá trị thực hiện từ 200 tới 300 triệu USD trong lĩnh vực phát triển bền vững...

Tập đoàn T&T có loạt thỏa thuận hợp tác chiến lược với Total Eren trong lĩnh vực năng lượng tái tạo tại Việt Nam trị giá 3 tỷ USD. Tập đoàn này cũng thoả thuận với NG Biotech về nghiên cứu phát triển và chuyển giao công nghệ sản xuất 175 loại test nhanh, với đại diện Trung tâm phòng chống Ung thư Francois Baclesse xây dựng hệ thống bệnh viện chất lượng cao và bệnh viện tư nhân chuyên khoa về ung bướu tại TP HCM. Đồng thời, T&T cũng ký thoả thuận với đại diện Trường Quản trị Normandie về tư vấn xây dựng các mô hình giáo dục quốc tế chất lượng cao.</h1>
<h1>Vietjet và Airbus trao thỏa thuận hợp tác chiến lược về cung cấp 184 tàu bay, phát triển mới đội tàu bay thân rộng và bàn giao 3 tàu bay thân rộng A330.

HDBank ký với tổ chức tài chính Phát triển Pháp (Proparco) tài trợ tín dụng dài hạn trị giá 100 triệu USD cho các dự án năng lượng tái tạo tại Việt Nam; ký với DEG (Đức) tổng giá trị thực hiện từ 200 tới 300 triệu USD trong lĩnh vực phát triển bền vững...

Tập đoàn T&T có loạt thỏa thuận hợp tác chiến lược với Total Eren trong lĩnh vực năng lượng tái tạo tại Việt Nam trị giá 3 tỷ USD. Tập đoàn này cũng thoả thuận với NG Biotech về nghiên cứu phát triển và chuyển giao công nghệ sản xuất 175 loại test nhanh, với đại diện Trung tâm phòng chống Ung thư Francois Baclesse xây dựng hệ thống bệnh viện chất lượng cao và bệnh viện tư nhân chuyên khoa về ung bướu tại TP HCM. Đồng thời, T&T cũng ký thoả thuận với đại diện Trường Quản trị Normandie về tư vấn xây dựng các mô hình giáo dục quốc tế chất lượng cao.</h1>
<h1>Vietjet và Airbus trao thỏa thuận hợp tác chiến lược về cung cấp 184 tàu bay, phát triển mới đội tàu bay thân rộng và bàn giao 3 tàu bay thân rộng A330.

HDBank ký với tổ chức tài chính Phát triển Pháp (Proparco) tài trợ tín dụng dài hạn trị giá 100 triệu USD cho các dự án năng lượng tái tạo tại Việt Nam; ký với DEG (Đức) tổng giá trị thực hiện từ 200 tới 300 triệu USD trong lĩnh vực phát triển bền vững...

Tập đoàn T&T có loạt thỏa thuận hợp tác chiến lược với Total Eren trong lĩnh vực năng lượng tái tạo tại Việt Nam trị giá 3 tỷ USD. Tập đoàn này cũng thoả thuận với NG Biotech về nghiên cứu phát triển và chuyển giao công nghệ sản xuất 175 loại test nhanh, với đại diện Trung tâm phòng chống Ung thư Francois Baclesse xây dựng hệ thống bệnh viện chất lượng cao và bệnh viện tư nhân chuyên khoa về ung bướu tại TP HCM. Đồng thời, T&T cũng ký thoả thuận với đại diện Trường Quản trị Normandie về tư vấn xây dựng các mô hình giáo dục quốc tế chất lượng cao.</h1>
<h1>Vietjet và Airbus trao thỏa thuận hợp tác chiến lược về cung cấp 184 tàu bay, phát triển mới đội tàu bay thân rộng và bàn giao 3 tàu bay thân rộng A330.

HDBank ký với tổ chức tài chính Phát triển Pháp (Proparco) tài trợ tín dụng dài hạn trị giá 100 triệu USD cho các dự án năng lượng tái tạo tại Việt Nam; ký với DEG (Đức) tổng giá trị thực hiện từ 200 tới 300 triệu USD trong lĩnh vực phát triển bền vững...

Tập đoàn T&T có loạt thỏa thuận hợp tác chiến lược với Total Eren trong lĩnh vực năng lượng tái tạo tại Việt Nam trị giá 3 tỷ USD. Tập đoàn này cũng thoả thuận với NG Biotech về nghiên cứu phát triển và chuyển giao công nghệ sản xuất 175 loại test nhanh, với đại diện Trung tâm phòng chống Ung thư Francois Baclesse xây dựng hệ thống bệnh viện chất lượng cao và bệnh viện tư nhân chuyên khoa về ung bướu tại TP HCM. Đồng thời, T&T cũng ký thoả thuận với đại diện Trường Quản trị Normandie về tư vấn xây dựng các mô hình giáo dục quốc tế chất lượng cao.</h1>
<h1>Vietjet và Airbus trao thỏa thuận hợp tác chiến lược về cung cấp 184 tàu bay, phát triển mới đội tàu bay thân rộng và bàn giao 3 tàu bay thân rộng A330.

HDBank ký với tổ chức tài chính Phát triển Pháp (Proparco) tài trợ tín dụng dài hạn trị giá 100 triệu USD cho các dự án năng lượng tái tạo tại Việt Nam; ký với DEG (Đức) tổng giá trị thực hiện từ 200 tới 300 triệu USD trong lĩnh vực phát triển bền vững...

Tập đoàn T&T có loạt thỏa thuận hợp tác chiến lược với Total Eren trong lĩnh vực năng lượng tái tạo tại Việt Nam trị giá 3 tỷ USD. Tập đoàn này cũng thoả thuận với NG Biotech về nghiên cứu phát triển và chuyển giao công nghệ sản xuất 175 loại test nhanh, với đại diện Trung tâm phòng chống Ung thư Francois Baclesse xây dựng hệ thống bệnh viện chất lượng cao và bệnh viện tư nhân chuyên khoa về ung bướu tại TP HCM. Đồng thời, T&T cũng ký thoả thuận với đại diện Trường Quản trị Normandie về tư vấn xây dựng các mô hình giáo dục quốc tế chất lượng cao.</h1>
<h1>Vietjet và Airbus trao thỏa thuận hợp tác chiến lược về cung cấp 184 tàu bay, phát triển mới đội tàu bay thân rộng và bàn giao 3 tàu bay thân rộng A330.

HDBank ký với tổ chức tài chính Phát triển Pháp (Proparco) tài trợ tín dụng dài hạn trị giá 100 triệu USD cho các dự án năng lượng tái tạo tại Việt Nam; ký với DEG (Đức) tổng giá trị thực hiện từ 200 tới 300 triệu USD trong lĩnh vực phát triển bền vững...

Tập đoàn T&T có loạt thỏa thuận hợp tác chiến lược với Total Eren trong lĩnh vực năng lượng tái tạo tại Việt Nam trị giá 3 tỷ USD. Tập đoàn này cũng thoả thuận với NG Biotech về nghiên cứu phát triển và chuyển giao công nghệ sản xuất 175 loại test nhanh, với đại diện Trung tâm phòng chống Ung thư Francois Baclesse xây dựng hệ thống bệnh viện chất lượng cao và bệnh viện tư nhân chuyên khoa về ung bướu tại TP HCM. Đồng thời, T&T cũng ký thoả thuận với đại diện Trường Quản trị Normandie về tư vấn xây dựng các mô hình giáo dục quốc tế chất lượng cao.</h1>
    </div>
  );
}

export default Header;
