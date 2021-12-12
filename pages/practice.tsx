import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Exam, Exercise } from '../shared/types'

import { presentSimple } from '../shared/data/present-simple'
import { presentContinuous } from '../shared/data/present-continuous'
import { pastSimple } from '../shared/data/past-simple'
import { useAtom } from 'jotai'
import {
	isPastSimpleSelectedAtom,
	isPresentContinuousSelectedAtom,
	isPresentSimpleSelectedAtom,
} from '../shared/data'

const ConvertToInitialValues = (exercises: Exercise[]) => {
	const questionAnswers = exercises.flatMap((exercise) =>
		exercise.Parts.filter((part) => typeof part !== 'string')
	)

	return questionAnswers
}

const PracticePage = (): JSX.Element => {
	const [isPresentSimpleSelected] = useAtom(isPresentSimpleSelectedAtom)
	const [isPresentContinuousSelected] = useAtom(isPresentContinuousSelectedAtom)
	const [isPastSimpleSelected] = useAtom(isPastSimpleSelectedAtom)

	if (
		!isPastSimpleSelected &&
		!isPresentContinuousSelected &&
		!isPresentSimpleSelected
	) {
		return <div>ERROR</div>
	}

	useEffect(() => {
		const selectedQuestions: string[] = []

		for (let i = 0; i < 50; i++) {
			if (selectedQuestions.length >= 15) {
				break
			}

			const tenseToPickFrom = 'asdf'
		}
	}, [
		isPresentSimpleSelected,
		isPresentContinuousSelected,
		isPastSimpleSelected,
	])

	//ConvertToInitialValues()

	return <div>HET WERKT</div>
}

export default PracticePage
