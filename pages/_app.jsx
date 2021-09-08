import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
			<div className="flex min-h-screen min-w-screen bg-gray-50">
				<Component {...pageProps} />
			</div>
		</>
	)
}

export default MyApp
