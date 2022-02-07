import ItemXemNhieu from './ItemXemNhieu'
import styles from './CSS/XemNhieu.module.css'
import { useEffect, useState } from 'react'
import { getTop10News } from '../../api/newsApi'

function XemNhieu(){
    const [dataMostViewer, setDataMostViewer] = useState([])
    useEffect(() => {
        getTop10News()
        .then( res => {
            console.log(res.data);
            setDataMostViewer(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    const dataTop5 = dataMostViewer.filter((item, index) => index < 5)
    const dataTop5_10 = dataMostViewer.filter((item, index) => index >= 5)
    return (
        <div className={styles.XemNhieu}>
            <h1>Xem nhiều</h1>
            <div className={styles.TableXemNhieu}>
                <div className={styles.listTop5}>
                    {
                        dataTop5.map((data, index)=> <ItemXemNhieu top={index + 1} key={index} title ={data.title}
                            op = {index!==5?1:0}
                        />)
                    }

                </div>
                <div className={styles.listTop5_10}>
                    {
                        dataTop5_10.map((data, index)=> <ItemXemNhieu key={index} top={index + 6} title ={data.title}
                            op = {index!==10?1:0}
                        />)
                    }
                    
                </div>

            </div>
        </div>
    )


}
export default XemNhieu