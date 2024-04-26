/* Requires the Docker Pipeline plugin */
pipeline {
    agent { docker { image 'node:20.11.1-alpine3.19' } }
	environment {
                HOME = "${env.WORKSPACE}"
    }
    stages {
        stage('build') {
            steps {
				sh 'npm config set unsafe-perm true'
				sh 'npm install -g pm2'
				sh 'npm install'
				sh 'npm run build'
            }
        }
		stage('deploy') {
			steps {
				sh 'pm2 serve public 5678 --spa --name "xipat"'
			}
		}
    }
}


