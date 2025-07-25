# WebdriverIO Mobile Automation

Este projeto automatiza testes mobile utilizando [WebdriverIO](https://webdriver.io/) e Appium, com suporte para execução local e BrowserStack.

## Estrutura do Projeto

```
.
├── app/                  # APKs para testes locais
├── chromedriver-mobile/  # Chromedriver para automação webview
├── config/               # Configurações do WebdriverIO
├── logs/                 # Logs de execução
├── test/
│   ├── config/           # Configuração de apps (pacotes)
│   ├── pageobjects/      # Page Objects dos testes
│   ├── specs/            # Especificações dos testes (test cases)
│   └── utils/            # Utilitários para os testes
├── .env                  # Variáveis de ambiente (ex: BrowserStack)
├── package.json          # Dependências e scripts
└── ...
```

## Pré-requisitos

- Node.js 18+
- [Appium](https://appium.io/) instalado e rodando na porta 4723 para execuções locais
- Emulador Android configurado (ex: `Pixel_4`)
- APKs dos apps sob teste em `/app`
- Conta no [BrowserStack](https://www.browserstack.com/)

## Instalação

```sh
npm install
```

## Configuração

Crie um arquivo `.env` com suas credenciais do BrowserStack:

```
BROWSERSTACK_USERNAME=seu_usuario
BROWSERSTACK_ACCESS_KEY=sua_chave
```

## Como Executar

### Testes Locais (Appium + Emulador)

1. Inicie o emulador Android:
   ```sh
   npm run start:emulator
   ```
2. Execute os testes (exemplo para o ApiDemos):
   ```sh
   npm run test:apidemos
   ```

### Testes no BrowserStack

```sh
npx wdio run ./config/wdio.bs.conf.js --spec test/specs/test.js
```

## Scripts Úteis

- `npm run start:emulator` — Inicia o emulador Android configurado
- `npm run test:apidemos` — Executa testes locais no app ApiDemos
- `npm run test:saucelabs` — Executa testes no SauceLabs

## Estrutura dos Testes

- Page Objects: [`test/pageobjects/`](test/pageobjects/)
- Especificações: [`test/specs/`](test/specs/)
- Utilitários: [`test/utils/`](test/utils/)
- Configuração de apps: [`test/config/apps.config.js`](test/config/apps.config.js)

## Integração Contínua

O projeto possui workflow de CI configurado em [`.github/workflows/ci.yml`](.github/workflows/ci.yml) para rodar testes automaticamente no GitHub Actions e também no Browserstack.

## Licença

ISC

---

> Dúvidas ou sugestões? Abra uma issue ou envie
