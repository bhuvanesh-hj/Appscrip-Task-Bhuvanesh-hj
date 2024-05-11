"use client";

import React, { useState } from "react";

import FilterSection from "@/components/filterSection/FilterSection";
import Header from "@/components/header/Header";
import HeroSection from "@/components/heroSection/HeroSection";
import AppContext from "@/context";
import Footer from "@/components/footer/Footer";

const page = () => {
	const [filter, setFilter] = useState(false);
	return (
		<AppContext.Provider value={{ filter, setFilter }}>
			<Header />
			<HeroSection />
			<FilterSection />
			<Footer/>
		</AppContext.Provider>
	);
};

export default page;
