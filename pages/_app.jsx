import { Provider } from 'jotai'
import 'tailwindcss/tailwind.css'

import { selectedTensesAtom } from '../shared/atoms/store'

// eslint-disable-next-line
function MyApp({ Component, pageProps }) {
	return (
		<Provider>
			<link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
			<div className="flex min-h-screen min-w-screen bg-gray-50">
				<Component {...pageProps} />
			</div>
		</Provider>
	)
}

export default MyApp
