'use client';
import React from 'react';
import '../styles/carousel.scss';
import { on } from 'events';
import useViewPort from '@/hook/useViewPort';
import useIsMobile from '@/hook/isMobile';
import brandSettings from '@/app/brand.settings';

type CarouselItemProps = {
	img: string;
	alt?: string;
}

export function CarouselItem({ img, alt }: CarouselItemProps) {
	return (
		<div className="carousel-item">
			<img src={img} alt={alt} />
		</div>
	)
}

type CarouselProps = {
	children: React.ReactNode;
	className?: string,
}

export function Carousel({ className, children }: CarouselProps) {

	const [pause, setPause] = React.useState(false);
	const ref = React.useRef<HTMLDivElement>(null);
	const animation = React.useRef<Animation>();
	const { width } = useViewPort();
	const mobile = useIsMobile();

	React.useEffect(() => {
		if (!ref.current) return;
		if (animation.current) animation.current.cancel();
		const [keyframes, settings] = getKeyframe();
		if (!keyframes || !settings) return;
		animation.current = ref.current.animate(keyframes, settings);
		return () => animation.current?.cancel();
	}, [ref, width]);

	React.useEffect(() => {
		if (pause) animation.current?.pause();
		else animation.current?.play();
	}, [pause]);

	function getKeyframe(): [Keyframe[], KeyframeAnimationOptions] | [] {
		if (!ref.current) return [];
		const container = ref.current;
		//should be same element
		const child_width = container.children[0].clientWidth;
		const child_gap = (.2133 * 75) || 0;
		console.log(child_gap);
		container.style.width = `${(child_width + child_gap) * container.children.length}px`;
		const animation_states: Keyframe[] = [
			{ transform: `translateX(0px)` },
			{ transform: `translateX(-${(child_width + child_gap) * container.children.length / 2}px)` }
		]
		const animation_options: KeyframeAnimationOptions = {
			duration: brandSettings.landing.carouselSpeed * 1000,
			iterations: Infinity,
			easing: 'linear'
		}
		return [animation_states, animation_options];
	};

	return (
		<div className={"carousel " + className}>
			<div className="carousel-container" dataset-value="0" onMouseEnter={() => !mobile && setPause(true)} onMouseLeave={() => !mobile && setPause(false)}>
				<div className={`carousel-subcontainer ${pause ? "pause" : ""}`} ref={ref}>
					{children}
					{children}
				</div>
			</div>
		</div >
	)

}


/*
React.useEffect(() => {
	animation.current = requestAnimationFrame(animate);
	return () => cancelAnimationFrame(animation.current);
}, []);

const animate = () => {
	if (!ref.current) return;
	const container = ref.current;
	const child_width = container.children[0].clientWidth;
	const child_gap = parseInt(getComputedStyle(container.children[0]).gap) || 0;
	const half_width = ((container.children.length / 2) * (child_width + child_gap));
	const getValue = () => parseInt(container.dataset.value || "0");
	const setValue = (value: number) => container.dataset.value = value.toString();
	container.style.transform = `translateX(-${getValue()}px)`;
	setValue(getValue() + 25)
	if (getValue() >= half_width) setValue(0);
	animation.current = requestAnimationFrame(animate);
}
*/ //could have a purpose


