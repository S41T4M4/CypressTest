pipeline {
    agent any

    parameters {
        choice(name: "SPEC", choices: ["./cypress/e2e/**/testar_telas_intranet_hom.cy.js", "./cypress/e2e/**/testar_telas_app.cy.js"], description: "Caminho para o teste que será executado")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Escolha o browser em que será executado")
        choice(name: "CONFIG", choices: ['cypress.config.js','cypress.config.hom.js'], description: "Escolha uma arquivo de config que deseja utilizar")
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
                echo "Executando testes com parametros"
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
