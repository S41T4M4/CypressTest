pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                dir('C:\\Users\\vitor.reis\\CypressProject') {
                    
                }
            }
        }
        
        stage('Install dependencies') {
            steps {
                dir('C:\\Users\\vitor.reis\\CypressProject') {
                    bat 'npm install'
                }
            }
        }
        
        stage('Run tests') {
            steps {           
                dir('C:\\Users\\vitor.reis\\CypressProject') {
                    bat './node_modules/.bin/cypress run --headless'
                }
            }
        }
    }
    
    post {
        always {
            dir('C:\\Users\\vitor.reis\\CypressProject') {
               
                bat 'npm uninstall cypress'
            }
        }
    }
}
