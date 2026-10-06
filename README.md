# 🎭 Playwright Automation Framework - The Internet Herokuapp

Projeto de automação de testes End-to-End (E2E) desenvolvido para validar diversos cenários e desafios de UI/API presentes na aplicação [the-internet.herokuapp.com](https://the-internet.herokuapp.com/).

O objetivo principal deste projeto é demonstrar a implementação de uma arquitetura de testes automatizados escalável, mantenível e resiliente, utilizando **Playwright** com **TypeScript** e o padrão de projeto **Page Object Model (POM)**.

---

## 🛠️ Tecnologias e Ferramentas

* **Linguagem:** TypeScript
* **Framework E2E:** [Playwright](https://playwright.dev/)
* **Padrão de Arquitetura:** Page Object Model (POM)
* **Relatórios:** Playwright HTML Reporter / Allure Report
* **CI/CD:** GitHub Actions

---

## 📁 Estrutura do Projeto

```text
autotest-herokuapp/
├── .github/
│   └── workflows/
│       └── regression-tests.yml   # Pipeline de integração contínua
├── src/
│   ├── pages/                     # Mapeamentos e ações da UI (POM)
│   │   ├── BasePage.ts
│   │   ├── LoginPage.ts
│   │   └── DynamicLoadingPage.ts
│   └── utils/                     # Helpers e utilitários
├── tests/
│   ├── e2e/                       # Cenários de teste de UI
│   │   ├── auth.spec.ts
│   │   └── dynamic-controls.spec.ts
│   └── api/                       # Cenários de validação de rede/API
├── playwright.config.ts           # Configuração global do Playwright
├── package.json
└── README.md
