import { GetStaticProps } from 'next'
import { useForm } from 'react-hook-form'

import { Exam, Exercise } from '../shared/types'
import { sampleExam } from '../shared/sample-data'
import { parseExam } from '../shared/logic/parseExam'
import React from 'react'

type Props = {
	exam: Exam
}

const ConvertToInitialValues = (exercises: Exercise[]) => {
	const questionAnswers = exercises.flatMap((exercise) =>
		exercise.Parts.filter((part) => typeof part !== 'string')
	)

	return questionAnswers
}

const ExamPage = ({ exam }: Props): JSX.Element => {
	ConvertToInitialValues(exam.Exercises)

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitted },
	} = useForm()
	const onSubmit = (data) => console.log(data)

	return (
		<div className="max-w-2xl px-8 pt-8 pb-6 mx-auto bg-blue-100 md:pb-8 md:pt-12">
			<h1 className="mb-8 text-2xl font-bold">{exam.Name}</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<ul className="mb-8">
					{exam.Exercises.map((exercise, i) => {
						let questionCount = -1
						return (
							<li
								key={`exercise-${i}`}
								className="p-3 my-3.5 bg-white rounded-md shadow-md"
							>
								{exercise.Parts.map((part, j) => {
									if (typeof part === 'string') {
										return <span key={`part-${j}`}>{part}</span>
									}

									questionCount++

									const currentQuestionId = `exercise-${i}_question-${questionCount}`
									return (
										<span key={`part-${j}`}>
											<input
												name={currentQuestionId}
												id={currentQuestionId}
												className={`px-2 py-0.5 w-16 md:w-32 transition duration-500 rounded ${
													errors[currentQuestionId] && isSubmitted
														? 'bg-red-200'
														: !errors[currentQuestionId] && isSubmitted
														? 'bg-green-200'
														: 'bg-gray-200'
												}`}
												{...register(
													`exercise-${i}_question-${questionCount}`,
													{
														required: true,
														validate: (value) => value === part.Answer,
													}
												)}
											/>
											<label
												htmlFor={`exercise-${i}_question-${questionCount}`}
												className="ml-1 italic font-semibold"
											>
												({part.Question})
											</label>
										</span>
									)
								})}
							</li>
						)
					})}
				</ul>
				<button
					type="submit"
					className="px-4 py-2 text-white transition duration-500 bg-blue-500 rounded-md shadow-md hover:bg-blue-400 focus:shadow-none focus:transform focus:translate-y-0.5 focus:duration-100"
				>
					Check
				</button>
			</form>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	return { props: { exam: parseExam(sampleExam) } }
}

export default ExamPage
