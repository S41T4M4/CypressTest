pipeline {
    agent any
     tools {nodejs "Node22"}

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
                    bat 'npx cypress run'
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
