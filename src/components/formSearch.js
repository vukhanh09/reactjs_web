import react, {useState} from "react"
import styles from './CSS/formSearch.module.css'
import clsx from "clsx"
import { useNavigate } from 'react-router-dom';

function FormSearch(){
    const navigate = useNavigate();
    const [isClick_bt1,setClick_bt1] = useState(false)
    const [isClick_bt2,setClick_bt2] = useState(false)
    const handleToView = (e) =>{
        console.log(e.target.innerText)
        if(e.target.innerText=='Thời gian'){
            let x = document.querySelector(`.${styles.down_content1}`)
            if(!isClick_bt1){
                x.style.display = "block";
            }
            else{
                x.style.display = "none";

            }
            setClick_bt1(!isClick_bt1)
        }
        else if(e.target.innerText=='Chủ đề'){
            let x = document.querySelector(`.${styles.down_content2}`)
            if(!isClick_bt2){
                x.style.display = "block";
            }
            else{
                x.style.display = "none";

            }
            setClick_bt2(!isClick_bt2)

        }
    }
    return (
        <div className={styles.container}>
            <div class={styles.subnav}>
                <a class={styles.down_btn} onClick={e=>handleToView(e)}>
                Thời gian</a>
                <div class={styles.down_content1}>
                    <input type="radio" name="time" className={styles.radioCheck} id='1-week'/>
                    <label for="1-week">1 tuần qua</label><br/>
                    <input type="radio" name="time" className={styles.radioCheck} id='1-month'/>
                    <label for="1-month">1 tháng qua</label><br/>
                    <input type="radio" name="time" className={styles.radioCheck} id='1-year'/>
                    <label for="1-year">1 năm qua</label>

                    
                </div>
            </div> 
            <div class={styles.subnav}>
                <a class={styles.down_btn} onClick={e=>handleToView(e)}>
                        Chủ đề</a>
                <div class={`${styles.down_content2} ${styles.tmp}`}>
                <input type="radio" name="phanloai" className={styles.radioCheck} id='thoisu'/>
                    <label for="thoisu">Thời sự</label><br/>
                    <input type="radio" name="phanloai" className={styles.radioCheck} id='kinhte'/>
                    <label for="kinhte">Kinh tế</label><br/>
                    <input type="radio" name="phanloai" className={styles.radioCheck} id='dulich'/>
                    <label for="dulich">Du lịch</label>
                </div>
            </div> 
        </div>
    )

}
export default FormSearch