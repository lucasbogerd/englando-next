import { Formik } from 'formik'

import test from '../data/example-test'
import {
	ParsedAnswer,
	Question,
	QuestionPart,
	QuestionTextToQuestion,
} from '../shared/QuestionTextToArray'

function GetInitialValues(questions: Question[]): object {
	questions.forEach((q) => {
		const questionAnswerIds = q.Parts.filter((p) => typeof p !== 'string').map(
			(p) => `question-${q.Id}_answer-${p.Id}`
		)
		return {
			...questionAnswerIds,
		}
	})
}

export default function Test2(): JSX.Element {
	const data = test()
	const parsedQuestions = data.questions.map((q, i) => {
		let parsedQuestion = QuestionTextToQuestion(q)
		parsedQuestion.Id = i

		return parsedQuestion
	})

	return (
		<div className="mx-auto my-auto">
			<h1 className="mb-5 text-3xl">{data.testName}</h1>
			<Formik
				initialValues={{}}
				validate={(values) => {
					const errors = {}
					//if (!values.)
				}}
			>
				{parsedQuestions.map((q, i) => (
					<div key={`question-${q.Id}`}>
						{q.Parts.map((qp, j) => (
							<span key={`question-${q.Id}_part-${j}`}>
								{typeof qp.Content === 'string' ? (
									qp.Content
								) : (
									<input name={`${qp.Content}-${j}`}></input>
								)}
							</span>
						))}
					</div>
				))}
			</Formik>
		</div>
	)
}
