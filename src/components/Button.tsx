import '../styles/button.scss'

type ButtonProps = {
	text: string;
	icon_type?: 'phone' | 'default' | 'email';
	primary?: boolean;
	onClick?: () => void; //?
}

function Button({ text, primary = true, icon_type = "default", onClick = () => { } }: ButtonProps) {

	return (
		<div className={`button ${primary ? 'primary' : ''}`} >
			<p>{text}</p>
			<img src={`/icons/${icon_type}.svg`} alt={icon_type} />
		</div>
	)

}

export default Button;
