import { useRouter } from 'next/dist/client/router'
import React from 'react'

const useSearchParams = (): URLSearchParams => {
	const { query } = useRouter()

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return React.useMemo(() => new URLSearchParams(query), [query])
}

export default useSearchParams
