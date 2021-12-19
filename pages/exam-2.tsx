import { useForm } from 'react-hook-form'

import { Exam, ExamTypes } from '../shared/types'
import { parseExam } from '../shared/logic/parseExam'
import { useEffect } from 'react'
import useSearchParams from '../shared/logic/useSearchParams'
import { useState } from 'react'
import { unparsedExams } from '../shared/data/unparsed-exams'
import getRandom from '../shared/logic/getRandomItemsFromArray'

const ExamPage = (): JSX.Element => {
	// eslint-disable-next-line prefer-const
	let query: URLSearchParams = useSearchParams()
	const [selectedExamTypes, setSelectedExamTypes] = useState<ExamTypes[]>([])
	const [exam, setExam] = useState<Exam | undefined>(undefined)

	useEffect(() => {
		setSelectedExamTypes([])
		query.forEach((_v, k) => {
			// Check if key exists in ExamTypes (enum)
			// src: https://github.com/microsoft/TypeScript/issues/33200#issuecomment-527670779
			if (Object.values(ExamTypes).includes(k as ExamTypes)) {
				setSelectedExamTypes((selectedExamTypes) => [
					...selectedExamTypes,
					k as ExamTypes,
				])
			}
		})
	}, [query])

	useEffect(() => {
		setExam(undefined)

		let relevantExercises: string[] = []

		for (let i = 0; i < selectedExamTypes.length; i++) {
			const selectedExamType = selectedExamTypes[i]

			relevantExercises = [
				...relevantExercises,
				...unparsedExams.find(
					(unparsedExam) => unparsedExam.type === selectedExamType
				).exercises,
			]
		}

		setExam(() =>
			selectedExamTypes.length > 0
				? parseExam({
						name: 'asdf',
						type: ExamTypes.PastSimple,
						exercises: getRandom(relevantExercises, 15),
				  })
				: undefined
		)
	}, [selectedExamTypes])

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitted },
	} = useForm()
	const onSubmit = (data) => console.log(data)

	return !exam?.Exercises ? (
		<div>No exercises found</div>
	) : (
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
														validate: (value: string) =>
															value.toLowerCase() === part.Answer.toLowerCase(),
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

export default ExamPage
