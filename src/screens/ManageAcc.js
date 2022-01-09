
import {dataAcc} from './users.js'
import { useEffect,useState } from 'react';
import styles from "./CSS/ManageAcc.module.css"
import AdminTool from "../components/AdminTool"
import Cookies from 'js-cookie';
import axiosConfig from '../config/axiosConfig';

function ManageAcc(){
    const cols = ['username','email','nick_name','address','date_of_birth']
    const [searchUser,setSearchUser] = useState('')
    const [searchFullName,setSearchFullName] = useState('')
    const [listUser,setListUser] = useState([])

    const token = Cookies.get('access_token_admin')
    useEffect(()=>{
        
        axiosConfig.get('/users/get-list-users',{ headers: {"Authorization" : `Bearer ${token}`} })
        .then(res=>{
            const dataAcc = res.data.data.list_user
            console.log(dataAcc)
            setListUser(dataAcc)
            renderUser(dataAcc)
        })
        .catch(err=>console.log(err))
    },[])

    const renderUser = (dataAcc)=>{
        var table = document.getElementById("tableAccount");
        // table.innerHTML = ''
        for(let i = 0; i < dataAcc.length;i++){
            var row = table.insertRow(1);
            for(let num_row = 0; num_row < cols.length;num_row ++){
                var cell = row.insertCell(num_row);
                cell.innerHTML = dataAcc[i][cols[num_row]];
            }
        }
    }

    // useEffect(()=>{
    //     var table = document.getElementById("tableAccount");
    //     // table.innerHTML = ''
    //     for(let i = 0; i < listUser.length;i++){
    //         table.deleteRow(0);
    //     }
    //     renderUser(listUser)
    // },[listUser])

    

    const findUser = ()=>{
        var username
        var fullname
        if(!searchUser.length && !searchFullName.length){
            username = ''
            fullname = ''
            var table = document.getElementById("tableAccount");
            // table.innerHTML = ''
            for(let i = 0; i < listUser.length;i++){
                table.deleteRow(-1);
            }
            const token = Cookies.get('access_token_admin')
            axiosConfig.get('/users/get-list-users',{ headers: {"Authorization" : `Bearer ${token}`} })
            .then(res=>{
                const dataAcc = res.data.data.list_user
                console.log(dataAcc)
                setListUser(dataAcc)
                renderUser(dataAcc)
            })
            .catch(err=>console.log(err))
            return 0;
        }
        else if (!searchUser.length){
            username = '/end'
            fullname =  searchFullName
        }
        else if (!searchFullName.length){
            username = searchUser
            fullname =  '/end'
        }
        axiosConfig.get('/admin/find-user',{
            params:{
                username:username,
                fullname:fullname
            },
            headers: {"Authorization" : `Bearer ${token}`}
        })
        .then(res=> {
            var table = document.getElementById("tableAccount");
            // table.innerHTML = ''
            for(let i = 0; i < listUser.length;i++){
                table.deleteRow(-1);
            }
            const dataAcc = res.data.data
            renderUser(dataAcc)
            setListUser(dataAcc)
        })

    }






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

                    <button className={styles.searchBtn} onClick={()=>findUser()}>Tìm kiếm</button>

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