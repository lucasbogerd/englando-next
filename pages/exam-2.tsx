import { GetStaticProps } from 'next'
import { useForm } from 'react-hook-form'

import { Exam, Exercise } from '../shared/types'
import { sampleExam } from '../shared/sample-data'
import { parseExam } from '../shared/logic/parseExam'

type Props = {
	exam: Exam
}

const ConvertToInitialValues = (exercises: Exercise[]) => {
	const questionAnswers = exercises.flatMap((exercise) =>
		exercise.Parts.filter((part) => typeof part !== 'string')
	)

	return questionAnswers
}

const ExamPage = ({ exam }: Props) => {
	ConvertToInitialValues(exam.Exercises)

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitted },
	} = useForm()
	const onSubmit = (data) => console.log(data)

	return (
		<div>
			<h1>{exam.Name}</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<ul>
					{exam.Exercises.map((exercise, i) => {
						let questionCount = -1
						return (
							<li key={`exercise-${i}`}>
								{exercise.Parts.map((part, j) => {
									if (typeof part === 'string') {
										return <span key={`part-${j}`}>{part}</span>
									}

									questionCount++
									return (
										<input
											key={`part-${j}`}
											className={`border border-gray-100 ${
												errors[`exercise-${i}_question-${questionCount}`] &&
												isSubmitted
													? 'bg-red-500'
													: 'bg-gray-50'
											}`}
											{...register(`exercise-${i}_question-${questionCount}`, {
												validate: (value) => value === part.Answer,
											})}
										/>
									)
								})}
							</li>
						)
					})}
				</ul>
				<button type="submit">Controleren</button>
			</form>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	return { props: { exam: parseExam(sampleExam) } }
}

export default ExamPage
