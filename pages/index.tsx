import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

const IndexPage = (): JSX.Element => {
	const router = useRouter()
	const { register, handleSubmit } = useForm()

	const onSubmit = (data) => {
		// check if any value is true
		if (Object.values(data).some((v) => v === true)) {
			router.push(`/exam-2?${new URLSearchParams(data).toString()}`)
		}
	}

	return (
		<div className="container mx-auto sm:px-6 lg:px-8 bg-englando-rose bg-opacity-50 text-englando-black">
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1 className="text-2xl mb-4 font-bold mt-14">
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
				<button
					type="submit"
					className={`inline-flex items-center mt-8 px-3.5 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-englando-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-englando-black hover:text-englando-black transition duration-300`}
				>
					Go!
				</button>
			</form>
		</div>
	)
}

export default IndexPage
