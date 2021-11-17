import ItemXemNhieu from './ItemXemNhieu'
import styles from './CSS/XemNhieu.module.css'
import {dataTop} from './dataTop.js'

function XemNhieu(){
    const dataTop5 = dataTop.filter(item=>item.id <=5)
    const dataTop5_10 = dataTop.filter(item=>item.id > 5)
    return (
        <div className={styles.XemNhieu}>
            <h1>Xem nhiều</h1>
            <div className={styles.TableXemNhieu}>
                <div className={styles.listTop5}>
                    {
                        dataTop5.map(data=> <ItemXemNhieu top={data.id} key={data.id} title ={data.title}/>)
                    }

                </div>
                <div className={styles.listTop5_10}>
                    {
                        dataTop5_10.map(data=> <ItemXemNhieu key={data.id} top={data.id} title ={data.title}/>)
                    }
                    
                </div>

            </div>
        </div>
    )


}
export default XemNhieu