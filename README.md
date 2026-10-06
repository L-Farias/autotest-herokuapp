# 🎭 Playwright Automation Framework - The Internet Herokuapp

Projeto de automação de testes End-to-End (E2E) desenvolvido para validar diversos cenários e desafios de UI/API presentes na aplicação [the-internet.herokuapp.com](https://the-internet.herokuapp.com/).

O objetivo principal deste projeto é demonstrar uma arquitetura de testes automatizados escalável e resiliente, utilizando **Playwright**, **JavaScript** e o padrão **Page Object Model (POM)**.

---

## 🛠️ Tecnologias e Ferramentas

* **Linguagem:** JavaScript (CommonJS)
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
│       └── regression-tests.yml
├── src/
│   ├── data/
│   │   └── testData.json
│   ├── fixtures/
│   │   └── baseTest.js
│   ├── pages/
│   │   ├── BasePage.js
│   │   ├── DynamicLoadingPage.js
│   │   ├── LoginPage.js
│   │   └── SecureAreaPage.js
│   └── utils/
│       └── helpers.js
├── tests/
│   ├── api/
│   │   └── broken-images.spec.js
│   └── e2e/
│       ├── auth.spec.js
│       ├── dynamic-content.spec.js
│       ├── file-management.spec.js
│       └── homepage.spec.js
├── playwright.config.js
├── package.json
└── README.md
```


## ▶️ Executar os Testes

```bash
npm install
npx playwright install chromium
npm test
```

Para executar somente testes E2E ou API:

```bash
npm run test:e2e
npm run test:api
```
