export type ProjectConfig = {
	name: {
		rus: string
		eng: string
	}
	github?: string
	description?: {
		rus: string[]
		eng: string[]
	}
	technologies: string[]
}

export type ProjectsConfig = ProjectConfig[]

export const projectsConfig: ProjectsConfig = [
	{
		name: {
			rus: 'Редактор Эдиториум',
			eng: 'Editor Editorium',
		},
		github: 'github.com/AndrewKozinsky/editor',
		description: {
			rus: [
				'Я придумал принцип его работы, нарисовал и написал код.',
				'Объяснение принципа работы: youtube.com/watch?v=2SB0DEwHLqg',
				'Не стал продолжать потому что это нет ни времени, ни денег.',
			],
			eng: [
				'I came up with the principle of its work, drew it and wrote the code.',
				'Here I explained how it works: youtube.com/watch?v=2SB0DEwHLqg',
				'I did not go further because I had neither time, nor money.',
			],
		},
		technologies: ['React', 'Node', 'Next', 'Nest', 'Docker'],
	},
	{
		name: {
			rus: 'explainit.ru',
			eng: 'explainit.ru',
		},
		description: {
			rus: ['Учебник английского языка.'],
			eng: ['English language textbook.'],
		},
		technologies: ['Next', 'Nest', 'Zustand'],
	},
	{
		name: {
			rus: 'Расширение Фигмы',
			eng: 'A Figma extension',
		},
		github: 'github.com/AndrewKozinsky/figma-to-code',
		description: {
			rus: ['Перевод макетов в формат данных для формирования статей.'],
			eng: ['It converts Figma layouts to data to form articles.'],
		},
		technologies: ['TypeScript'],
	},
	{
		name: {
			rus: 'Обработчик форм',
			eng: 'A form handler',
		},
		github: 'github.com/AndrewKozinsky/modern-react-form',
		technologies: ['React'],
	},
	{
		name: {
			rus: 'API',
			eng: 'API',
		},
		github: 'github.com/AndrewKozinsky/blogs-nest',
		description: {
			rus: [
				'Взаимодействие с блогами, заметками, комментариями, пользователями, авторизациями.',
			],
			eng: ['It works with blogs, posts, comments, users and deals with authorization.'],
		},
		technologies: ['Nest', 'Postgres'],
	},
]
