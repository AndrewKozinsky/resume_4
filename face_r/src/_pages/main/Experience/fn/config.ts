export type ExperienceConfigItem = {
	startDate: {
		rus: string
		eng: string
	}
	endDate: {
		rus: string
		eng: string
	}
	duration: {
		rus: string
		eng: string
	}
	companyName: {
		rus: string
		eng: string
	}
	companySite: string
	position: {
		rus: string
		eng: string
	}
	description: {
		rus: string[]
		eng: string[]
	}
	technologies: string[]
	achievements?: {
		rus: string[]
		eng: string[]
	}
}

export type ExperienceItems = ExperienceConfigItem[]

export const experienceConfig: ExperienceItems = [
	{
		startDate: {
			rus: 'Июнь 2012',
			eng: 'June 2012',
		},
		endDate: { rus: 'Март 2014', eng: 'March 2014' },
		duration: {
			rus: '1 год 10 месяцев',
			eng: '1 year 10 months',
		},
		companyName: {
			rus: '2 ГИС',
			eng: '2 GIS',
		},
		companySite: '2gis.ru',
		position: {
			rus: 'Оформитель рекламных материалов',
			eng: 'Advertising material designer',
		},
		description: {
			rus: [
				'Делал всё начиная от рекламы показываемой в программе, до вёрстки статей и полиграфии. Ушёл потому что было желание заниматься сайтами.',
			],
			eng: [
				'I did everything from advertisement shown in the program till the articles layouts and printing. I went because I have a wish to make web-sites.',
			],
		},
		technologies: ['Photoshop', 'Illustrator', 'HTML', 'CSS'],
	},
	{
		startDate: {
			rus: 'Август 2014',
			eng: 'August 2014',
		},
		endDate: {
			rus: 'Июль 2015',
			eng: 'July 2015',
		},
		duration: {
			rus: '1 год',
			eng: '1 year',
		},
		companyName: {
			rus: 'Веб-студия «Информада»',
			eng: 'Web-studio «Informada»',
		},
		companySite: 'informada.ru',
		position: {
			rus: 'Оформитель сайтов',
			eng: 'Website designer',
		},
		description: {
			rus: [
				'Рисовал одностраничные и многостраничные сайты, каталоги, магазины. После весь материал отдавал верстальщику.',
			],
			eng: [
				'I draw multi and landing pages, catalogues, shops. After all I gave all materials to a programmer.',
			],
		},
		technologies: ['Photoshop', 'Illustrator'],
	},
	{
		startDate: {
			rus: 'Апрель 2016',
			eng: 'April 2016',
		},
		endDate: {
			rus: 'Август 2020',
			eng: 'August 2020',
		},
		duration: {
			rus: '4 года 5 месяцев',
			eng: '4 years 5 months',
		},
		companyName: {
			rus: 'ООО «Русхит»',
			eng: 'LLC «Rusheat»',
		},
		companySite: 'kflex.ru',
		position: {
			rus: 'Оформитель и верстальщик сайтов',
			eng: 'Web-designer and web-developer',
		},
		description: {
			rus: [
				'Удалённо занимался с оформление и вёрсткой сайтов, писем и другими вещами связанными с рекламой в интернете.',
				'Я закончил сотрудничество потому что хотелось полноценно писать сложные приложения на Реакте. А в этой компании таких задач не было.',
			],
			eng: [
				'I remotely worked on design and layout of websites, letters and other things related to online advertisement.',
				'I finished the cooperation because I want to do complex React applications. But there was not such tasks in this company.',
			],
		},
		technologies: ['HTML', 'CSS', 'Javascript'],
		achievements: {
			rus: ['Предлагал множество идей для увеличения конверсии сайта.'],
			eng: ['I suggest a lot of ideas to increase web-site conversion.'],
		},
	},
	{
		startDate: {
			rus: 'Октябрь 2020',
			eng: 'Октябрь 2020',
		},
		endDate: {
			rus: 'Июль 2021',
			eng: 'July 2021',
		},
		duration: {
			rus: '10 месяцев',
			eng: '10 months',
		},
		companyName: {
			rus: 'Minervasoft',
			eng: 'Minervasoft',
		},
		companySite: 'minervasoft.ru',
		position: { rus: 'Программист React', eng: 'React developer' },
		description: {
			rus: [
				'Разработка информационной системы',
				'Подробности не раскрывается из-за Соглашения о неразглашении',
				'Я принял решение об уходе потому что понял, что проект мне не близок.',
			],
			eng: [
				'Developing information system',
				'I do not disclose of details because of The Non-Disclosure Agreements',
				'I made a decision to leave because I realized that this project was not close form me.',
			],
		},
		technologies: ['React', 'Redux', 'SCSS'],
		achievements: {
			rus: ['Продавил внедрение TypeScript-а для увеличения надёжности кода.'],
			eng: ['I pushed the implementation of TypeScript to increase code reliability.'],
		},
	},
	{
		startDate: {
			rus: 'Ноябрь 2021',
			eng: 'November 2021',
		},
		endDate: {
			rus: 'Апрель 2022',
			eng: 'April 2022',
		},
		duration: {
			rus: '6 месяцев',
			eng: '6 months',
		},
		companyName: {
			rus: 'Skedbar.com',
			eng: 'Skedbar.com',
		},
		companySite: 'Skedbar.com',
		position: { rus: 'Программист React', eng: 'React developer' },
		description: {
			rus: [
				'Реализация маркетинговых гипотез улучшающих взаимодействие пользователей с сервисом. Работал с React-ом и Next-ом.',
				'Компания отказалась от проверки гипотез и перешли на другие инструменты где не требуется программирование.',
			],
			eng: [
				'I implemented marketing hypothesis improved user interactions with the service. I worked with React and Next.',
				'The company abandoned those activities and moved to another tools which do not require programming.',
			],
		},
		technologies: ['React', 'Next', 'Redux'],
		achievements: {
			rus: ['Предлагал гипотезы для улучшения продукта'],
			eng: ['I suggested hypotheses to improve the product.'],
		},
	},
	{
		startDate: {
			rus: 'Сентябрь 2022',
			eng: 'September 2022',
		},
		endDate: {
			rus: 'Декабрь 2023',
			eng: 'December 2023',
		},
		duration: {
			rus: '1 год 4 месяца',
			eng: '1 year 4 months',
		},
		companyName: {
			rus: 'Образовательная платформа',
			eng: 'Learning platform',
		},
		companySite: 'credu.ai',
		position: { rus: 'Программист React', eng: 'React developer' },
		description: {
			rus: [
				'Разработка клиентской части платформы для создания школ преподающих иностранные языки. Создание курсов, уроков, упражнений, заведение учеников, вывод, фильтрация, заказы, страницы со статистикой успеваемости, сотрудники, профили пользователей, оплаты, конструктор одностраничников, регистрация, вход.',
				'В проекте написал порядка 90% всего клиентского кода.',
				'Видео с описанием функций: youtube.com/@creduplatform',
				'Руководитель решил остановить активную разработку потому что работающего функциона было достаточно для запуска.',
			],
			eng: [
				'Front-end development of the foreign languages creating schools platform: courses, lessons, exercises, establisment of pupils, output, filtering, orders of the student performance statistic page, pages of the employers, user profiles, payments, landing-page constructor, login, registration and so on.',
				'I have written 90% of the whole front-end code.',
				'There is a video shown the functionality: youtube.com/@creduplatform',
				'The principal decided to stop active development because existing functionality were enough to launch.',
			],
		},
		technologies: ['TypeScript', 'React 18', 'Zustand', 'XState', 'React Query', 'Axios'],
		achievements: {
			rus: [
				'Перевёл проект на другую систему управления состоянием чтобы уменьшить сложность и сократить время написания кода.',
				'Написал шаблонный компонент формы чтобы упростить переиспользование логики и уменьшить время написания других форм.',
				'Когда потребовалась реализовать сложную логику изучил XState.',
			],
			eng: [
				'I migrated the project to an another store system to decrease complexity and reduce development time.',
				'I wrote template form to simplify logic reuse and decrease another forms development time.',
				'I learned XState when it was necessary to implement a complex logic.',
			],
		},
	},
	{
		startDate: {
			rus: 'Декабрь 2023',
			eng: 'December 2023',
		},
		endDate: {
			rus: 'Настоящее время',
			eng: 'Present time',
		},
		duration: {
			rus: '9 месяцев',
			eng: '9 months',
		},
		companyName: {
			rus: 'It-Инкубатор',
			eng: 'It-incubator',
		},
		companySite: 'it-incubator.io/education/back-end',
		position: { rus: 'Ученик', eng: 'A student' },
		description: {
			rus: [
				'Мне интересно стать разработчиком полного цикла, поэтому с декабря 2023 прохожу обучение. Поэтому поисками работы не занимался. Мне осталось ещё 2 месяца. Это не помешает работе.',
			],
			eng: [
				"I'm interested in becoming a full time developer, so I'm in training from December 2023. So I haven't been looking for a job. I have two more months to go. It won't interfere with work.",
			],
		},
		technologies: ['TypeScript', 'Node', 'Express', 'Nest', 'Mongo', 'Postgres', 'TypeORM'],
	},
]
