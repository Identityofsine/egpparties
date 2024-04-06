'use client';
import '@/styles/toggleable.scss';

type ToggleableProps = {
	active?: boolean;
	text: string;
	className?: string;
	onClick?: () => void; //?
}

export default function Toggleable(props: ToggleableProps) {
	return (
		<div className={`toggle ${props.active ? 'active' : ''}`} onClick={() => props.onClick?.()}>
			<p>{props.text}</p>
		</div>
	)
}
