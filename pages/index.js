import React, { useState, useEffect } from "react";
import styles from "../styles/home.module.css";
import Layout from "../layout/layout";
import Card from "../components/Card/Card";
import CardContainer from "../components/CardContainer/CardContainer";
import Container from "../components/Container/Container";
import axios from "axios";

export default function Home({items}) {

	return (
		<Layout>
			<div className={styles.heroWrapper}>
				<Container className={styles.verticalAlignCenter}>
					<h1>Your all in one stop for selling used items</h1>
					<p>Not registered to the site?</p>
					<p>
						<a>Sign up</a> now and get an exclusive discount of 10$
						on your first purchase or sale.
					</p>
				</Container>
			</div>
			<Container>
				<CardContainer>
					{items.map((item) => (
						<Card item={item} />
					))}
				</CardContainer>
			</Container>
		</Layout>
	);
}

export async function getServerSideProps(context) {
	let res = await axios({
		url: "http://localhost:7000/user/getInitialItems",
		withCredentials: true,
	})
	let items = res.data.status ? res.data.items : []

	return {
		props: { items }, // will be passed to the page component as props
	};
}
