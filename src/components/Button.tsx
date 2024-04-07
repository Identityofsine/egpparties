'use client';
import '../styles/button.scss'

type ButtonProps = {
	text: string;
	icon_type?: 'phone' | 'default' | 'email';
	primary?: boolean;
	className?: string;
	onClick?: () => void; //?
}

function Button({ text, className = "", primary = true, icon_type = "default", onClick = () => { } }: ButtonProps) {

	return (
		<div className={`button m-flex ${className} ${primary ? 'primary' : ''}`} onClick={onClick}>
			<p>{text}</p>
			<img src={`/icons/${icon_type}.svg`} alt={icon_type} />
		</div>
	)

}

export default Button;
