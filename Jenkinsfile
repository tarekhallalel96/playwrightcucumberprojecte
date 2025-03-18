pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.50a.0'  // Utilise une image Docker officielle Playwright
            label 'docker-agent'  // Si tu veux spécifier un label pour l'agent Docker
            args '-u root'  // Si tu veux exécuter en tant que root (selon le contexte)
        }
    }
    
    environment {
        // Tu peux définir des variables d'environnement ici si nécessaire
        PLAYWRIGHT_VERSION = '1.50.0'
    }

    stages {
        stage('Checkout') {
            steps {
                // Récupérer le code source depuis le référentiel Git
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Installer les dépendances Node.js, Playwright et Cucumber
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Exécuter les tests avec npm run only @positive
                    sh 'npm run only @positive'
                }
            }
        }

        stage('Cleanup') {
            steps {
                // Optionnel: Si tu veux supprimer des fichiers temporaires ou effectuer des étapes de nettoyage
                echo 'Cleaning up'
            }
        }
    }

    post {
        always {
            // Actions qui seront exécutées après chaque pipeline (même en cas d'échec)
            echo 'Pipeline terminé'
        }

        success {
            // Actions en cas de succès
            echo 'Tests terminés avec succès !'
        }

        failure {
            // Actions en cas d'échec
            echo 'Les tests ont échoué.'
        }
    }
}
