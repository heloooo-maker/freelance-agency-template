pipeline {
    agent any

    environment {
        DOCKERHUB_CRED = credentials('dockerhub-cred')
        IMAGE_NAME = "thanhlamcode/freelance-agency-template"
        IMAGE_TAG  = "${env.BUILD_NUMBER}"
        APP_VM_IP  = "192.168.220.129"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} -t ${IMAGE_NAME}:latest ."
            }
        }

        stage('Push') {
            steps {
                sh "echo \$DOCKERHUB_CRED_PSW | docker login -u \$DOCKERHUB_CRED_USR --password-stdin"
                sh "docker push ${IMAGE_NAME}:${IMAGE_TAG}"
                sh "docker push ${IMAGE_NAME}:latest"
            }
        }

        stage('Deploy') {
            steps {
                sshagent(['app-vm-ssh-cred']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no vagrant@${APP_VM_IP} '
                            docker pull ${IMAGE_NAME}:${IMAGE_TAG} &&
                            docker rm -f freelance-agency-app || true &&
                            docker run -d --name freelance-agency-app -p 80:80 ${IMAGE_NAME}:${IMAGE_TAG}
                        '
                    """
                }
            }
        }
    }

    post {
        always {
            sh "docker logout"
        }
    }
}
