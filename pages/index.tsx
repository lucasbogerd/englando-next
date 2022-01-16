import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import Container from '../components/Container'

const IndexPage = (): JSX.Element => {
	const router = useRouter()
	const { register, handleSubmit } = useForm()

	const onSubmit = (data) => {
		// check if any value is true
		if (Object.values(data).includes(true)) {
			router.push(`/exam-2?${new URLSearchParams(data).toString()}`)
		}
	}

	return (
		<Container>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1 className="text-2xl mb-4 font-bold mt-6 sm:mt-14">
					Choose the tenses you want to practise with:
				</h1>
				<fieldset className="space-y-5">
					<h2 className="mt-4 text-englando-lavender font-bold text-lg">
						Present tenses
					</h2>
					<div className="relative flex items-start">
						<div className="flex items-center h-5">
							<input
								id="present-simple"
								aria-describedby="present-simple-description"
								name="present-simple"
								type="checkbox"
								className="focus:ring-englando-black h-4 w-4 text-englando-lavender border-gray-300 rounded transition duration-300"
								{...register('present-simple')}
							/>
						</div>
						<div className="ml-3 text-sm">
							<label htmlFor="present-simple" className="font-medium">
								Present simple
							</label>
							<p id="present-simple-description" className="text-gray-500">
								Example:{' '}
								<span className="italic">
									&#34;My brother studies English at Cambridge University.&#34;
								</span>
							</p>
						</div>
					</div>
					<div className="relative flex items-start">
						<div className="flex items-center h-5">
							<input
								id="present-continuous"
								aria-describedby="present-continuous-description"
								name="present-continuous"
								type="checkbox"
								className="focus:ring-englando-black h-4 w-4 text-englando-lavender border-gray-300 rounded transition duration-300"
								{...register('present-continuous')}
							/>
						</div>
						<div className="ml-3 text-sm">
							<label
								htmlFor="present-continuous"
								className="font-medium text-gray-700"
							>
								Present continuous
							</label>
							<p id="present-continuous-description" className="text-gray-500">
								Example:{' '}
								<span className="italic">
									&#34;My brother is studying English at the moment.&#34;
								</span>
							</p>
						</div>
					</div>
					<div className="relative flex items-start">
						<div className="flex items-center h-5">
							<input
								id="present-perfect"
								aria-describedby="present-perfect-description"
								name="present-perfect"
								type="checkbox"
								className="focus:ring-englando-black h-4 w-4 text-englando-lavender border-gray-300 rounded transition duration-300"
								{...register('present-perfect')}
							/>
						</div>
						<div className="ml-3 text-sm">
							<label
								htmlFor="present-perfect"
								className="font-medium text-gray-700"
							>
								Present perfect
							</label>
							<p id="present-perfect-description" className="text-gray-500">
								Example:{' '}
								<span className="italic">
									&#34;My brother has studied English for three years.&#34;
								</span>
							</p>
						</div>
					</div>
					<h2 className="mt-4 text-englando-lavender font-bold text-lg">
						Past tenses
					</h2>
					<div className="relative flex items-start">
						<div className="flex items-center h-5">
							<input
								id="past-simple"
								aria-describedby="past-simple-description"
								name="past-simple"
								type="checkbox"
								className="focus:ring-englando-black h-4 w-4 text-englando-lavender border-gray-300 rounded transition duration-300"
								{...register('past-simple')}
							/>
						</div>
						<div className="ml-3 text-sm">
							<label
								htmlFor="past-simple"
								className="font-medium text-gray-700"
							>
								Past simple
							</label>
							<p id="past-simple-description" className="text-gray-500">
								Example:{' '}
								<span className="italic">
									&#34;My brother studied English when he was at Cambridge
									University.&#34;
								</span>
							</p>
						</div>
					</div>
				</fieldset>
				{/* animate if one or more options selected */}
				<Button type="submit">Go!</Button>
			</form>
		</Container>
	)
}

export default IndexPage
