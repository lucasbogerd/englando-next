export type Question = {
	Id: null | number
	Parts: QuestionPart[]
}

export type QuestionPart = {
	Id: number
	Content: string | ParsedAnswer
}

export type ParsedAnswer = {
	Answer: string
	Suggestion: string
}

// I'm sure there's a quicker way to do this using just RegEx but I suck at RegEx
export function QuestionTextToQuestion(questionString: string): Question {
	// Split the string on every pair of {}
	const unparsedQuestionParts = questionString.split(/{(.*?)}/g)

	const questionParts: QuestionPart[] = unparsedQuestionParts.map((qp, i) => {
		if (qp.charAt(0) === '?') {
			// Will contain an empty string as first element so filter that out
			const answerAndSuggestion = qp
				.split(/[?,=]/g)
				.filter((answerPart) => !!answerPart)

			return {
				Id: i,
				Content: {
					Answer: answerAndSuggestion[0],
					Suggestion: answerAndSuggestion[1],
				},
			}
		}

		return { Id: i, Content: qp }
	})

	return {
		Id: null,
		Parts: questionParts,
	}
}
