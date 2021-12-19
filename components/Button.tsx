import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	FunctionComponent,
} from 'react'

const Button: FunctionComponent<
	DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
	// eslint-disable-next-line react/prop-types
	const { children } = props
	return (
		<button
			className="inline-flex items-center mt-8 px-3.5 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-englando-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-englando-black hover:text-englando-black"
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
