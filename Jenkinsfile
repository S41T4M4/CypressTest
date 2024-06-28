pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
      
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
         
                sh 'npx cypress run'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'cypress/reports/*.json', allowEmptyArchive: true
            junit 'cypress/reports/*.xml'
        }
    }
}
