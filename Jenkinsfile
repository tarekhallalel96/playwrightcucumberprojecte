pipeline {
    agent any
    // parameters {
    //     string(name: 'String_TAG', defaultValue: '', description: 'Tag de test')
    //     choice(name: 'CHOICE_TAG', choices: ['@valid', '@invalid', '@Integration','@Post'], description: 'Sélectionne un tag de test')
    // }
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
                    // def tagToUse = params.String_TAG ?: params.CHOICE_TAG
                    // sh "npx cucumber-js --format json:reports/cucumber-report.json --tags '${params.CHOICE_TAG}'"
                    // sh "npm run only '${params.CHOICE_TAG}'"
                    sh 'npx -v'
                    sh 'npx cucumber-js'
                    stash name: 'allure-results', includes: 'allure-results/*'

                }
            }

        }
    }
    post {
        always {
            unstash 'allure-results'
            script {
                allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'allure-results']]
                ])
            }
        }
    }

// post {
//     always {
//         cucumber buildStatus: 'UNSTABLE',
//                 failedFeaturesNumber: 1,
//                 failedScenariosNumber: 1,
//                 skippedStepsNumber: 1,
//                 failedStepsNumber: 1,
//                 classifications: [
//                         [key: 'Commit', value: '<a href="${GERRIT_CHANGE_URL}">${GERRIT_PATCHSET_REVISION}</a>'],
//                         [key: 'Submitter', value: '${GERRIT_PATCHSET_UPLOADER_NAME}']
//                 ],
//                 reportTitle: 'My report',
//                 fileIncludePattern: 'reports/cucumber-report.json',
//                 sortingMethod: 'ALPHABETICAL',
//                 trendsLimit: 100
//     }
// }
}

// pipeline { 
//     agent any

//     parameters {
//         string(name: 'String_TAG', defaultValue: '', description: 'Tag de test personnalisé (laisser vide si non utilisé)')
//         choice(name: 'CHOICE_TAG', choices: ['@valid', '@invalid', '@Integration', '@Post'], description: 'Sélectionne un tag de test')
//     }

//     stages {
//         stage('Install Dependencies') {
//             agent any
//             steps {
//                 script {
//                     sh 'npm ci'
//                     stash name: 'node_modules', includes: 'node_modules/**'
//                 }
//             }
//         }

//         stage('Run Tests') {
//             agent {
//                 docker {
//                     image 'mcr.microsoft.com/playwright:v1.51.0-noble'
//                     args '-u root:root'
//                 }
//             }
//             steps {
//                 script {
//                  unstash 'node_modules'
//                  sh 'npx cucumber-js --format json:reports/cucumber-report.json'
//                  stash name: 'allure-results', includes: 'allure-results/*'
//                 }
//             }
//         }
//     }

//     post {
//         always {
//             unstash 'allure-results'
//             script {
//                 allure([
//                     includeProperties: false,
//                     jdk: '',
//                     properties: [],
//                     reportBuildPolicy: 'ALWAYS',
//                     results: [[path: 'allure-results']]
//                 ])
//             }
//         }
//     }
// }