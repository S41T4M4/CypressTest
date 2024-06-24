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
                bat "npx cypress run"
            }
        }
    }

    post {
        always {
            echo "Enviando relatório por email"
            emailext (
                to: 'vitor.reis@conciliadora.com.br',
                subject: "Relatório de Testes Automatizados - ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """<p>Olá,</p>
                         <p>O relatório de testes automatizados está anexado.</p>
                         <p>Att,<br>Equipe de Qas</p>""",
                attachLog: true,
                attachmentsPattern: 'cypress/reports/*.json',
                mimeType: 'text/html'
            )
        }

        failure {
            echo "Build falhou"
        }

        success {
            echo "Build foi bem-sucedido"
        }
    }
}
