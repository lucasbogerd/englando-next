import { UnparsedExam } from '../types'
import { pastContinuous } from './past-continuous'
import { pastSimple } from './past-simple'
import { presentContinuous } from './present-continuous'
import { presentPerfect } from './present-perfect'
import { presentSimple } from './present-simple'

export const unparsedExams: UnparsedExam[] = [
	pastSimple,
	presentContinuous,
	presentSimple,
	presentPerfect,
	pastContinuous,
]
