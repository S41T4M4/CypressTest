pipeline {
    agent any

    parameters {
        string(name: "SPEC", defaultValue: "./cypress/e2e/**/*.cy.js", description: "Path to the test spec file")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Choose a browser to run the tests")
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    
                    sh 'npm install'
                }
            }
        }
        
        stage('Run Tests') {
            steps {
                script {
                    
                    sh "npx cypress run --browser ${params.BROWSER} --spec ${params.SPEC}"
                }
            }
        }
    }

    post {
        always {
            
        }
    }
}
