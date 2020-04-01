podTemplate(label: 'google-spreadsheet-addon', containers: [
  containerTemplate(name: 'docker', image: 'docker', ttyEnabled: true, command: 'cat', envVars: [
    envVar(key: 'DOCKER_HOST', value: 'tcp://docker-host-docker-host:2375')
  ])
]) {
  node('google-spreadsheet-addon') {
    stage('Run Tests') {
      container('docker') {
        def scmVars = checkout scm

        sh "docker build -t google-spreadsheet-addon-test:${scmVars.GIT_COMMIT} -f Dockerfile-test ."
        sh "docker run --rm -t google-spreadsheet-addon-test:${scmVars.GIT_COMMIT} npm run test:unit"
      }
    }
  }
}
