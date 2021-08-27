import { useForm, useFieldArray, useWatch, Control } from 'react-hook-form'

type FormValues = {
	questions: {
		answers: string[]
	}[]
}

export default function Test3() {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>()

	const { fields } = useFieldArray({
		control,
		name: 'test',
	})
}
