import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Exam, Exercise } from '../shared/types'

import { useAtom } from 'jotai'
import { selectedTensesAtom } from '../shared/atoms/store'

const ConvertToInitialValues = (exercises: Exercise[]) => {
	const questionAnswers = exercises.flatMap((exercise) =>
		exercise.Parts.filter((part) => typeof part !== 'string')
	)

	return questionAnswers
}

const PracticePage = (): JSX.Element => {
	const [selectedTenses] = useAtom(selectedTensesAtom)

	// if (
	// 	//!isPastSimpleSelected &&
	// 	// !isPresentSimpleSelected &&
	// 	// !isPresentContinuousSelected
	// 	true
	// ) {
	// 	{
	// 		console.log(selectedTenses)
	// 	}
	// 	return <div>{selectedTenses.presentSimple ? 'uhu' : 'nah'}</div>
	// }

	// Get all relevent exercises in one array and shuffle the array
	useEffect(() => {
		const allExercises: string[] = []

		// // Add exercises if selected
		// if (isPastSimpleSelected) allExercises.concat(pastSimple.exercises)
		// if (isPresentContinuousSelected)
		// 	allExercises.concat(presentContinuous.exercises)
		// if (isPresentSimpleSelected) allExercises.concat(presentSimple.exercises)

		// Shuffle with Fisher-Yates
		// Source: https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
		for (let i = allExercises.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			const temp = allExercises[i]
			allExercises[i] = allExercises[j]
			allExercises[j] = temp
		}

		console.log('present simple:')
		console.log(selectedTenses.presentSimple)
		console.log('past simple:')
		console.log(selectedTenses.pastSimple)
		console.log('present continuous:')
		console.log(selectedTenses.presentContinouos)
	}, [selectedTenses])

	return <div>{selectedTenses.pastSimple}</div>
}

export default PracticePage
