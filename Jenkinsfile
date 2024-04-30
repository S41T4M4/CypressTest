pipeline {
    agent any

    parameters {
        string(name: "SPEC", defaultValue: "cypress/e2e/teste_login", description: "E.g.: cypress/e2e/teste_login/*.cy.js")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Choose a browser to run the tests")
    }

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Clone the repo') {
            steps {
                git branch: 'main', url: 'https://github.com/S41T4M4/CypressTest.git'
            }
        }

        stage('Building') {
            steps {
                echo "Building the application"
                bat "npm i"
            }
        }

        stage('Testing') {
            steps {
                echo "Running tests"
                bat "npx cypress run --browser=${params.BROWSER} --spec ${params.SPEC}"
            }
        }

        stage('Deploying') {
            steps {
                echo "Deploy the application"
            }
        }
    }

}
