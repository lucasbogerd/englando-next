import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Exam, Exercise } from '../shared/types'

import { presentSimple } from '../shared/exams/present-simple'
import { presentContinuous } from '../shared/exams/present-continuous'
import { pastSimple } from '../shared/exams/past-simple'
import { useAtom } from 'jotai'
import {
	isPastSimpleSelectedAtom,
	isPresentContinuousSelectedAtom,
	isPresentSimpleSelectedAtom,
} from '../shared/atoms/store'

const ConvertToInitialValues = (exercises: Exercise[]) => {
	const questionAnswers = exercises.flatMap((exercise) =>
		exercise.Parts.filter((part) => typeof part !== 'string')
	)

	return questionAnswers
}

const PracticePage = (): JSX.Element => {
	const [isPastSimpleSelected] = useAtom(isPastSimpleSelectedAtom)
	const [isPresentContinuousSelected, setIsPresentContinuousSelected] = useAtom(
		isPresentContinuousSelectedAtom
	)
	const [isPresentSimpleSelected, setIsPresentSimpleSelected] = useAtom(
		isPresentSimpleSelectedAtom
	)

	if (isPresentSimpleSelected) {
		console.log('yup!')
	} else {
		console.log('nope!')
	}

	if (
		!isPastSimpleSelected &&
		!isPresentSimpleSelected &&
		!isPresentContinuousSelected
	) {
		return <div>ERROR</div>
	}

	// Get all relevent exercises in one array and shuffle the array
	useEffect(() => {
		const allExercises: string[] = []

		// Add exercises if selected
		if (isPastSimpleSelected) allExercises.concat(pastSimple.exercises)
		if (isPresentContinuousSelected)
			allExercises.concat(presentContinuous.exercises)
		if (isPresentSimpleSelected) allExercises.concat(presentSimple.exercises)

		// Shuffle with Fisher-Yates
		// Source: https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
		for (let i = allExercises.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			const temp = allExercises[i]
			allExercises[i] = allExercises[j]
			allExercises[j] = temp
		}

		console.log('present simple:')
		console.log(isPresentSimpleSelected)
		console.log('past simple:')
		console.log(isPastSimpleSelected)
		console.log('present continuous:')
		console.log(isPresentContinuousSelected)
	}, [
		isPresentSimpleSelected,
		isPresentContinuousSelected,
		isPastSimpleSelected,
	])

	return <div>{isPastSimpleSelected}</div>
}

export default PracticePage
