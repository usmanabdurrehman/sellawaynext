import {useState} from 'react'
import styles from '../styles/forms.module.css'
import {TextField,Button} from '@material-ui/core'
import axios from 'axios'

export default function Signup() {

	let [fields,setFields] = useState({
		fname:'',
		lname:'',
		email:'',
		pwd:''
	})

	let [redirect,setRedirect] = useState(false)

	let clickHandler = () => {
		axios({
			url:'/signup',
			method:'post',
			withCredentials:true,
			data:fields
		})
		.then(res=>{
			console.log(res.data)
			if(res.data.status){
				setRedirect(true)
			}
			else{
				
			}
		})
	}

	return (
		<div className={styles.formWrapper}>
			<div className={styles.form}>
				<div className={styles.formImage}>
					<img src='signup.jpg'/>
				</div>
				<div className={styles.formFields}>
					<div>
						<h1>Sign Up</h1>
						<TextField onChange={e=>setFields({...fields,fname:e.target.value})} label='First Name' className={styles.formInput} fullWidth/>
						<TextField onChange={e=>setFields({...fields,lname:e.target.value})} label='Last Name' className={styles.formInput} fullWidth/>
						<TextField onChange={e=>setFields({...fields,email:e.target.value})} label='Email' className={styles.formInput} fullWidth/>
						<TextField onChange={e=>setFields({...fields,pwd:e.target.value})} type='password' label='Password' className={styles.formInput} fullWidth/>
						<Button onClick={clickHandler} className={styles.formButton}>Sign up</Button>
					</div>
				</div>
			</div>
		</div>
	)
}