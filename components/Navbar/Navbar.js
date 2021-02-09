import React,{useRef,useEffect,useState} from 'react'
import styles from './Navbar.module.css'
import SearchIcon from '@material-ui/icons/Search';
import Container from '../Container/Container'
import {IconButton} from '@material-ui/core'
import Link from 'next/link'

export default function Navbar() {

	let inputRef = useRef(null)
	let inputWrapperRef = useRef(null)

	let [redirect,setRedirect] = useState(false)

	useEffect(() => {
		inputRef.current.addEventListener('focus',()=>{
			inputWrapperRef.current.classList.add('onfocuswrapper')
		})
		inputRef.current.addEventListener('blur',()=>{
			inputWrapperRef.current.classList.remove('onfocuswrapper')
		})
	}, [])


	return (
		<div className={styles.navbar}>
			<Container className={styles.navWrapper}>
				<div className={styles.logo}><h2><Link href='/'>Sellaway</Link></h2></div>
				<div ref={inputWrapperRef} className={styles.searchWrapper}>
					<input ref={inputRef} placeholder='Search...' className={styles.search} type="text"/>
					<IconButton className={styles.searchIcon}>
						<SearchIcon/>
					</IconButton>
					{/* </div> */}
				</div>
			 	<div className={styles.nav}>
			 		<div><Link href='/addItem'>Add An Item</Link></div>
			 		<div><Link href='/favItems'>Favourite Items</Link></div>
			 		<div><Link href='/yourItems'>Your Items</Link></div>
			 		<div className={styles.logout} 
			 		onClick={e=>{
			 			localStorage.removeItem('token')
			 			setRedirect(true)
			 		}}>Logout</div>
			 	</div>
			</Container>
		</div>
	)
}