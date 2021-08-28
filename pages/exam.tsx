import { GetStaticProps } from 'next'

import { Exam, Exercise, QuestionAnswer } from '../shared/types'
import { sampleExam } from '../shared/sample-data'
import { parseExam } from '../shared/logic/parseExam'
import { Field, FieldArray, Form, Formik } from 'formik'

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
	return (
		<div>
			<h1>{exam.Name}</h1>

			<Formik
				initialValues={{
					exercises: exam.Exercises,
				}}
				onSubmit={(data) => console.log(data)}
			>
				{({ values }) => (
					<Form>
						<FieldArray
							name="questions"
							render={() => (
								<ul>
									{values.exercises.map((exercise, i) => {
										let questionCount = -1

										return (
											<li key={`exercise-${i}`}>
												{exercise.Parts.map((part, j) => {
													if (typeof part === 'string') {
														return <span key={`part-${j}`}>{part}</span>
													}

													questionCount++
													return (
														<Field
															key={`part-${j}`}
															name={`exercise-${i}_question-${questionCount}`}
														/>
													)
												})}
											</li>
										)
									})}
								</ul>
							)}
						/>
						<button type="submit">Controleren</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	return { props: { exam: parseExam(sampleExam) } }
}

export default ExamPage
