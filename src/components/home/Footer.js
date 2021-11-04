import React from "react";
import './Footer.css'
import logoImage from '../../assets/logo-design.png'
import appStore from '../../assets/app-store.png'
import appStore1 from '../../assets/app-store2.png'
import playStore from '../../assets/play-store.png'
import playStore1 from '../../assets/play-store2.png'


function Footer(){
    return(
        <div className='footer text-color'>
            <div className='footer-col-1'>
                <h3>About Us</h3>
                <p>Tổng biên tập: Nguyễn Hoàng Anh Tuấn</p>
                <p>+84376180160</p>
                <p>Địa chỉ: Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội</p>
            </div>
            <div className='footer-col-2'>
                <h3>Help</h3>
                <a href='/'><p>FAQS</p></a>
                <a href='/'><p>Điều khoản sử dụng</p></a>
                <a href='/'><p>Quảng cáo</p></a>
            </div>

            <div className='footer-col-3'>
                <img src={logoImage} className='col-3-logo'/>
                <p>Tờ báo uy tín số một Việt Nam</p>
            </div>

            <div className='footer-col-4'>
                <h3>Contact Us</h3>
                <a href='/'><p>Facebook</p></a>
                <a href='/'><p>Instagram</p></a>
                <a href='/'><p>Youtube</p></a>
            </div>

            <div className='footer-col-5'>
                <h3>Our Apps</h3>
                <div>
                    <p>Download our IOS app</p>
                    <img src={appStore} className='logo-col5'/>
                </div>
                <div>
                    <p>Download our Android app</p>
                    <img src={playStore} className='logo-col5'/>
                </div>
                
            </div>

        </div>
    )

}

export default Footer;