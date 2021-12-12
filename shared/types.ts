export type UnparsedExam = {
	name: string
	exercises: string[]
}

export type Exam = {
	Name: string
	Exercises: Exercise[]
}

export type Exercise = {
	Parts: (string | QuestionAnswer)[]
}

export type QuestionAnswer = {
	Question: string
	Answer: string
}

export enum ExamTypes {
	PastSimple = 'past-simple',
	PresentContinuous = 'present-continuous',
	PresentSimple = 'present-simple',
}
