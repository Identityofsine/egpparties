import '../styles/carousel.scss';

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

	return (
		<div className={"carousel " + className}>
			<div className="carousel-container">
				{children}
			</div>
		</div>
	)

}
