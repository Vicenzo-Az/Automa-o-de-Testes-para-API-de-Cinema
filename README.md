
# **Automação de Testes para API de Cinema**

Bem-vindo ao repositório do projeto de automação de testes para a API de Cinema. Este projeto foi desenvolvido como parte do Programa de Bolsas | IFSUL AWS & AI for Software Quality Engineering  e tem como objetivo demonstrar boas práticas em planejamento e execução de testes automatizados com foco na qualidade de software.

---

## **📋 Sumário**

1. [Apresentação Pessoal](#-apresentação-pessoal)  
2. [Objetivo do Projeto](#-objetivo-do-projeto)
3. [Mapa Mental](#️-mapa-mental)  
4. [DoR e DoD](#-definition-of-ready-dor-e-definition-of-done-dod)
5. [Acceptance Criteria](#-acceptance-criteria-critérios-de-aceitação)
6. [Estrutura do Projeto](#-estrutura-do-projeto)  
7. [Pré-requisitos](#️-pré-requisitos)  
8. [Como Configurar e Executar](#-como-configurar-e-executar)  
9. [Cenários e Cobertura de Testes](#-cenários-e-cobertura-de-testes)  
10. [Issues Encontradas](#-issues-encontradas)  
11. [Plano de Melhoria](#-plano-de-melhoria)  
12. [Contribuições](#-contribuições)  

---

## **👤 Apresentação Pessoal**

- **Nome:** Vicenzo Azambuja
- **Idade:** 22 anos
- **Curso:** Tecnologia em Sistemas para Internet  
- **Semestre:** Terceiro Semestre
- **Cidade:** Pelotas, RS
- **Cor dos olhos:** Castanhos
- **Cor do cabelo:** Castanho escuro  
- **Cor da pele:** Branca
- **Roupa utilizada:** Camiseta branca 

---

## **🎯 Objetivo do Projeto**

O objetivo principal deste projeto é automatizar os testes funcionais da API de Cinema, garantindo que as funcionalidades principais atendam aos requisitos do sistema e estejam livres de falhas.  

**Principais entregáveis:**  
- Código limpo e reutilizável.  
- Testes independentes e de fácil manutenção.  
- Documentação detalhada (README).  

---

## **🗺️ Mapa Mental**

Abaixo está uma visão geral das User Stories e cenários cobertos no projeto.  

![Mapa Mental](IMAGES/nestjs-cinema.png)  

---

## **🔍 Definition of Ready (DoR) e Definition of Done (DoD)**

### **DoR (Definition of Ready)**

O **DoR** define os critérios que uma User Story ou tarefa deve atender para ser considerada "pronta" para iniciar o desenvolvimento. Isso significa que todos os requisitos e informações necessárias estão disponíveis para que a equipe comece a trabalhar.

#### Para a **User Story 1** (Cadastro de Filmes):
1. A história deve ter uma descrição clara do que precisa ser feito.
2. A API para cadastro de filmes já deve estar disponível ou simulada.
3. Deve ser fornecida a estrutura do objeto de dados esperado para o filme.
4. Definir quais são os parâmetros obrigatórios para a criação de um filme.
5. Os cenários de erro (como campos obrigatórios não preenchidos) devem estar definidos.
6. Os testes de API devem estar configurados para validar os endpoints.
7. A aceitação de critérios de sucesso, como status de resposta 201 para criação de filme, deve ser clara.
8. As dependências externas (se houver) devem estar configuradas ou mockadas.
9. Critérios de segurança (autenticação/autorização) devem ser definidos, se necessário.

#### Para a **User Story 2** (Reserva de Filmes):
1. A história deve ter uma descrição clara de como a reserva será feita.
2. A API para reservas de filmes deve estar disponível ou simulada.
3. Definir os parâmetros necessários para criar uma reserva.
4. Cenários de erro devem estar claros (e.g., tentativa de reserva para uma data inválida).
5. Critérios de sucesso, como status de resposta 200 para reserva realizada, devem ser especificados.
6. A equipe de desenvolvimento deve fornecer detalhes sobre a lógica de regras de negócios (por exemplo, capacidade máxima de reservas).
7. Configuração de testes de API para as rotas de reservas.
8. Casos de uso envolvendo cancelamento ou consulta de reservas devem estar descritos, caso aplicáveis.

### **DoD (Definition of Done)**

O **DoD** define os critérios que precisam ser atendidos para que uma User Story ou tarefa seja considerada "feita". Ela garante que o trabalho foi completado com qualidade e sem pendências.

#### Para a **User Story 1** (Cadastro de Filmes):
1. A funcionalidade de cadastro de filmes deve estar implementada.
2. Todos os endpoints envolvidos no processo de cadastro de filme foram testados.
3. O retorno da API deve ser validado, incluindo status codes e o conteúdo da resposta.
4. A documentação da API e da funcionalidade deve estar atualizada.
5. Todos os cenários de teste definidos no planejamento de testes devem ser executados e validados.
6. O código deve estar revisado e atender aos critérios de qualidade e boas práticas (incluindo testes automatizados).
7. A segurança, como autenticação, deve estar implementada se for necessária.
8. A funcionalidade deve ser validada em diferentes ambientes (e.g., dev, staging).
9. O código deve ser mesclado na branch principal com as devidas revisões de código (pull request aprovado).
10. Os bugs identificados durante a execução dos testes devem estar documentados como "issues" e resolvidos.

#### Para a **User Story 2** (Reserva de Filmes):
1. A funcionalidade de reservas deve estar completamente implementada.
2. Todos os endpoints envolvidos no processo de reserva foram testados.
3. O retorno da API de reserva deve ser validado com testes automatizados.
4. O sistema de reservas deve respeitar as regras de negócio (ex: capacidade limitada).
5. O código deve estar revisado e atender aos critérios de qualidade, incluindo cobertura de testes.
6. A funcionalidade deve ser validada no ambiente de testes, garantindo que as interações entre filmes e reservas funcionem corretamente.
7. Todos os casos de erro e exceção devem ser tratados adequadamente.
8. A documentação da API de reserva e a integração com o sistema de filmes deve estar atualizada.
9. Os cenários de cancelamento de reservas e consulta também devem ser testados e funcionando corretamente.
10. O código deve ser mesclado na branch principal após a aprovação no pull request.

---

## **✅ Acceptance Criteria (Critérios de Aceitação)**

### **User Story 1: Cadastro de Filmes**
1. **Dado** que estou autenticado na API, **quando** eu enviar uma requisição POST para criar um filme, **então** a resposta deve retornar um status 201 (Created).
2. **Dado** que estou enviando um filme com todos os dados obrigatórios válidos, **então** o filme será criado com sucesso.
3. **Dado** que estou tentando criar um filme com um título já existente, **então** a resposta deve retornar um erro (409 Conflict).
4. **Dado** que estou enviando dados de um filme com campos obrigatórios faltando, **então** a resposta deve retornar um erro 400 (Bad Request).
5. **Dado** que criei um filme, **quando** eu buscar os detalhes desse filme usando seu ID, **então** a resposta deve conter os dados do filme.

### **User Story 2: Reserva de Filmes**
1. **Dado** que estou autenticado e o filme está disponível, **quando** eu enviar uma requisição POST para criar uma reserva, **então** a resposta deve retornar um status 200 (OK) com os dados da reserva.
2. **Dado** que estou tentando reservar um filme com capacidade máxima já atingida, **então** a resposta deve retornar um erro 400 (Bad Request).
3. **Dado** que estou enviando uma requisição de reserva com dados faltando ou inválidos (ex: data de exibição inválida), **então** a resposta deve retornar um erro 400 (Bad Request).
4. **Dado** que uma reserva foi criada, **quando** eu consultar a reserva, **então** a resposta deve retornar os detalhes corretos da reserva.
5. **Dado** que uma reserva foi criada, **quando** eu tentar cancelá-la, **então** a resposta deve retornar um status 200 (OK) e remover a reserva.

---

## **📁 Estrutura do Projeto**

O projeto segue uma estrutura organizada para garantir escalabilidade e facilidade de manutenção:  

```
📂 nestjs-cinema
├── 📂 tests
│   ├── 📄 criarFilme.spec.js
│   ├── 📄 atualizarFilme.spec.js
│   ├── 📄 deletarFilme.spec.js
│   ├── 📄 resevarIngresso.spec.js
│   └── 📄 detalhesFilmeId.spec.js
├── 📂 userStories
│   ├── 📄 Gerenciamento de Filmes na API.md
│   └── 📄 Reservando Ingressos na API.md
├── 📄 playwright.config.js
└── 📄 README.md
```

---

## **🛠️ Pré-requisitos**

Antes de executar o projeto, certifique-se de ter instalado:  

1. [Node.js](https://nodejs.org/) (versão 16 ou superior)  
2. [Playwright](https://playwright.dev/)  
3. Um gerenciador de pacotes: npm ou yarn  
4. Clonar este repositório:  

   ```bash
   git clone https://github.com/Vicenzo-Az/Automacao-de-Testes-para-API-de-Cinema.git
   cd cinema-api-tests
   ```

---

## **🚀 Como Configurar e Executar**

1. **Instale as dependências:**  
   ```bash
   npm install
   ```

2. **Configure o ambiente:**  
   Edite o arquivo `playwright.config.js` para apontar para a URL da API.  

3. **Execute os testes:**  
   Para rodar todos os testes:  
   ```bash
   npx playwright test
   ```

   Para rodar um teste específico:  
   ```bash
   npx playwright test tests/criarFilme.spec.js
   ```

---

## **🧪 Cenários e Cobertura de Testes**

### Cenários Implementados  

| Cenário                          | Objetivo                              | Status  |
|----------------------------------|---------------------------------------|---------|
| Criação de Filme                 | Testar criação com payload válido     | ✅      |
| Atualização de Filme             | Verificar endpoint de atualização     | ⚠️ Bug |
| Detalhes de Filme por ID         | Obter informações por ID existente    | ⚠️ Bug |
| Reserva de Ingressos             | Validar fluxo de reserva completo     | ✅      |
| Deleção de Filme                 | Remover filme com ID válido           | ✅      |

### Cobertura  
- **Endpoints cobertos:** 80%  
- **Verbos HTTP testados:** GET, POST, PUT, DELETE  

---

## **🐞 Issues Encontradas**

Durante a execução, as seguintes issues foram registradas:  

| ID   | Título                                     | Prioridade | Status    |
|------|-------------------------------------------|------------|-----------|
| 001  | Erro 404 ao atualizar filme               | Alta       | Aberta    |
| 002  | Propriedade `id` ausente ao reservar       | Média      | Aberta    |
| 003  | Erro 400 ao criar filme com payload válido | Alta       | Aberta    |

As issues estão documentadas na aba **Issues** deste repositório para fácil acompanhamento.  

---

## **🔧 Plano de Melhoria**

### Prompt para Planejamento de Testes  

**Prompt:**  
_"Como posso otimizar meus testes de API para garantir maior cobertura funcional e identificar potenciais problemas de integração entre os endpoints? Considere o uso do Playwright e proponha estratégias para validar fluxos interdependentes."_  

---

## **🤝 Contribuições**

Contribuições são bem-vindas! Abra uma issue ou envie um pull request para discussões e melhorias.

--- 


