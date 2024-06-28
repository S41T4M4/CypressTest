pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Building') {
            steps {
                echo "Building the application"
                bat "npm i"
            }
        }

        stage('Testing') {
            steps {
                echo "Executando testes com parametros"
                bat "npx cypress run --reporter mochawesome"
            }
        }

        stage('Deploying') {
            steps {
                echo "Deploy the application"
            }
        }
    }

    post {
        always {
            echo "Sending email notification with report"

            script {
 
                def reportContent = readFile('cypress/reports/index.html').trim()


                emailext (
                    subject: "Cypress Tests Status: ${currentBuild.result}",
                    body: "The Cypress tests have finished with result: ${currentBuild.result}\n\n${reportContent}",
                    mimeType: 'text/html',
                    attachLog: true
                )
            }
        }
    }
}
