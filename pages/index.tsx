const IndexPage = (): JSX.Element => {
	return (
		<div className="container mx-auto sm:px-6 lg:px-8 bg-englando-rose bg-opacity-50 text-englando-black">
			<a className="block text-xs mt-14" href="/exam-2">
				geheime link
			</a>
			<h1 className="text-2xl mb-4 font-bold">
				Choose the tenses you want to practise with:
			</h1>
			<fieldset className="space-y-5">
				<h2 className="mt-4 text-englando-lavender font-bold text-lg">
					Present tenses
				</h2>
				<div className="relative flex items-start">
					<div className="flex items-center h-5">
						<input
							id="comments"
							aria-describedby="comments-description"
							name="comments"
							type="checkbox"
							className="focus:ring-englando-black h-4 w-4 text-englando-lavender border-gray-300 rounded transition duration-300"
						/>
					</div>
					<div className="ml-3 text-sm">
						<label htmlFor="comments" className="font-medium">
							Present simple
						</label>
						{/* <p id="comments-description" className="text-gray-500">
							Get notified when someones posts a comment on a posting.
						</p> */}
					</div>
				</div>
				<div className="relative flex items-start">
					<div className="flex items-center h-5">
						<input
							id="comments"
							aria-describedby="comments-description"
							name="comments"
							type="checkbox"
							className="focus:ring-englando-black h-4 w-4 text-englando-lavender border-gray-300 rounded transition duration-300"
						/>
					</div>
					<div className="ml-3 text-sm">
						<label htmlFor="comments" className="font-medium text-gray-700">
							Present continuous
						</label>
						{/* <p id="comments-description" className="text-gray-500">
							Get notified when someones posts a comment on a posting.
						</p> */}
					</div>
				</div>
				<h2 className="mt-4 text-englando-lavender font-bold text-lg">
					Past tenses
				</h2>
				<div className="relative flex items-start">
					<div className="flex items-center h-5">
						<input
							id="comments"
							aria-describedby="comments-description"
							name="comments"
							type="checkbox"
							className="focus:ring-englando-black h-4 w-4 text-englando-lavender border-gray-300 rounded transition duration-300"
						/>
					</div>
					<div className="ml-3 text-sm">
						<label htmlFor="comments" className="font-medium text-gray-700">
							Past simple
						</label>
						{/* <p id="comments-description" className="text-gray-500">
							Get notified when someones posts a comment on a posting.
						</p> */}
					</div>
				</div>
			</fieldset>
			{/* animate if one or more options selected */}
			<button
				type="button"
				className="inline-flex items-center mt-8 px-3.5 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-englando-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-englando-black animate-bounce hover:text-englando-black transition duration-300"
			>
				Go!
			</button>
		</div>
	)
}

export default IndexPage
