import { Exam, Exercise, QuestionAnswer, UnparsedExam } from '../types'

export const parseExam = (unparsedExam: UnparsedExam): Exam => {
	const parsedExercises: Exercise[] = unparsedExam.exercises.map(
		(exerciseString) => parseExercise(exerciseString)
	)

	return {
		Name: unparsedExam.name,
		Exercises: parsedExercises,
	}
}

export const parseExercise = (exerciseString: string): Exercise => {
	// Split the string on every pair of {}
	const unparsedExerciseParts = exerciseString.split(/{(.*?)}/g)

	return {
		Parts: unparsedExerciseParts.map((unparsedExercisePart) =>
			unparsedExercisePart.charAt(0) === '?'
				? parseQuestionAnswer(unparsedExercisePart)
				: unparsedExercisePart
		),
	}
}

export const parseQuestionAnswer = (partString: string): QuestionAnswer => {
	// Will contain an empty string as first element so filter that out
	const questionAndAnswer = partString
		.split(/[?,=]/g)
		.filter((answerPart) => !!answerPart)

	return { Question: questionAndAnswer[0], Answer: questionAndAnswer[1] }
}
