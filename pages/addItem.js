import { useState } from "react";
import Layout from "../layout/layout";
import { TextField, Button, Switch, MenuItem } from "@material-ui/core";
import styles from "../styles/addItem.module.css";
import axios from "axios";

const options = [
	{
		value: "mobiles and accessories",
		label: "Mobiles and Accessories",
	},
	{
		value: "miscellaneous",
		label: "Miscellaneous",
	},
	{
		value: "furniture",
		label: "Furniture",
	},
	{
		value: "vehicle",
		label: "Vehicle",
	},
];

export default function AddItem() {
	let [fields, setFields] = useState({
		name: "",
		location: "",
		category: "",
		price: 0,
		featured: true,
		image: null,
		imgUrl: null,
	});

	const [cat, setCat] = useState("mobiles and accessories");

	const handleChange = (event) => {
		setCat(event.target.value);
	};

	let imageOnChange = (e) => {
		if (e.target.files[0]) {
			let imgUrl = URL.createObjectURL(e.target.files[0]);
			setFields({ ...fields, image: e.target.files[0], imgUrl });
		}
	};

	let clickHandler = () => {
		let formdata = new FormData();
		let { name, location, category, price, featured, image } = fields;
		formdata.append("name", name);
		formdata.append("location", location);
		formdata.append("category", category);
		formdata.append("price", price);
		formdata.append("featured", featured);
		formdata.append("image", image);

		axios({
			method: "post",
			url: "/user/addItem",
			withCredentials: true,
			data: formdata,
		}).then((res) => {
			if (res.data.status) {
				alert.success(res.data.msg);
				setFields({
					name: "",
					location: "",
					category: "",
					price: 0,
					featured: true,
					image: null,
					imgUrl: null,
				});
			}
		});
	};

	return (
		<Layout container>
			<div className={styles.addItem}>
				<div className={styles.formImage}>
					{fields.imgUrl == null ? (
						<div className={styles.fileWrapper}>
							<input
								type="file"
								id={styles.image}
								onChange={imageOnChange}
							/>
							<label htmlFor={styles.image}>
								<img src="default.jpg" />
							</label>
						</div>
					) : (
						<div className={styles.imageWrapper}>
							<img src={fields.imgUrl} />
							<div className={`${styles.absolute} ${styles.fileWrapper}`}>
								<input
									type="file"
									id={styles.image}
									onChange={imageOnChange}
								/>
								<label htmlFor={styles.image}>
									<img src="default.jpg" />
								</label>
							</div>
						</div>
					)}
				</div>
				<div className={styles.formFields}>
					<div>
						<h1>Add Item</h1>
						<TextField
							onChange={(e) =>
								setFields({ ...fields, name: e.target.value })
							}
							value={fields.name}
							label="Name"
							className={styles.formInput}
							fullWidth
						/>
						<TextField
							onChange={(e) =>
								setFields({
									...fields,
									location: e.target.value,
								})
							}
							value={fields.location}
							label="Location"
							className={styles.formInput}
							fullWidth
						/>
						<TextField
							select
							label="Category"
							value={cat}
							onChange={handleChange}
							fullWidth
							className={styles.formInput}
							id="standard-select-currency"
						>
							{options.map((option) => (
								<MenuItem
									key={option.value}
									value={option.value}
								>
									{option.label}
								</MenuItem>
							))}
						</TextField>
						<TextField
							onChange={(e) =>
								setFields({
									...fields,
									price: parseInt(e.target.value),
								})
							}
							value={fields.price}
							label="Price"
							className={styles.formInput}
							type="number"
							fullWidth
						/>
						<div className={styles.switchWrapper}>
							<Switch
								checked={fields.featured}
								onChange={(e) =>
									setFields({
										...fields,
										featured: !fields.featured,
									})
								}
								color="primary"
								inputProps={{
									"aria-label": "primary checkbox",
								}}
								className="switch"
							/>
							<div>Featured</div>
						</div>
						<Button onClick={clickHandler} className={styles.formButton}>
							Add Item
						</Button>
					</div>
				</div>
			</div>
		</Layout>
	);
}
