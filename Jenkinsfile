pipeline {
    agent any
    
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run tests') {
            steps {
                sh './node_modules/.bin/cypress run --headless'
            }
        }
    }
}
