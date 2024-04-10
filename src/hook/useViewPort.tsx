'use client'

import React from "react";


function getWindow(): Window | undefined {
	if (typeof window === 'undefined') {
		return undefined
	}
	return window ?? undefined;
}

export default function useViewPort() {
	const [width, setWidth] = React.useState(getWindow()?.innerWidth);
	const [height, setHeight] = React.useState(getWindow()?.innerHeight);

	React.useEffect(() => {
		const window = getWindow();
		if (!window) {
			return;
		}
		const handleResize = () => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return { width, height };
}
