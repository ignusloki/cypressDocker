# cypressDocker
Exemplo de Cypress com Docker

- Instale o Docker
- Baixe a imagem do Docker com cypress incluido: https://github.com/cypress-io/cypress-docker-images
- Se estiver no windows, set essa variavel MSYS_NO_PATHCONV=1
- Rode esse comando: docker run -it -v $PWD:/CypressDocker -w /CypressDocker cypress/included:10.11.0 --spec "/CypressDocker/cypress/e2e/integration/spec.cy.js"
