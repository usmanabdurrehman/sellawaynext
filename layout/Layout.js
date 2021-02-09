import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer1 from '../components/Footer1/Footer1'
import Footer from '../components/Footer/Footer'
import Container from '../components/Container/Container'
import classes from './Layout.module.css'

export default function Layout({container,children}) {
	return (
		<div className={classes.layout}>
			<Navbar/>
			<div className={classes.layoutContainer}>
				{
					container?
					(
						<Container>
							{children}
						</Container>	
					)
					:
					(
					<>{children}</>
					)
				}
			</div>
			<Footer1/>
			<Footer/>
		</div>
	)
}