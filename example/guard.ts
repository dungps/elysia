import KingWorld from '../src'

new KingWorld()
	.get('/', () => 'Hi')
	// .guard(
	// 	{
	// 		preHandler: ({ query }) => {
	// 			if (!query.name) return 'Query name is required'
	// 		}
	// 	},
	// 	(app) =>
	// 		app.get<{
	// 			query: {
	// 				name: string
	// 			}
	// 		}>('/profile', ({ query: { name } }) => `Hi ${name}`)
	// )
	.get('/profile', () => "Hi")
	.listen(3000)
