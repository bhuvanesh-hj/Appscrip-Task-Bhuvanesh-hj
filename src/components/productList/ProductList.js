"use client";

import React, { useContext } from "react";
import styles from "./productList.module.css";
import SideDrawer from "./SideDrawer";
import ProductCard from "./ProductCard";
import AppContext from "@/context";

const productArray = [
	{
		name: "PPXOC Milkyway dress in pressed flowers",
		front: "/product/bagF.jpg",
		hover: "/product/bagH.jpg",
	},
	{
		name: "PPXOC Milkyway dress in pressed flowers",
		front: "/product/puppyF.jpg",
		hover: "/product/puppyH.jpg",
	},
	{
		name: "Product Name",
		front: "/product/beltF.jpg",
		hover: "/product/beltF.jpg",
	},
	{
		name: "Product Name",
		front: "/product/hatF.jpg",
		hover: "/product/hatF.jpg",
	},
	{
		name: "Product Name",
		front: "/product/bagB.jpg",
		hover: "/product/bagC.jpg",
	},
	{
		name: "Product Name",
		front: "/product/puppyH.jpg",
		hover: "/product/puppyF.jpg",
	},
	{
		name: "Product Name",
		front: "/product/vbagF.jpg",
		hover: "/product/vbagH.jpg",
	},
	{
		name: "Product Name",
		front: "/product/bagC.jpg",
		hover: "/product/bagB.jpg",
	},
	{
		name: "Product Name",
		front: "/product/bag2.jpg",
		hover: "/product/bagF.jpg",
	},
	{
		name: "Product Name",
		front: "/product/persF.jpg",
		hover: "/product/persH.jpg",
	},
	{
		name: "Product Name",
		front: "/product/persH.jpg",
		hover: "/product/persF.jpg",
	},
	{
		name: "Product Name",
		front: "/product/vbagH.jpg",
		hover: "/product/vbagF.jpg",
	},
	{
		name: "Product Name",
		front: "/product/beltF.jpg",
		hover: "/product/beltF.jpg",
	},
	{
		name: "Product Name",
		front: "/product/puppyF.jpg",
		hover: "/product/puppyH.jpg",
	},
	{
		name: "Product Name",
		front: "/product/hatF.jpg",
		hover: "/product/hatF.jpg",
	},
	{
		name: "Product Name",
		front: "/product/bag2.jpg",
		hover: "/product/bag2.jpg",
	},
	{
		name: "Product Name",
		front: "/product/bagH.jpg",
		hover: "/product/bagH.jpg",
	},
];

const ProductList = () => {
	const { filter, setFilter } = useContext(AppContext);
	return (
		<div className={styles.main}>
			{filter && <SideDrawer className={styles.sideDrawer} />}
			<div className={styles.products}>
				{productArray.map((product, index) => {
					return <ProductCard key={index} product={product} />;
				})}
			</div>
		</div>
	);
};

export default ProductList;
