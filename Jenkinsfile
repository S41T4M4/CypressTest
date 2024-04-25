pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/S41T4M4/CypressTest.git'
            }
        }
        
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run tests') {
            steps {
                script {
                    
                    bat './node_modules/.bin/cypress run --headless'
                }
            }
        }
    }
    
    post {
        always {
            sh 'npm uninstall cypress'
        }
    }
}
