"use client";

import { useEffect, useState } from "react";

export const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(false);

	const checkIsMobile = () => {
		setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
	};

	useEffect(() => {
		checkIsMobile();
		window.addEventListener('resize', checkIsMobile);

		return () => {
			window.removeEventListener('resize', checkIsMobile);
		};
	}, []);

	return isMobile;
};

export default useIsMobile;
