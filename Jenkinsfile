pipeline {
    agent any

    tools {

        nodejs "nodejs22"
    }

    stages {
        stage('Checkout') {
            steps {
        
                git 'https://github.com/S41T4M4/CypressTest.git'
            }
        }

        stage('Install dependencies') {
            steps {
 
                bat 'npm install'
            }
        }

        stage('Run tests') {
            steps {
       
                bat 'npx cypress run'
            }
        }
    }

    post {
        always {
        
            bat 'npm uninstall cypress'
        }
    }
}
