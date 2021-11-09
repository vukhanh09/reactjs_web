import React from "react";
import MainStory from "./MainStory";
import SubStory from "./SubStory";
import './CSS/BodyHome.css'
import {subData} from './data.js'

function BodyHome(){
    return (
        <div className='container'>
            <div className='section_topstory'>
                <MainStory/>
                <div className='sub_story'>
                    {
                        subData.map(item=>{
                            return <SubStory title={item.title} index = {item.id == 3?true:false} description={item.description}/>
                        })
                    }
                </div>
            </div>

            <div className='section_middle'>
                <p>
                Tình hình dịch bệnh COVID-19 trên địa bàn tỉnh Lai Châu đang có chiều hướng phức tạp khi ghi nhận 13 ca dương tính với SARS-CoV-2 trong cộng đồng, trong đó có những trường hợp không rõ nguồn lây tại xã Bản Giang, huyện Tam Đường.

Nhiều người dân tại TP Lai Châu làm việc tại xã Bản Giang và có tiếp xúc với những trường hợp F0 trên.

Trước tình hình đó, chính quyền TP Lai Châu đã quyết định tạm dừng hoạt động một số dịch vụ không thiết yếu trên địa bàn từ ngày 7/11 đến ngày 13/11. Các đơn vị trường học trên địa bàn TP Lai Châu tạm thời cho học sinh nghỉ học tập trung từ ngày 8/11 đến ngày 14/11 và chuyển sang hình thức dạy học trực tuyến.

Thanh Hóa: Triển khai xét nghiệm diện rộng
Từ đầu đợt dịch lần 4 đến nay, Thanh Hoá ghi nhận 1.300 bệnh nhân COVID-19, với nhiều ổ dịch lớn lây lan trong cộng đồng như ổ dịch BVĐK Hợp Lực lan ra 12 huyện trên địa bàn tỉnh.  Hiện tại là ổ dịch tại TX Nghi Sơn, đến nay đã ghi nhận 71 ca mắc COVID-19, trong đó có nhiều ca bệnh là học sinh và giáo viên. Do vậy, các cơ sở giáo dục trên địa bàn TX này phải dừng việc học trực tiếp.

Từ 6/11, tỉnh Thanh Hóa triển khai xét nghiệm diện rộng trên toàn địa bàn tỉnh, đặc biệt chú trọng những khu vực có nguy cơ cao để sàng lọc, sớm phát hiện, truy vết nhanh các trường hợp F0 nhằm khoanh vùng, dập dịch, đồng thời đánh giá đúng tình hình dịch bệnh của từng địa phương và trên địa bàn toàn tỉnh để có phương án xử trí thích hợp, kịp thời.

An Giang: Nâng cấp độ dịch, tạm dừng hoạt động vận tải công cộng
Trong 24 giờ qua, tỉnh An Giang phát hiện 427 trường hợp mắc COVID-19, nâng tổng số trường hợp mắc COVID-19 từ ngày 15/4 đến nay là 13.534 trường hợp.

Đánh giá tình hình dịch bệnh có chiều hướng phức tạp, tỉnh An Giang đã ban hành quyết định áp dụng tạm thời các biện pháp hành chính ở cấp độ 3 trong phòng, chống dịch COVID-19 bắt đầu từ 08/11.
                </p>

            </div>

        </div>
    )
}

export default BodyHome