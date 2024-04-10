import '../styles/gradient-card.scss'

type GradientCardProps = {
	className?: string
	imgSrc: string
	title?: string
	style?: React.CSSProperties
}

export function GradientCard({ className, imgSrc, title = "", style = {} }: GradientCardProps) {
	return (
		<div className={`gradient-card ${className && className}`}>
			<div className="text-container">
				<h5 className="text">{title}</h5>
			</div>
			<img src={imgSrc} alt={title} style={style} />
		</div>
	)
}
