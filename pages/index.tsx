import { useRouter } from 'next/router'
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form'
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
					Choose the tenses you want to practise
				</h1>
				<fieldset className="space-y-5">
					<h2 className="mt-4 text-englando-lavender font-bold text-lg">
						Present tenses
					</h2>

					<ExamOption
						examNameWithDashes="present-simple"
						examNameWithoutDashes="Present simple"
						example="My brother studies English at Cambridge University."
						register={register}
					/>

					<ExamOption
						examNameWithDashes="present-continuous"
						examNameWithoutDashes="Present continuous"
						example="My brother is studying English at the moment."
						register={register}
					/>

					<ExamOption
						examNameWithDashes="present-perfect"
						examNameWithoutDashes="Present perfect"
						example="My brother has studied English for three years."
						register={register}
					/>

					<h2 className="mt-4 text-englando-lavender font-bold text-lg">
						Past tenses
					</h2>

					<ExamOption
						examNameWithDashes="past-simple"
						examNameWithoutDashes="Past simple"
						example="My brother studied English when he was at Cambridge University."
						register={register}
					/>

					<ExamOption
						examNameWithDashes="past-continuous"
						examNameWithoutDashes="Past continuous"
						example="My brother was studying English at Cambridge University."
						register={register}
					/>

					<h2 className="mt-4 text-englando-lavender font-bold text-lg">
						Future tenses
					</h2>

					<ExamOption
						examNameWithDashes="future-present-simple"
						examNameWithoutDashes="Present simple"
						example="My brother studies at Cambridge University."
						register={register}
					/>

					<ExamOption
						examNameWithDashes="future-present-continuous"
						examNameWithoutDashes="Present continuous"
						example="My brother is studying at Cambridge University next year."
						register={register}
					/>

					<ExamOption
						examNameWithDashes="future-simple-will"
						examNameWithoutDashes="Future simple (will)"
						example="My brother will study at Cambridge University if he passes the entrance exam."
						register={register}
					/>

					<ExamOption
						examNameWithDashes="future-simple-going-to"
						examNameWithoutDashes="Future simple (going to)"
						example="My brother is going to study at Cambridge University someday."
						register={register}
					/>
				</fieldset>
				{/* animate if one or more options selected */}
				<Button type="submit">Go!</Button>
			</form>
		</Container>
	)
}

export default IndexPage

type ExamOptionType = {
	examNameWithDashes: string
	examNameWithoutDashes: string
	example: string
	register: UseFormRegister<FieldValues>
}

const ExamOption = ({
	examNameWithDashes,
	examNameWithoutDashes,
	example,
	register,
}: ExamOptionType): JSX.Element => {
	return (
		<div className="relative flex items-start">
			<div className="flex items-center h-5">
				<input
					id={examNameWithDashes}
					aria-describedby={`${examNameWithDashes}-description`}
					name={examNameWithDashes}
					type="checkbox"
					className="focus:ring-englando-black h-4 w-4 text-englando-lavender border-gray-300 rounded transition duration-300"
					{...register(examNameWithDashes)}
				/>
			</div>
			<div className="ml-3 text-sm">
				<label
					htmlFor={examNameWithDashes}
					className="font-medium text-gray-700"
				>
					{examNameWithoutDashes}
				</label>
				<p id={`${examNameWithDashes}-description`} className="text-gray-500">
					Example: <span className="italic">&#34;{example}&#34;</span>
				</p>
			</div>
		</div>
	)
}
