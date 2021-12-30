
import {dataAcc} from './users.js'
import { useEffect } from 'react';
import styles from "./CSS/ManageAcc.module.css"
import AdminTool from "../components/AdminTool"
import SearchAccount from '../components/SearchAccount.js';

function ManageAcc(){
    const cols = ['username','email','nick_name','address','date_of_birth']

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
                <SearchAccount/>
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