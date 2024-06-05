pipeline {
    agent any

    parameters {
        choice(name: "SPEC", choices: ["./cypress/e2e/**/testar_telas_intranet_hom.cy.js", "./cypress/e2e/**/testar_telas_app.cy.js"], description: "Path to the test spec file !")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Choose a browser to run the tests")
        choice(name: "CONFIG", choices: ['cypress.config.js'], description: "Choose a Cypress config file")
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
                bat "npx cypress run --browser=${params.BROWSER} --spec=${params.SPEC} --config-file ${params.CONFIG}"
            }
        }

        stage('Deploying') {
            steps {
                echo "Deploy the application"
            }
        }
    }
}
