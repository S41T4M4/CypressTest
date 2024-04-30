pipeline {

    agent any

    parameters {
        string(name: "SPEC", defaultValue: "cypress/e2e/teste_login", description: "E.g.: cypress/e2e/teste_login/*.cy.js")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Choose a browser to run the tests")
    }

    stages {

        stage('Clone the repo') {
            steps {
                git branch: 'main', url: 'https://github.com/S41T4M4/CypressTest.git'
            }
        }

        stage('Run the Cypress scenario tests') {
            steps {
                script {
                    sh """
                    cd cypress &&
                    npm install &&
                    npx cypress run --browser ${params.BROWSER} --spec ${params.SPEC}
                    """
                }
            }
        }

    }

    post {
        always {
            
        }
    }
}
