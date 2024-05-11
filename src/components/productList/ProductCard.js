"use client";

import React, { useState } from "react";
import styles from "./productCard.module.css";

const ProductCard = ({product}) => {
	const [like, setLike] = useState(false);

	const handleLike = () => {
		setLike(!like);
	};

	const imageHoverStyle = {
		position: "absolute",
		top: "0",
		right: "0",
		left: "0",
		bottom: "0",
		opacity: "0",
		transition: "opacity .4s",
	};

	const handleHover = (e) => {
		e.currentTarget.querySelector(".image-hover").style.opacity = 1;
	};

	const handleLeave = (e) => {
		e.currentTarget.querySelector(".image-hover").style.opacity = 0;
	};

	return (
		<div className={styles.card}>
			<div
				className={styles.figure}
				onMouseEnter={handleHover}
				onMouseLeave={handleLeave}>
				<img
					className="Sirv image-main"
					src={product.front}
					alt="Main Image"
				/>

				<img
					className="Sirv image-hover"
					style={imageHoverStyle}
					src={product.hover}
					alt="Hover Image"
				/>
			</div>
			<div className={styles.description}>
				<text className={styles.text}>
					{product.name}
				</text>
				<text className={styles.subLine}>
					<span>Sign in</span>or Create an account to see pricing
					<svg
						onClick={handleLike}
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 256 256">
						{like ? (
							<path
								fill="#f70202"
								d="M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62"
							/>
						) : (
							<path
								fill="currentColor"
								d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"
							/>
						)}
					</svg>
				</text>
			</div>
		</div>
	);
};

export default ProductCard;
