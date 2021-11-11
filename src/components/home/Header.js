import React from "react";
import searchImage from '../../assets/magnifier.png'
import userImage from '../../assets/user1.png'
import menuImage from '../../assets/squares.png'
import './HeaderCSS.css'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function Header() {
    const dictDay = {
        0: 'Chủ nhật',
        1: 'Thứ Hai',
        2: 'Thứ Ba',
        3: 'Thứ Tư',
        4: 'Thứ Năm',
        5: 'Thứ Sáu',
        6: 'Thứ Bảy'
    }
    let date = new Date()
    const dateCurr = date.toLocaleDateString()
    const dayCurr = dictDay[date.getDate()]

    const listTopic = [
        ['Thời sự', 'thoi-su'],
        ['Góc nhìn', 'goc-nhin'],
        ['Thế giới', 'the-gioi'],
        ['Kinh doanh', 'kinh-doanh'],
        ['Giải trí', 'giai-tri'],
        ['Thể thao', 'the-thao'],
        ['Khoa học', 'khoa-hoc'],
        ['Giáo dục', 'giao-duc'],
        ['Sức khỏe', 'suc-khoe'],
        ['Du lịch', 'du-lich']
    ]

    const topicThoiSu = [
        ['Chính trị', 'thoi-su/chinh-tri'],
        ['Dân sinh', 'thoi-su/dan-sinh'],
        ['Giao thông', 'thoisu-dan-sinh']
    ]
    const toppicGocNhin = [
        ['Bình luận nhiều', 'goc-nhin/nhieu-binh-luan'],
        ['Covid-19', 'goc-nhin/covid-19'],
        ['Kinh doanh', 'goc-nhin/kinh-doanh']
    ]

    const [isScroll, setIsScroll] = useState('')
    const [VisibleMenuAll, setVisibleMenuAll] = useState(false)
    const [VisibleMenuTop, setVisibleMenuTop] = useState(71 + 47)


    useEffect(() => {
        const handlleScroll = () => {
            let x1 = document.querySelector('.nar-bar').clientHeight
            let x2 = document.querySelector('.tool-bar').clientHeight
            if (window.scrollY > 71) {
                setIsScroll('fixed')
                setVisibleMenuTop(x1)
            } else {
                setIsScroll('')
                setVisibleMenuTop(x1 + x2 - window.scrollY)
            }
        }

        window.addEventListener('scroll', handlleScroll)
    }, [])


    const handlleVisibleMenu = () => {
        setVisibleMenuAll(!VisibleMenuAll)
    }


    return (


            <
            div className = "Header" >
            <
            div className = "tool-bar" >
            <
            label className = 'namePaper' > Time News < /label> <
            label className = 'text-color text-date' > { `${dayCurr}, ${dateCurr}` } < /label>


            <
            div className = 'div-search' >
            <
            input type = 'text'
            placeholder = 'Nhập nội dung...'
            className = 'search' / >
            <
            img src = { searchImage }
            className = 'image'
            alt = 'search' / >
            <
            /div>

            <
            div className = 'div-user' >
            <
            img src = { userImage }
            className = 'userIcon' / >

            <
            Link to = "/login" > <
            p className = 'text-color' > Đăng nhập < /p>< /Link >

            <
            /div>

            <
            /div>

            <
            div className = "nar-bar"
            style = {
                { position: isScroll, top: 0 }
            } >
            <
            ul className = 'text-color nar-menu' > {
                listTopic.map(topic => < li > < a href = { `/${topic[1]}` } > { topic[0] } < /a></li > )
            } <
            li >
            <
            div className = 'div-user'
            onClick = { handlleVisibleMenu } >
            <
            a >
            Tất cả <
            /a> <
            img src = { menuImage }
            className = 'image'
            alt = 'menuImage' / >
            <
            /div>


            <
            /li> < /
            ul >



            <
            /div>






            {
                VisibleMenuAll && < div className = 'row-menu'
                style = {
                        { top: VisibleMenuTop }
                    } >
                    <
                    div className = 'row-menu-1 text-color' >
                    <
                    ul >
                    <
                    h2 > Thời sự < /h2> {
                topicThoiSu.map(topic => < li > < a href = { `/${topic[1]}` } > { topic[0] } < /a></li > )
            } <
            /ul> <
            ul >
            <
            Link to = "/goc-nhin" > <
            h2 > Góc nhìn < /h2>< /Link > < /
            ul > <
            ul >
            <
            h2 > Thời sự < /h2> {
            topicThoiSu.map(topic => < li > < a href = { `/${topic[1]}` } > { topic[0] } < /a></li > )
        } <
        /ul> <
    ul >
        <
        h2 > Góc nhìn < /h2> {
    toppicGocNhin.map(topic => < li > < a href = { `/${topic[1]}` } > { topic[0] } < /a></li > )
} <
/ul> <
ul >
    <
    h2 > Thời sự < /h2> {
topicThoiSu.map(topic => < li > < a href = { `/${topic[1]}` } > { topic[0] } < /a></li > )
} <
/ul>         < /
div >

    <
    div className = 'row-menu-2' >
    <
    ul >
    <
    h2 > Thời sự < /h2> {
topicThoiSu.map(topic => < li > < a href = { `/${topic[1]}` } > { topic[0] } < /a></li > )
} <
/ul> <
ul >
    <
    h2 > Góc nhìn < /h2> {
toppicGocNhin.map(topic => < li > < a href = { `/${topic[1]}` } > { topic[0] } < /a></li > )
} <
/ul> <
ul >
    <
    h2 > Thời sự < /h2> {
topicThoiSu.map(topic => < li > < a href = { `/${topic[1]}` } > { topic[0] } < /a></li > )
} <
/ul> <
ul >
    <
    h2 > Góc nhìn < /h2> {
toppicGocNhin.map(topic => < li > < a href = { `/${topic[1]}` } > { topic[0] } < /a></li > )
} <
/ul> <
ul >
    <
    h2 > Thời sự < /h2> {
topicThoiSu.map(topic => < li > < a href = { `/${topic[1]}` } > { topic[0] } < /a></li > )
} <
/ul>         < /
div > <
    br / >

    <
    /div>
}

<
/
div >
);
}

export default Header;