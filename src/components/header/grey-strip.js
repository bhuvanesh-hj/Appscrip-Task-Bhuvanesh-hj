"use client";

import styles from "./grey-strip.module.css";

const GreyStrip = () => {
	return (
		<div className={styles.greyStrip}>
			<div className={styles.lorem1}>
				<img
					alt="loremImage"
					width={16}
					height={16}
					src="/header/element-4.svg"
				/>
				<div className={styles.text}>
					<text>Lorem ipsum dolor</text>
				</div>
			</div>
			<div className={styles.lorem2}>
				<img
					alt="loremImage"
					width={16}
					height={16}
					src="/header/element-4.svg"
				/>
				<div className={styles.text}>
					<text>Lorem ipsum dolor</text>
				</div>
			</div>
			<div className={styles.lorem3}>
				<img
					alt="loremImage"
					width={16}
					height={16}
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
