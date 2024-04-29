pipeline {
    agent any

    parameters {
        string(name: "SPEC", defaultValue: "cypress/e2e/teste_login", description: "Ej: cypress/e2e/teste_login/*.cy.js")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Choose a browser to run the tests")
    }

    stages {
        stage('Build') {
            steps {
                echo "Buiding application"
            }
        }

        stage('Testing') {
            steps {
                script {
                    
                    bat "npx cypress run --browser ${params.BROWSER} --spec ${params.SPEC}"
                }
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying the application"
            }
        }
    }
}
