import { DetailedHTMLProps, FunctionComponent, HTMLAttributes } from 'react'

const Container: FunctionComponent<
	DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
	// eslint-disable-next-line react/prop-types
	const { children } = props
	return (
		<div
			{...props}
			className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-englando-rose bg-opacity-50 text-englando-black"
		>
			{children}
		</div>
	)
}

export default Container
