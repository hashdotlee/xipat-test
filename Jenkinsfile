/* Requires the Docker Pipeline plugin */
pipeline {
    agent none 
    stages {
        stage('build') {
            steps {
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


