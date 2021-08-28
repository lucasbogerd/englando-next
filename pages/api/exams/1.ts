import { NextApiRequest, NextApiResponse } from 'next'

export default function Handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json({
		name: 'Example Test',
		exercises: [
			'I just {?eat=ate} gyros from Fat Greek',
			'My dude {?have=had} the biggest biceps I had ever seen!',
			'I {?walk=walked} home through the snow. It {?be=was} very cold',
		],
	})
}
