import {
	useForm,
	SubmitHandler,
	UseFormRegister,
	FieldValues,
} from 'react-hook-form'

import test from '../data/example-test'
import {
	ParseQuestionString,
	QuestionAnswer,
} from '../shared/parseQuestionText'

export default function Test(): JSX.Element {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()
	const data = test()
	const onSubmit = (data) => console.log(data)

	return (
		<div className="mx-auto my-auto">
			<h1 className="mb-5 text-3xl">{data.testName}</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				{data.questions.map((q, i) => {
					return (
						<div key={`question-${Math.random()}`}>
							<Question
								question={q}
								key={`question-${i}`}
								registerFunction={register}
								nameToRegister={`registername-${i}`}
							/>
						</div>
					)
				})}
				<input type="submit" value="controleer" />
			</form>
		</div>
	)
}

export function Question({
	question,
	registerFunction,
	nameToRegister,
}): JSX.Element {
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
					registerFunction={registerFunction}
					nameToRegister={nameToRegister}
				/>
				// <span>{parsedQuestion.Answers[i].Answer}</span>
			),
		]
	}

	return <>{renderFragments}</>
}

type QuestionAnswerSpanProps = {
	answer: QuestionAnswer
	registerFunction: UseFormRegister<FieldValues>
	nameToRegister: string
}

export function QuestionAnswerSpan({
	answer,
	registerFunction,
	nameToRegister,
}: QuestionAnswerSpanProps) {
	return (
		<>
			<input
				type="text"
				className={`w-16`}
				{...registerFunction(nameToRegister, {
					required: true,
					validate: { isCorrect: (value) => value === answer.Answer },
				})}
			/>
			<span>({answer.Suggestion})</span>
		</>
	)
}
