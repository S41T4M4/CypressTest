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
        stage('Building') {
            steps {
                echo "Building the application"
                
            }
        }

        stage('Testing') {
            steps {
                bat "npm i" 
                bat "npx cypress run --browser=$BROWSER --spec $SPEC" 
            }
        }

        stage('Deploying') {
            steps {
                echo "Deploy the application"
                
            }
        }
    }
}
