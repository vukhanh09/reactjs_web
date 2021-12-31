
import {dataAcc} from './users.js'
import { useEffect,useState } from 'react';
import styles from "./CSS/ManageAcc.module.css"
import AdminTool from "../components/AdminTool"

function ManageAcc(){
    const cols = ['username','email','nick_name','address','date_of_birth']
    const [searchUser,setSearchUser] = useState('')
    const [searchFullName,setSearchFullName] = useState('')

    useEffect(()=>{
        var table = document.getElementById("tableAccount");
        for(let i = 0; i < dataAcc.length;i++){
            var row = table.insertRow(1);
            for(let num_row = 0; num_row < cols.length;num_row ++){
                var cell = row.insertCell(num_row);
                cell.innerHTML = dataAcc[i][cols[num_row]];
            }
        }
    },[dataAcc])


    return (
        <div className={styles.container}>
            <div className={styles.leftElement}>
                <AdminTool/>
            </div>
            <div className={styles.inner}></div>
            <div className={styles.rightElement}>
                <h3 className={styles.title}>Account Manager</h3>

                <div className={styles.searchAcc}>

                    <div className={styles.fieldSearch}>
                        <label>Username</label>
                        <input type='text' id='username' className={styles.searchArea} onChange={e=> setSearchUser(e.target.value)}/>
                    </div>
                    <div className={styles.fieldSearch}>
                        <label>Full name</label>
                        <input type='text' id ='fullName' className={styles.searchArea} onChange={e=> setSearchFullName(e.target.value)}/>
                    </div>

                    <button className={styles.searchBtn}>Tìm kiếm</button>

                </div>

                <table id="tableAccount" className={styles.tableAcc}>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Full name</th>
                        <th>Address</th>
                        <th>Date of birth</th>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ManageAcc