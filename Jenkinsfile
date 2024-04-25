pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                dir('C:\\Users\\vitor.reis\\CypressProject') {
                    // Aqui você pode adicionar passos adicionais de checkout, se necessário
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
                    bat 'C:\\Users\\vitor.reis\\AppData\\Local\\Cypress\\Cache\\13.8.1\\Cypress\\cypress run --headless'
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
