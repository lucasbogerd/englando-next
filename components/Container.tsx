import { DetailedHTMLProps, FunctionComponent, HTMLAttributes } from 'react'

type ContainerProps = Omit<
	DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
	'className'
>

const Container: FunctionComponent<ContainerProps> = (props) => {
	// eslint-disable-next-line react/prop-types
	const { children } = props
	return (
		<div
			className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-englando-rose bg-opacity-50 text-englando-black"
			{...props}
		>
			{children}
		</div>
	)
}

export default Container
