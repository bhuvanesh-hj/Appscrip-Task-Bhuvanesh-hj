"use client";

import React, { useContext, useState } from "react";
import styles from "./filter.module.css";
import AppContext from "@/context";
import ProductList from "../productList/ProductList";

const FilterSection = () => {
	const [showRecommended, setShowRecommended] = useState(false);
	const { filter, setFilter } = useContext(AppContext);

	return (
		<div>
			<div className={styles.filterSection}>
				<div className={styles.filter} id="filter">
					<div className={styles.total_filter}>
						<div className={styles.total}>3436 ITEMS</div>
						{filter ? (
							<div
								className={styles.hideFilter}
								onClick={() => setFilter(!filter)}>
								<div className={styles.hideIcon}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="1em"
										height="1em"
										viewBox="0 0 24 24">
										<path
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="m15 18l-6-6l6-6"
										/>
									</svg>
									<div className={styles.hideText}>HIDE FILTERS</div>
								</div>
							</div>
						) : (
							<div
								className={styles.showFilter}
								onClick={() => setFilter(!filter)}>
								<div className={styles.hideIcon}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="1em"
										height="1em"
										viewBox="0 0 24 24">
										<path
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="m9 18l6-6l-6-6"
										/>
									</svg>
									<div className={styles.hideText}>SHOW FILTERS</div>
								</div>
							</div>
						)}
					</div>
					<div className={styles.filter450} onClick={() => setFilter(!filter)}>
						FILTER
					</div>
					<div className={styles.divide}></div>
					<div
						className={styles.recommended}
						onClick={() => setShowRecommended(!showRecommended)}>
						<div className={styles.recommendedText}>Recommended</div>
						{!showRecommended ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								viewBox="0 0 24 24">
								<path
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m6 9l6 6l6-6"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								viewBox="0 0 24 24">
								<path
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m18 15l-6-6l-6 6"
								/>
							</svg>
						)}
					</div>
				</div>
				{showRecommended && (
					<div className={styles.dropdown} id="dropdown">
						<section className={styles.dropdownHeadingSection}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								viewBox="0 0 24 24">
								<path
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M20 6L9 17l-5-5"
								/>
							</svg>
							<p className={styles.dropdownHeading}>recommended</p>
						</section>
						<ul className={styles.list}>
							<li className={styles.recList}>Newest first</li>
							<li className={styles.recList}>popular</li>
							<li className={styles.recList}>Price : high to low</li>
							<li className={styles.recList}>Price : low to high</li>
						</ul>
					</div>
				)}
			</div>
			<ProductList />
		</div>
	);
};

export default FilterSection;
