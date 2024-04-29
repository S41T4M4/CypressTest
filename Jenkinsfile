pipeline {
    agent any
     tools {nodejs: "nodejs22"}

    parameters {
        string(name: "SPEC", defaultValue: "cypress/e2e/teste_login", description: "E.g.: cypress/e2e/teste_login/*.spec.js")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Choose a browser to run the tests")
    }

    stages {
        stage('Build') {
            steps {
                echo "Building application"
            
            }
        }

        stage('Testing') {
            steps {
                echo "Running tests"
                sh label: 'NPM install', script: 'npm install'
                sh label: 'NPM start', script: 'npm start'
                sh label: 'Cypress Run', script: 'npx cypress run'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying the application"
                
            }
        }
    }
}
