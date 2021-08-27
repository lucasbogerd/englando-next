import test from '../data/example-test'
import {
	ParseQuestionString,
	QuestionAnswer,
} from '../shared/parseQuestionText'

export default function Test(): JSX.Element {
	const data = test()

	return (
		<div className="mx-auto my-auto">
			<h1 className="mb-5 text-3xl">{data.testName}</h1>
			<div>
				{data.questions.map((q, i) => {
					return (
						<div key={`question-${Math.random()}`}>
							<Question question={q} key={`question-${i}`} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export function Question({ question }): JSX.Element {
	let renderFragments: JSX.Element[] = []

	const parsedQuestion = ParseQuestionString(question)

	for (let i = 0; i < parsedQuestion.TextParts.length; i++) {
		const textPart = parsedQuestion.TextParts[i]

		renderFragments = [
			...renderFragments,
			<span key={Math.random()}>{textPart}</span>,
			parsedQuestion.Answers[i] && (
				<QuestionAnswerSpan
					answer={parsedQuestion.Answers[i]}
					key={`answer-${Math.random()}`}
				/>
				// <span>{parsedQuestion.Answers[i].Answer}</span>
			),
		]
	}

	return <>{renderFragments}</>
}

type QuestionAnswerSpanProps = {
	answer: QuestionAnswer
}

export function QuestionAnswerSpan({ answer }: QuestionAnswerSpanProps) {
	return (
		<>
			<input type="text" className="w-20" />
			<span>({answer.Suggestion})</span>
		</>
	)
}
