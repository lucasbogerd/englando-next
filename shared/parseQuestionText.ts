export type QuestionAnswer = {
	Suggestion: string
	Answer: string
}

export type Question = {
	TextParts: string[]
	Answers: QuestionAnswer[]
}

export function ParseQuestionString(questionString: string): Question {
	const parsedQuestion: Question = {
		TextParts: [questionString],
		Answers: [],
	}

	const regExGroups = [...questionString.matchAll(/\?([a-zA-Z]*)=([a-zA-Z]*)/g)]

	for (const regExGroup of regExGroups) {
		const remainingTextSplit = parsedQuestion.TextParts.slice(-1)[0] // Select last element
			.split(regExGroup[0]) // Remove regExGroup[0] (which is the full match, for example ?walk=walked)

		parsedQuestion.TextParts = [
			...parsedQuestion.TextParts.slice(0, -1), // Remove last element of TextParts as it is replaced with the elements above
			...remainingTextSplit,
		]

		// Parse and add Answer to parsedQuestion
		parsedQuestion.Answers.push({
			Suggestion: regExGroup[1],
			Answer: regExGroup[2],
		})
	}

	return parsedQuestion
}
