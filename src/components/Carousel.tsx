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
}

export function Carousel({ children }: CarouselProps) {

	return (
		<div className="carousel">
			<div className="carousel-container">
				{children}
			</div>
		</div>
	)

}
