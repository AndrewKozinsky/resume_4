export type ExperienceConfigItem = {
	startDate: string
	endDate: string
	duration: string
	companyName: string
	companySite: string
	position: string
	description: string[]
	technologies: string[]
	achievements?: string[]
}

export type ExperienceItems = ExperienceConfigItem[]

export const experienceConfig: ExperienceItems = [
	{
		startDate: 'Июнь 2012',
		endDate: 'Март 2014',
		duration: '1 год 10 месяцев',
		companyName: '2 ГИС',
		companySite: '2gis.ru',
		position: 'Оформитель рекламных материалов',
		description: [
			'Делал всё начиная от рекламы показываемой в программе, до вёрстки статей и полиграфии. Ушёл потому что было желание заниматься сайтами.',
		],
		technologies: ['Photoshop', 'Illustrator', 'HTML', 'CSS'],
	},
	{
		startDate: 'Август 2014',
		endDate: 'Июль 2015',
		duration: '1 год',
		companyName: 'Веб-студия «Информада»',
		companySite: 'informada.ru',
		position: 'Оформитель сайтов',
		description: [
			'Рисовал одностраничные и многостраничные сайты, каталоги, магазины. После весь материал отдавал верстальщику.',
		],
		technologies: ['Photoshop', 'Illustrator'],
	},
	{
		startDate: 'Апрель 2016',
		endDate: 'Август 2020',
		duration: '4 года 5 месяцев',
		companyName: 'ООО «Русхит»',
		companySite: 'kflex.ru',
		position: 'Оформитель и верстальщик сайтов',
		description: [
			'Удалённо занимался с оформление и вёрсткой сайтов, писем и другими вещами связанными с рекламой в интернете.',
			'Я закончил сотрудничество потому что хотелось полноценно писать сложные приложения на Реакте. А в этой компании таких задач не было.',
		],
		technologies: ['HTML', 'CSS', 'Javascript'],
		achievements: ['Предлагал множество идей для увеличения конверсии сайта.'],
	},
	{
		startDate: 'Октябрь 2020',
		endDate: 'Июль 2021',
		duration: '10 месяцев',
		companyName: 'Minervasoft',
		companySite: 'minervasoft.ru',
		position: 'Программист React',
		description: [
			'Разработка информационной системы',
			'Подробности не раскрывается из-за Соглашения о неразглашении',
			'Я принял решение об уходе потому что понял, что проект мне не близок.',
		],
		technologies: ['React', 'Redux', 'SCSS'],
		achievements: ['Продавил внедрение TypeScript-а для увеличения надёжности кода.'],
	},
	{
		startDate: 'Ноябрь 2021',
		endDate: 'Апрель 2022',
		duration: '6 месяцев',
		companyName: 'Skedbar.com',
		companySite: 'Skedbar.com',
		position: 'Программист React',
		description: [
			'Реализация маркетинговых гипотез улучшающих взаимодействие пользователей с сервисом. Работал с React-ом и Next-ом.',
			'Компания отказалась от проверки гипотез и перешли на другие инструменты где не требуется программирование.',
		],
		technologies: ['React', 'Next', 'Redux'],
		achievements: ['Предлагал гипотезы для улучшения продукта'],
	},
	{
		startDate: 'Сентябрь 2022',
		endDate: 'Декабрь 2023',
		duration: '1 год 4 месяца',
		companyName: 'Образовательная платформа',
		companySite: 'credu.ai',
		position: 'Программист React',
		description: [
			'Разработка клиентской части платформы для создания школ преподающих иностранные языки. Создание курсов, уроков, упражнений, заведение учеников, вывод, фильтрация, заказы, страницы со статистикой успеваемости, сотрудники, профили пользователей, оплаты, конструктор одностраничников, регистрация, вход.',
			'В проекте написал порядка 90% всего клиентского кода.',
			'Видео с описанием функций: youtube.com/@creduplatform',
			'Руководитель решил остановить активную разработку потому что работающего функциона было достаточно для запуска.',
		],
		technologies: ['TypeScript', 'React 18', 'Zustand', 'XState', 'React Query', 'Axios'],
		achievements: [
			'Перевёл проект на другую систему управления состоянием чтобы уменьшить сложность и сократить время написания кода.',
			'Написал шаблонный компонент формы чтобы упростить переиспользование логики и уменьшить время написания других форм.',
			'Когда потребовалась реализовать сложную логику изучил XState.',
		],
	},
]
