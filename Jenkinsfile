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
                bat "npx cypress run "
            }
        }

    stage('Deploying') {
            steps {
                echo "Deploy the application"
            }
        }
    }
}
