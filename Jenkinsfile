pipeline {
    agent any
    tools {
        nodejs "nodejs22"
    }

    parameters {
        string(name: "SPEC", defaultValue: "cypress/e2e/teste_login", description: "E.g.: cypress/e2e/teste_login/*.cy.js")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Choose a browser to run the tests")
    }

    stages {
        stage('Testing') {
            steps {
                echo "Running tests"
                sh : 'NPM install', script: 'npm install'
                sh : 'NPM start', script: 'npm start'
                sh: 'Cypress Run', script: 'npx cypress run'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying the application"
                
            }
        }
    }
}
