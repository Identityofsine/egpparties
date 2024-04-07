'use client'
import '@/styles/input.scss';

type InputProps = {
	onChange?: (e: string) => void;
	pattern?: string;
	maxlength?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

export function Input(props: InputProps) {

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		e.target.value = e.target.value.replace(new RegExp(props.pattern || ''), '');
		if (props.maxlength && e.target.value.length > props.maxlength) {
			e.target.value = e.target.value.slice(0, props.maxlength);
		}
		props.onChange?.(e.target.value);
	}

	return (
		<input {...props} onChange={handleChange} />
	)
}
