import { useForm } from 'react-hook-form'

import { Exam, ExamTypes } from '../shared/types'
import { parseExam } from '../shared/logic/parseExam'
import { useEffect } from 'react'
import useSearchParams from '../shared/logic/useSearchParams'
import { useState } from 'react'
import { unparsedExams } from '../shared/data/unparsed-exams'
import getRandom from '../shared/logic/getRandomItemsFromArray'
import Container from '../components/Container'
import Button from '../components/Button'

const ExamPage = (): JSX.Element => {
	// eslint-disable-next-line prefer-const
	let query: URLSearchParams = useSearchParams()
	const [selectedExamTypes, setSelectedExamTypes] = useState<ExamTypes[]>([])
	const [exam, setExam] = useState<Exam | undefined>(undefined)

	useEffect(() => {
		setSelectedExamTypes([])
		query.forEach((v, k) => {
			// Check if key exists in ExamTypes (enum)
			// src: https://github.com/microsoft/TypeScript/issues/33200#issuecomment-527670779
			if (
				Object.values(ExamTypes).includes(k as ExamTypes) &&
				v.toLowerCase() === 'true'
			) {
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
						name: 'Exercises',
						type: ExamTypes.PastSimple,
						exercises: getRandom(relevantExercises, 15),
				  })
				: undefined
		)
	}, [selectedExamTypes])

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitted, touchedFields },
	} = useForm()
	const onSubmit = (data) => console.log(data)

	return !exam?.Exercises ? (
		<div>No exercises found</div>
	) : (
		<Container>
			<h1 className="text-2xl mt-2 sm:mt-4 mb-4 font-bold">{exam.Name}</h1>

			<form
				onSubmit={handleSubmit(onSubmit)}
				onKeyPress={(e) => {
					// Make 'Enter' focus next input
					if (e.key === 'Enter') {
						e.preventDefault()
						const fields =
							Array.from(e.currentTarget.querySelectorAll('input')) || []
						const position = fields.indexOf(e.target as HTMLInputElement)
						fields[position + 1] && fields[position + 1].focus()
					}
				}}
			>
				<ul className="mb-8">
					{exam.Exercises.map((exercise, i) => {
						let questionCount = -1
						return (
							<li
								key={`exercise-${i}`}
								className="p-3 my-5 bg-white rounded-md shadow-md leading-relaxed"
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
												className={`px-2 py-0.5 w-32 md:w-32 transition duration-500 rounded ${
													errors[currentQuestionId] && isSubmitted
														? 'bg-red-200'
														: !errors[currentQuestionId] && isSubmitted
														? // && Object.keys(touchedFields).includes(
														  //	currentQuestionId
														  // )
														  'bg-green-200'
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
				<Button type="submit">Check</Button>
			</form>
		</Container>
	)
}

export default ExamPage
