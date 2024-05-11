"use client";

import { useState } from "react";
import GreyStrip from "./grey-strip";
import styles from "./header.module.css";

const Header = () => {

	return (
		<>
			<GreyStrip />
			<header className={styles.header}>
				<div className={styles.headerBody}>
					<div className={styles.headerLogo}>
						<img
							src="/header/hamburger.png"
							className={styles.ham}
							alt="hamburger"
							
						/>
						<img src="/header/Logo.svg" alt="logo" />
					</div>
					<div className={styles.headerContent}>
						<text>LOGO</text>
						<div className={styles.icons}>
							<img src="/header/search-normal.svg" alt="search" />
							<img src="/header/heart.svg" alt="heart" />
							<img src="/header/shopping-bag.svg" alt="bag" />
							<img
								src="/header/profile.svg"
								alt="profile"
								className={styles.iconsProfile}
							/>
							<div className={styles.language}>
								<p>ENG</p>

								<img src="/header/arrow-left.svg" alt="search" />
							</div>
						</div>
					</div>
				</div>

				<div className={styles.tabSection}>
					<div className={styles.tabs}>
						<div className={styles.tab}>SHOP</div>
						<div className={styles.tab}>SKILLS</div>
						<div className={styles.tab}>STORIES</div>
						<div className={styles.tab}>ABOUT</div>
						<div className={styles.tab}>CONTACT US</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
