import { UnparsedExam } from '../types'
import { futurePresentContinuous } from './future-present-continuous'
import { futurePresentSimple } from './future-present-simple'
import { futureSimpleGoingTo } from './future-simple-going-to'
import { futureSimpleWill } from './future-simple-will'
import { pastContinuous } from './past-continuous'
import { pastSimple } from './past-simple'
import { presentContinuous } from './present-continuous'
import { presentPerfect } from './present-perfect'
import { presentSimple } from './present-simple'
import { pastPerfect } from './past-perfect'
import { presentPerfectContinuous } from './present-perfect-continuous'

export const unparsedExams: UnparsedExam[] = [
	pastSimple,
	presentContinuous,
	presentSimple,
	presentPerfect,
	pastContinuous,
	futurePresentSimple,
	futurePresentContinuous,
	futureSimpleWill,
	futureSimpleGoingTo,
	pastPerfect,
	presentPerfectContinuous
]
