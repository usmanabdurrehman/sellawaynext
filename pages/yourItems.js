import React,{useState,useEffect} from 'react'
import styles from '../styles/yourItems.module.css'
import Layout from '../layout/layout'
import Card from '../components/Card/Card'
import CardContainer from '../components/CardContainer/CardContainer'
import axios from 'axios'

export default function YourItems({items}) {

	return (
		<Layout container>
			<div className={styles.yourItems}>
				<h1>Your Items</h1>
					{(items.length==0)?(<p>Looks like you havent added any items. Want to <a href="">Add an Item?</a></p>):
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
		url: "http://localhost:7000/user/yourItems",
		withCredentials: true,
	})
	let items = res.data.status ? res.data.items : []

	return {
		props: { items }, 
	};
}