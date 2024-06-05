pipeline {
    agent any

    parameters {
        choice(name: "SPEC", choices: ["./cypress/e2e/**/testar_telas_intranet_hom.cy.js", "./cypress/e2e/**/testar_telas_app.cy.js"], description: "Path to the test spec file")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Choose a browser to run the tests")
    } 

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
                echo "Running tests with params"
                bat "npx cypress run --record --key 0da756ca-2cef-44ee-b4b9-f03125713718 --browser=${params.BROWSER} --spec=${params.SPEC}"
            }
        }

        stage('Deploying') {
            steps {
                echo "Deploy the application"
            }
        }
    } 
}
