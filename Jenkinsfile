pipeline {
    agent any

    stages {
        stage('build and install') {
            agent {
                docker {
                    image 'mcr.microsoft.com/playwright:v1.51.0-noble'
                    args '-u root:root'
                }
            }

            steps {
                script {
                    sh 'npm ci'
                    sh 'npm install @cucumber/allure-formatter --save-dev'
                    sh 'npx cucumber-js --format json:reports/cucumber-report.json --format @cucumber/allure-formatter'
                    sh 'ls -la allure-results' // Debugging step
                    if (fileExists('allure-results')) {
                        stash name: 'allure-results', includes: 'allure-results/*'
                    } else {
                        echo 'No allure-results directory found to stash.'
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                if (fileExists('allure-results')) {
                    unstash 'allure-results'
                    allure([
                        includeProperties: false,
                        jdk: '',
                        properties: [],
                        reportBuildPolicy: 'ALWAYS',
                        results: [[path: 'allure-results']]
                    ])
                } else {
                    echo 'No allure-results directory found to unstash.'
                }
            }
        }
    }
}