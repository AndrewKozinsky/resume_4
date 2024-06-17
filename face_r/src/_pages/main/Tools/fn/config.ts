export type ToolConfig = {
	toolName: {
		rus: string
		eng: string
	}
	description: {
		rus: string[]
		eng: string[]
	}
}

export type ToolsConfig = ToolConfig[]

export const toolsConfig: ToolsConfig = [
	{
		toolName: {
			rus: 'TypeScript',
			eng: 'TypeScript',
		},
		description: {
			rus: ['Использую 4 года. Ранее несколько лет JavaScript.'],
			eng: ['I have been using it for 4 years. I used to use JavaScript.'],
		},
	},
	{
		toolName: { rus: 'React и Next', eng: 'React and Next' },
		description: {
			rus: [
				'Реакт и сопутствующие технологии 3 года коммерческого и 5 лет использования.',
				'Next, 8 месяцев коммерческого использования и для своих проектов.',
				'Стили: SCSS. Ранее на CSS-modules.',
				'Состояние: Редакс, затем Redux Toolkit, кое-что писал на Контексте и остановился на Зустанде как на простом и удобном решении. ',
				'Для сложной логики подключал XState и проектировал переходы в их редакторе, но не понравился.',
				'React Router для навигации по страницам.',
				'React Query для управления и кешированием запросов. Сами запросы через Аксиос.',
				'На Вебпаке настраивал проект для работы с Реактом  (перевод TS в JavaScript, SCSS в CSS, webpack-dev-server, сборка для разработки и публикации, генерация HTML,). Вит для быстрой сборки экспериментальных проектов.',
				'На последнем месте работы брал компоненты из And Design.',
				'Eslint, Prettier.',
			],
			eng: [
				'React and related technologies: I have 3 years commercial and 5 years use experience.',
				'Next, 8 months commercial and personal usage experience for my projects.',
				'Styles: SCSS and CSS-modules earlier.',
				'State: Redux and Redux Toolkit. I used to use Context and choose Zustand because of its simplify and convenient syntax.',
				'I used XState for complicated state and I designed transitions on their editor, but I does not like it much.',
				'React Router for pages navigation.',
				'React Query to managing and caching queries. The requests themselves I made via Axios',
				'I used Webpack for set up a project to work with React (TS to JavaScript, SCSS to CSS, webpack-dev-server, building for development and production, HTML generation).',
				'I worded with And Design on the last work.',
				'Eslint, Prettier.',
			],
		},
	},
	{
		toolName: { rus: 'NodeJS и Nest', eng: 'NodeJS and Nest' },
		description: {
			rus: [
				'Самостоятельно изучал, но затем понял, что нет понимания фундаментальных знаний. Поэтому пошёл на https://it-incubator.io/education/back-end. Сейчас на 6-ом месяце. Изученные темы: Express, MongoDB, JWT и авторизация, отправка электронных писем, Refresh и Access Token, Mongoose, Nest, Postgres, TypeORM.',
			],
			eng: [
				'I studied on my own, but I realized that I did not have fundamental knowledge. That is why I went to https://it-incubator.io/education/back-end. I am in sixth month now. Covered topics: Express, MongoDB, JWT and authorization, email sending, Refresh and Access Token, Mongoose, Nest, Postgres, TypeORM.',
			],
		},
	},
	{
		toolName: { rus: 'Тесты', eng: 'Tests' },
		description: {
			rus: [
				'Писал e2e и модульные тесты. В основном на API. Есть опыт тестирования клиентских компонентов.',
			],
			eng: [
				'I wrote e2e and modulat tests. API in general. But I have experience of the client components testing.',
			],
		},
	},
	{
		toolName: { rus: 'Вёрстка', eng: 'Markup' },
		description: {
			rus: [
				'На протяжении 5 лет проектировал UI и внешний вид классических сайтов. Figma/Sketch/Photoshop. Делал адаптивную вёрстку HTML, CSS.',
			],
			eng: [
				'For 5 years I designed UI of classic websites. Figma/Sketch/Photoshop. I made responsive markup with HTML and CSS.',
			],
		},
	},
	{
		toolName: { rus: 'Другое', eng: 'Other' },
		description: {
			rus: [
				'Git на уровне клонировать, сделать коммит, обновить, слить. Работал по git-flow.',
				'Терминал знаю на уровне поставить пакет из NPM, запуск основных команд NPM и Докера.',
				'Все свои проекты делаю на Докере.',
				'Читаю документацию на английском.',
				'Есть небольшой опыт просмотра кода новых членов команды с советами как писать лаконичнее и проще.',
			],
			eng: [
				'I know git in the level of clone, make a commit, push, merge. I have worked on Git-flow methodology.',
				'I know the terminal in the level of installing a package from NPM and running main commands.',
				'I use Docker for all my projects.',
				'I read English documentation.',
				'I have some experience reviewing of the code new team members with advices how to write more easy and concisely.',
			],
		},
	},
]
