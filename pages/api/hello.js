// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function helloAPI(req, res) {
	res.status(200).json({ name: 'John Doe' })
}
