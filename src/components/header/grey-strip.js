"use client"

import Image from "next/image";
import styles from "./grey-strip.module.css";

const GreyStrip = () => {
	return (
		<div className={styles.greyStrip}>
			<div className={styles.lorem}>
				<Image
					className={styles.loremImage}
					alt="loremImage"
					width={16}
					height={16}
					src="/header/element-4.svg"
				/>
				<div className={styles.text}>
					<text>Lorem ipsum dolor</text>
				</div>
			</div>
			<div className={styles.lorem}>
				<Image
					className={styles.loremImage}
					alt="loremImage"
					width={16}
					height={16}
					src="/header/element-4.svg"
				/>
				<div className={styles.text}>
					<text>Lorem ipsum dolor</text>
				</div>
			</div>
			<div className={styles.lorem}>
				<img
					className={styles.loremImage}
					alt="loremImage"
					width={12}
					height={12}
					src="/header/element-4.svg"
				/>
				<div className={styles.text}>
					<text>Lorem ipsum dolor</text>
				</div>
			</div>
		</div>
	);
};

export default GreyStrip;
