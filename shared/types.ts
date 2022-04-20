export type UnparsedExam = {
	name: string
	type: ExamTypes
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
	PastContinuous = 'past-continuous',
	PastPerfect = 'past-perfect',
	PresentSimple = 'present-simple',
	PresentPerfect = 'present-perfect',
	PresentContinuous = 'present-continuous',
	PresentPerfectContinuous = 'present-perfect-continuous',
	FuturePresentSimple = 'future-present-simple',
	FuturePresentContinuous = 'future-present-continuous',
	FutureSimpleWill = 'future-simple-will',
	FutureSimpleGoingTo = 'future-simple-going-to',
}
