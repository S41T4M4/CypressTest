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
                
                sh 'npm install'
            }
        }
        
        stage('Run tests') {
            steps {           
                
                sh './node_modules/.bin/cypress run --headless'
            }
        }
    }
    
    post {
        always {
            
            sh 'npm uninstall cypress'
        }
    }
}
