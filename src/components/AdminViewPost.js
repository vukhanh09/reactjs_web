

import styles from './CSS/AdminViewPost.module.css'
import clsx from 'clsx'
function AdminViewPost(){
    const displayUpdate = (id)=>{
        const res = document.getElementById(id)
        if (res.style.display === 'flex'){
            res.style.display = 'none'
        }
        else{
            res.style.display = 'flex'
        }
    }

    const contet = `Các điểm quan trắc của Hà Nội, Đại sứ quán Mỹ đều hiển thị chất lượng không khí thủ đô ở mức xấu đến rất xấu.

    12h ngày 12/12, chỉ có bốn trên tổng số hơn 30 trạm quan trắc ô nhiễm không khí của Sở Tài nguyên và Môi trường Hà Nội hiện thị chỉ số. Ba trong bốn trạm này chỉ số chất lượng không khí (AQI) trên 200, ở mức rất xấu, cảnh báo mọi người bị ảnh hưởng sức khỏe nghiêm trọng.
    
    Cụ thể, trạm đo tại Tây Mỗ, huyện Bắc Từ Liêm có chỉ số AQI là 232; tại công viên hồ Thành Công, quận Ba Đình là 231; tại Kim Liên, quận Đống Đa là 211, Trung Hòa, quận Cầu Giấy là 134.
    
    Cùng lúc này, trạm quan trắc tại đường Nguyễn Văn Cừ quận Long Biên hiển thị chỉ số AQI 132. Trạm của Đại sứ quán Mỹ ở Hoàn Kiếm là 176.`
    return (
        <div className={styles.container}>
            <div className={styles.title}>Thông tin bài báo</div>
            <div className={styles.content}>
                <div className={styles.group}>
                    <div className={styles.infor}>
                        <label className={styles.column}>Chủ để</label>
                        <label className={styles.midColumn}>vukhanh09</label>
                        <label className={clsx(styles.lastColumn,styles.replaceInfor)}
                            onClick={()=>displayUpdate(0)}
                        >Thay đổi</label>
                    </div>
                    <div className={styles.update} id={0}>
                        <lable className={styles.column}>
                            Cập nhật thông tin
                        </lable>
                        <input placeholder='Nhập thông tin...'
                            className={clsx(styles.midColumn,styles.inputUpdate)}
                        />
                        <lable className={clsx(styles.lastColumn,styles.replaceInfor)}>Lưu thay đổi</lable>


                    </div>
                </div>

                <div className={styles.group}>
                    <div className={styles.infor}>
                        <label className={styles.column}>Tác giả</label>
                        <label className={styles.midColumn}>Vũ Khánh</label>
                        <label className={clsx(styles.lastColumn,styles.replaceInfor)}
                            onClick={()=>displayUpdate(1)}
                        >Thay đổi</label>
                    </div>
                    <div className={styles.update} id={1}>
                        <lable className={styles.column}>
                            Cập nhật thông tin
                        </lable>
                        <input placeholder='Nhập thông tin...' 
                            className={clsx(styles.midColumn,styles.inputUpdate)}
                        />
                        <lable className={clsx(styles.lastColumn,styles.replaceInfor)}>Lưu thay đổi</lable>


                    </div>
                </div>

                <div className={styles.group}>
                    <div className={styles.infor}>
                        <label className={styles.column}>Tiêu đề</label>
                        <label className={styles.midColumn}>Vũ Xuân Khánh</label>
                        <label className={clsx(styles.lastColumn,styles.replaceInfor)}
                            onClick={()=>displayUpdate(2)}
                        >Thay đổi</label>
                    </div>
                    <div className={styles.update} id={2}>
                        <lable className={styles.column}>
                            Cập nhật thông tin
                        </lable>
                        <input placeholder='Nhập thông tin...'
                            className={clsx(styles.midColumn,styles.inputUpdate)}
                        />
                        <lable className={clsx(styles.lastColumn,styles.replaceInfor)}>Lưu thay đổi</lable>


                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.infor}>
                        <label className={styles.column}>Mô tả</label>
                        <label className={styles.midColumn}>vukhanh0920@gmail.com</label>
                        <label className={clsx(styles.lastColumn,styles.replaceInfor)}
                            onClick={()=>displayUpdate(3)}
                        >Thay đổi</label>
                    </div>
                    <div className={styles.update} id={3}>
                        <lable className={styles.column}>
                            Cập nhật thông tin
                        </lable>
                        <textarea type='text' placeholder='Nhập thông tin...' 
                            className={clsx(styles.midColumn,styles.inputUpdate,styles.desArea)}
                        />
                        <lable className={clsx(styles.lastColumn,styles.replaceInfor)}>Lưu thay đổi</lable>


                    </div>
                </div>

                <div className={styles.group}>
                    <div className={styles.infor}>
                        <label className={styles.column}>Mô tả phụ</label>
                        <label className={styles.midColumn}>vukhanh0920@gmail.com</label>
                        <label className={clsx(styles.lastColumn,styles.replaceInfor)}
                            onClick={()=>displayUpdate(4)}
                        >Thay đổi</label>
                    </div>
                    <div className={styles.update} id={4}>
                        <lable className={styles.column}>
                            Cập nhật thông tin
                        </lable>
                        <textarea type='text' placeholder='Nhập thông tin...' 
                            className={clsx(styles.midColumn,styles.inputUpdate,styles.desArea)}
                        />
                        <lable className={clsx(styles.lastColumn,styles.replaceInfor)}>Lưu thay đổi</lable>


                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.infor}>
                        <label className={styles.column}>Nội dung</label>
                        <textarea type='text' placeholder='Nhập thông tin...' 
                            className={clsx(styles.midColumn,styles.contentPost,styles.disablePost)}
                            value={contet}
                            disabled={true}
                        />
                        {/* <label className={styles.midColumn}>vukhanh0920@gmail.com</label> */}
                        <label className={clsx(styles.lastColumn,styles.replaceInfor)}
                            onClick={()=>displayUpdate(5)}
                        >Thay đổi</label>
                    </div>
                    <div className={styles.update} id={5}>
                        <lable className={styles.column}>
                            Cập nhật thông tin
                        </lable>
                        <textarea type='text' placeholder='Nhập thông tin...' 
                            className={clsx(styles.midColumn,styles.inputUpdate,styles.contentPost)}
                        />
                        <lable className={clsx(styles.lastColumn,styles.replaceInfor)}>Lưu thay đổi</lable>


                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.infor}>
                        <label className={styles.column}>Đính kèm url của ảnh</label>
                        <label className={styles.midColumn}>vukhanh0920@gmail.com</label>
                        <label className={clsx(styles.lastColumn,styles.replaceInfor)}
                            onClick={()=>displayUpdate(6)}
                        >Thay đổi</label>
                    </div>
                    <div className={styles.update} id={6}>
                        <lable className={styles.column}>
                            Cập nhật thông tin
                        </lable>
                        <textarea type='text' placeholder='Nhập thông tin...' 
                            className={clsx(styles.midColumn,styles.inputUpdate)}
                        />
                        <lable className={clsx(styles.lastColumn,styles.replaceInfor,styles.desArea)}>Lưu thay đổi</lable>


                    </div>
                </div>
            </div>
        </div>
    )
}


export default AdminViewPost