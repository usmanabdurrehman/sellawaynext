import React from 'react'
import Container from '../Container/Container'
import styles from './Footer1.module.css'

export default function Footer1() {
	return (
		<div className={styles.footer1}>
			<Container className={styles.footer1grid}>
				<div>
					<div>Cars</div>
					<div>Flats for rent</div>
					<div>Jobs</div>
					<div>Mobile Phones</div>
				</div>

				<div>
					<div>Bikes</div>
					<div>Watches</div>
					<div>Phones</div>
					<div>Dogs</div>
				</div>

				<div>
					<div>About Sellaway</div>
					<div>Sellaway Blog</div>
					<div>Contact Us</div>
					<div>Sellaway for Businesses</div>
				</div>

				<div>
					<div>Help</div>
					<div>Sitemap</div>
					<div>Legal & Privacy Information</div>
				</div>
			</Container>
		</div>
	)
}