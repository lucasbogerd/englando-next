import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
	return (
		<div className="flex w-screen h-screen">
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
