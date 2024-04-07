'use client'
import '@/styles/input.scss';

type InputProps = {
	onChange?: (e: string) => void;
	pattern?: string;
	maxLength?: number;
} & Omit<Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>, 'maxLength'>;

export function Input(props: InputProps) {

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		e.target.value = e.target.value.replace(new RegExp(props.pattern || ''), '');
		if (props.maxLength && e.target.value.length > props.maxLength) {
			e.target.value = e.target.value.slice(0, props.maxLength);
		}
		props.onChange?.(e.target.value);
	}

	return (
		<input {...props} onChange={handleChange} />
	)
}
