import React from 'react'
import styles from './Card.module.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Card({item:{name,price,location,date,favedByUser},page}) {
	return (
		<div className={styles.card}>
			<div className={styles.cardImg}>
				<img src="mobile.jpeg" alt=""/>
			</div>
			<div className={styles.cardDesc}>
				<div>
					<h3>{name}</h3>
					<p><b>Rs</b> {price}</p>
				</div>

				<div className={styles.cardFooter}>
					<div className={styles.location}>
						{location}
					</div>
					<div className={styles.date}>
						{date}
					</div>
				</div>


				<IconButton className={`${styles.icon} ${styles.arrow}`}>
					<ArrowForwardIcon/>	
				</IconButton>
			</div>
			<IconButton className={`${styles.icon} ${styles.heart}`}>
				<FavoriteIcon style={{color:favedByUser?'red':'#ccc'}}/>	
			</IconButton>
			{
				(page=='self')?
				(
					<>
						<IconButton className={`${styles.icon} ${styles.edit}`}>
							<EditIcon/>	
						</IconButton>
						<IconButton className={`${styles.icon} ${styles.delete}`}>
							<DeleteIcon/>	
						</IconButton>
					</>
				):
				null
			}
		</div>
	)
}