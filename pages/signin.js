import {useState} from 'react'
import styles from '../styles/forms.module.css'
import {TextField,Button} from '@material-ui/core'
// import {useAlert} from 'react-alert'
import axios from 'axios'
import Head from 'next/head'

export default function Signin(props) {

	let [fields,setFields] = useState({
		email:'',
		pwd:''
	})

	let [redirect,setRedirect] = useState(false)

	let clickHandler = () => {
		axios({
			method:'post',
			url:'/signin',
			withCredentials:true,
			data:fields
		})
		.then(res=>{
			let {token,auth,user} = res.data
			if(auth==true){
				console.log(token)
				localStorage.setItem('token',JSON.stringify(token))
				setRedirect(true)
			}
		})
	}

	return (
		<div className={styles.formWrapper}>
			<Head>
				<title>Sign In</title>
			</Head>
			<div className={`${styles.form} ${styles.leftForm}`}>
				<div className={styles.formFields}>
					<div>
						<h1>Sign In</h1>
						<TextField onChange={e=>setFields({...fields,email:e.target.value})} label='Email' className={styles.formInput} fullWidth/>
						<TextField onChange={e=>setFields({...fields,pwd:e.target.value})} type='password' label='Password' className={styles.formInput} fullWidth/>
						<Button onClick={clickHandler} className={styles.formButton}>Sign In</Button>
					</div>
				</div>
				<div className={styles.formImage}>
					<img src='/signin.jpg'/>
				</div>
			</div>
		</div>
	)
}