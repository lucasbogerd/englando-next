export type QuestionPart = {
	Content: string | ParsedAnswer
}

export type ParsedAnswer = {
	Suggestion: string
	Answer: string
}

// I'm sure there's a quicker way to do this using just RegEx but I suck at RegEx
export function QuestionTextToArray(questionString: string): QuestionPart[] {
	// Split the string on every pair of {}
	const unparsedQuestionParts = questionString.split(/{(.*?)}/g)

	const questionParts: QuestionPart[] = unparsedQuestionParts.map((qp) => {
		if (qp.charAt(0) === '?') {
			// Will contain an empty string as first element so filter that out
			const answerAndSuggestion = qp
				.split(/[?,=]/g)
				.filter((answerPart) => !!answerPart)

			return {
				Content: {
					Answer: answerAndSuggestion[0],
					Suggestion: answerAndSuggestion[1],
				},
			}
		}

		return { Content: qp }
	})

	return questionParts
}
