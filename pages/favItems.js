import React,{useState,useEffect} from 'react'
import styles from '../styles/favItems.module.css'
import Layout from '../layout/layout'
import Card from '../components/Card/Card'
import CardContainer from '../components/CardContainer/CardContainer'
import axios from 'axios'

export default function FavItems({items}) {

	return (
		<Layout container>
			<div className={styles.favItems}>
				<h1>Favourite Items</h1>
					{(items.length==0)?(<p>Looks like you havent added any items to favourites</p>):
					(
						<CardContainer>
							{items.map(item=><Card item={item}/>)}
						</CardContainer>
					)}
			</div>
		</Layout>
	)
}

export async function getServerSideProps(context) {
	let res = await axios({
		url: "http://localhost:7000/user/favouriteItems",
		withCredentials: true,
	})
	let items = res.data.status ? res.data.items : []

	return {
		props: { items }, // will be passed to the page component as props
	};
}