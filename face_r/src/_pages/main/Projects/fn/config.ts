export type ProjectConfig = {
	name: string
	github?: string
	description?: string[]
	technologies: string[]
}

export type ProjectsConfig = ProjectConfig[]

export const projectsConfig: ProjectsConfig = [
	{
		name: 'Редактор Эдиториум',
		github: 'github.com/AndrewKozinsky/editor',
		description: [
			'Я придумал принцип его работы, нарисовал и написал код.',
			'Объеснение принципа работы: youtube.com/watch?v=2SB0DEwHLqg',
			'Не стал продолжать потому что это нет ни времени, ни денег.',
		],
		technologies: ['Реакте', 'Ноде', 'Нексте', 'Несте', 'Докере'],
	},
	{
		name: 'explainit.ru',
		description: ['Учебник английского языка.'],
		technologies: ['Next', 'Nest', 'Zustand'],
	},
	{
		name: 'Расширение Фигмы',
		github: 'github.com/AndrewKozinsky/figma-to-code',
		description: ['Перевод макетов в формат данных для формирования статей.'],
		technologies: ['TypeScript'],
	},
	{
		name: 'Обработчик форм',
		github: 'github.com/AndrewKozinsky/modern-react-form',
		technologies: ['React'],
	},
	{
		name: 'API',
		github: 'github.com/AndrewKozinsky/blogs-nest',
		description: [
			'Взаимодействие с блогами, заметками, комментариями, пользователями, авторизациями.',
		],
		technologies: ['NestJs', 'Postgres', '', ''],
	},
]
