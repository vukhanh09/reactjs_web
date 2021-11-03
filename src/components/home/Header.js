import React from "react";
import searchImage from '../../assets/magnifier.png'
import userImage from '../../assets/user1.png'
import menuImage from '../../assets/squares.png'
import './HeaderCSS.css'
import {useState} from 'react'

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
  const [dateCurr,setDateCurr] = useState(date.toLocaleDateString())
  const [dayCurr,setDayCurr] = useState(dictDay[date.getDate()])

  const listTopic = [['Thời sự','thoi-su'],['Góc nhìn','goc-nhin'],['Thế giới','the-gioi'],
  ['Kinh doanh','kinh-doanh'],['Giải trí','giai-tri'],['Thể thao','the-thao'],
  ['Khoa học','khoa-hoc'],['Giáo dục','giao-duc'],['Sức khỏe','suc-khoe'],['Du lịch','du-lich']]

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

      <nar className="nar-bar">
        <ul className='text-color nar-menu'>
          {
            listTopic.map(topic => <li ><a href={`/${topic[1]}`} >{topic[0]}</a></li>)
          }
          <li >
            <a>
              Tất cả
            </a>

          </li>
        </ul>

      </nar>
      
    </div>
  );
}

export default Header;
