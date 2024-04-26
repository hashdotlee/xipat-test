/* Requires the Docker Pipeline plugin */
pipeline {
    agent { docker { image 'node:20.11.1-alpine3.19' } }
    stages {
        stage('build') {
            steps {
				sh 'corepack enable'
				sh 'pnpm install'
				sh 'pnpm run build'
            }
        }
		stage('deploy') {
			steps {
				sh 'pm2 serve public 5678 --spa --name "xipat"'
			}
		}
    }
}


