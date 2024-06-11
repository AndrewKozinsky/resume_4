import { ConfigSchemaV37Json } from './types/ConfigSchemaV37Json'

/**
 * Возращает объект конфигурации docker-compose для разработки, проверки развёртывания на сервере и для сервера
 * @param env — тип конфигурации
 */
export function createDockerConfig(env: 'dev' | 'serverCheck' | 'server'): ConfigSchemaV37Json {
	const domain = 'andrewkozinsky.ru'

	// Общие переменные окружения для всех сервисов
	const commonEnvVars = {}

	return {
		version: '3.8',

		services: {
			nginx: {
				image: 'nginx:1.19.7-alpine',
				container_name: 'resume-nginx',
				depends_on: ['face_r'],
				ports: env === 'server' ? undefined : ['80:80'],
				volumes: ['./nginx/nginx.conf.dev:/etc/nginx/nginx.conf'],
				environment:
					env === 'server'
						? {
								VIRTUAL_HOST: `${domain},www.${domain}`,
								LETSENCRYPT_HOST: `${domain},www.${domain}`,
							}
						: undefined,
			},
			face_r: {
				build: {
					context: 'face_r/',
					dockerfile: env === 'dev' ? 'Dockerfile.dev' : 'Dockerfile.server',
				},
				restart: 'unless-stopped',
				volumes: env === 'dev' ? ['./face_r/src:/app/src'] : undefined,
				command: env === 'dev' ? 'npm run dev' : 'npm run start',
				container_name: 'resume-face',
				environment: commonEnvVars,
			},
		},
		networks: env === 'server' ? getServerNetworks() : undefined,
	}
}

function getServerNetworks() {
	return {
		default: {
			external: {
				name: 'nginx-proxy',
			},
		},
	}
}
