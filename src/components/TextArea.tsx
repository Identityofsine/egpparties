'use client'
import '@/styles/textarea.scss';

type TextAreaProps = {
	onChange?: (e: string) => void;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'>;

export default function TextArea(props: TextAreaProps) {

	function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		props.onChange?.(e.target.value);
	}

	return (
		<textarea {...props} onChange={handleChange} />
	)
}
