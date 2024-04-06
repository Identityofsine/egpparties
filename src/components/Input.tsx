'use client'
import '@/styles/input.scss';

type InputProps = {
	onChange?: (e: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

export function Input(props: InputProps) {

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		props.onChange?.(e.target.value);
	}

	return (
		<input {...props} onChange={handleChange} />
	)
}
