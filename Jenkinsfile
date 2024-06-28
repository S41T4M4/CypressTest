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
                echo "Executando testes"
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
            echo "Sending Office 365 notification with report"

            script {
                try {
                    def reportContent = readFile('cypress/reports/index.html').trim()

                    office365ConnectorWebhooks([
                        url: 'https://conciliadora.webhook.office.com/webhookb2/31785f77-140f-4090-ad4f-69e1a9c761cd@34ff4d1d-5bb7-4e07-a9e4-76454a68c905/JenkinsCI/708dbb642ab44c8e989299e43ae6714e/8501cc7b-1e6e-442c-bb52-e7bf761e1304',
                        startNotification: true,
                        notifySuccess: true,
                        notifyAborted: false,
                        notifyNotBuilt: true,
                        notifyUnstable: true,
                        notifyFailure: true,
                        notifyBackToNormal: true,
                        notifyRepeatedFailure: true,
                        timeout: 30000
                    ])

                    office365ConnectorSend message: "${currentBuild.result}\n\n${reportContent}", status: "${currentBuild.result}"
                } catch (Exception e) {
                    echo "Failed to send Office 365 notification: ${e.message}"
                    currentBuild.result = 'FAILURE' 
                }
            }
        }
    }
}
