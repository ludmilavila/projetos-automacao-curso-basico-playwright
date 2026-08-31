# 💻 Automação de Testes com Playwright + TypeScript

Projeto desenvolvido para estudos de **automação de testes utilizando Playwright e TypeScript**, durante o **Curso Básico de Testes Automatizados com Playwright + TypeScript**, ministrado pelo instrutor **Marcos Vinicius Franco**.

O objetivo deste projeto é aplicar, na prática, os principais conceitos apresentados durante o curso, explorando recursos do Playwright para automação de testes end-to-end, localização de elementos, ações em páginas, asserções, navegação entre abas e organização de testes.

---

## 📌 Objetivo

O projeto tem como objetivo consolidar conhecimentos sobre automação de testes web utilizando:

* [Playwright](https://playwright.dev/)
* TypeScript

Durante o desenvolvimento foram praticados conceitos fundamentais de automação, como:

* Navegação entre páginas;
* Localização de elementos;
* Preenchimento de campos;
* Cliques e interações;
* Checkbox;
* Dropdown;
* Hover;
* Asserções;
* Manipulação de novas abas;
* Testes de login;
* Testes de sucesso e negativos;
* Organização dos testes em `describe` e `test`;
* Geração de relatório HTML;
* Captura de vídeo durante a execução;
* Trace para investigação de falhas;
* Padronização do código utilizando ESLint.

---

## 🛠️ Tecnologias e ferramentas

| Tecnologia/Ferramenta | Utilização                                          |
| --------------------- | --------------------------------------------------- |
| **Playwright**        | Automação e execução dos testes end-to-end          |
| **TypeScript**        | Linguagem utilizada para desenvolvimento dos testes |
| **Node.js**           | Ambiente de execução                                |
| **ESLint**            | Análise estática e padronização do código           |                               |
| **Git**               | Controle de versão                                  |

O projeto utiliza `@playwright/test`, além de plugins e configurações do ESLint voltados para Playwright e TypeScript.

---

## 📂 Estrutura do projeto

```text
projetos-automacao-curso-basico-playwright/
├── tests/
│   ├── acoes-basicas.spec.ts
│   ├── login.spec.ts
│   ├── nova-aba.spec.ts
│   ├── primeiro-test.spec.ts
│   └── saucedemo.spec.ts
│
├── .eslintrc.json
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.ts
```

A pasta `tests` concentra os cenários automatizados do projeto. Atualmente ela possui cinco arquivos `.spec.ts`.

### Principais arquivos

#### `tests/`

Diretório onde estão armazenados os testes automatizados.

Os arquivos utilizam a extensão `.spec.ts`, seguindo o padrão utilizado pelo Playwright Test.

#### `playwright.config.ts`

Arquivo responsável pelas configurações globais do Playwright.

Entre as configurações utilizadas neste projeto estão:

* Diretório dos testes: `./tests`;
* Execução paralela dos testes;
* Relatório HTML;
* Execução em modo visível (`headless: false`);
* Gravação de vídeo;
* Uso de `data-test` como atributo para `getByTestId()`;
* Captura de trace na primeira tentativa de execução após uma falha;
* Projeto configurado para execução no Chromium.

#### `.eslintrc.json`

Arquivo utilizado para configurar regras de qualidade e padronização do código.

Entre as regras configuradas estão:

* Indentação de 4 espaços;
* Proibição de múltiplos espaços;
* Limitação de linhas vazias consecutivas;
* Verificação de `await` nas operações do Playwright;
* Prevenção do uso acidental de `test.only`;
* Prevenção do uso de `page.pause()`.

Essas regras ajudam a manter os testes mais consistentes e evitam alguns problemas comuns durante o desenvolvimento da automação.

#### `package.json`

Contém as dependências e scripts utilizados pelo projeto.

Atualmente estão disponíveis os comandos:

```bash
npm test
```

e

```bash
npm run ui
```

O primeiro executa os testes utilizando o Playwright Test Runner, enquanto o segundo inicia o Playwright em modo UI.

---

# 🚀 Instalação

## Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado:

* **Node.js**

---

## 1. Clonar o repositório

```bash
git clone https://github.com/ludmilavila/projetos-automacao-curso-basico-playwright.git
```

Acesse o diretório:

```bash
cd projetos-automacao-curso-basico-playwright
```

---

## 2. Instalar as dependências

Execute:

```bash
npm install
```

O comando instala as dependências definidas no `package.json`, incluindo o Playwright Test, TypeScript/Node types e as ferramentas de qualidade de código utilizadas no projeto.

---

## 3. Instalar os navegadores do Playwright

Caso os navegadores do Playwright ainda não estejam instalados no ambiente:

```bash
npx playwright install
```

O Playwright disponibiliza suporte para Chromium, Firefox e WebKit; neste projeto, entretanto, o `playwright.config.ts` está configurado atualmente para executar os testes somente no Chromium.

---

# ▶️ Execução dos testes

## Executar todos os testes

É possível executar todos os testes através do script definido no `package.json`:

```bash
npm test
```

Ou diretamente pelo Playwright:

```bash
npx playwright test
```

O Playwright Test Runner permite executar os testes automatizados e gerar os resultados da execução.

Como o projeto está configurado com:

```typescript
headless: false
```

o navegador é aberto visualmente durante a execução.

---

## Executar os testes utilizando a interface do Playwright

O projeto também possui o script:

```bash
npm run ui
```

Esse comando executa:

```bash
npx playwright test --ui
```

A interface do Playwright permite visualizar e executar os testes de forma interativa.

---

## Executar um arquivo específico

Para executar apenas um arquivo de testes, exemplo:

```bash
npm test -- login
```

---

# 🧪 Testes automatizados

Os testes foram organizados de acordo com os conceitos estudados durante o curso.

## `primeiro-test.spec.ts`

Primeiro contato com o Playwright.

O teste realiza uma navegação para o site oficial do Playwright, interage com o link **Get started** e realiza uma leitura de conteúdo da página.

**Conceitos praticados:**

* `page.goto()`;
* Localização de elementos;
* `getByText()`;
* `click()`;
* `textContent()`.

---

## `acoes-basicas.spec.ts`

Arquivo dedicado à prática de ações básicas de automação.

São trabalhados cenários envolvendo:

### Campos de entrada

* Preenchimento de campos;
* Limpeza de campos;
* Digitação sequencial;
* Validação do valor preenchido.

### Checkbox

* Marcar checkbox;
* Desmarcar checkbox;
* Validar se o checkbox está selecionado.

### Dropdown

* Seleção de opções por valor;
* Seleção de opções por texto/label;
* Validação da opção selecionada.

### Hover

* Movimentação do mouse sobre elementos;
* Validação da exibição de informações;
* Interação com elementos revelados após o hover.

O arquivo utiliza páginas do site **The Internet**, criado para demonstrar diferentes situações úteis para automação de testes.

---

## `login.spec.ts`

Contém testes relacionados ao fluxo de login do **Sauce Demo**.

O arquivo utiliza `test.beforeEach()` para acessar a página de login antes da execução de cada cenário.

### Cenário de sucesso

**Login com sucesso**

Valida que um usuário válido consegue:

1. Informar usuário;
2. Informar senha;
3. Clicar no botão de login;
4. Ser direcionado para a página de produtos;
5. Visualizar o conteúdo esperado.

### Cenários negativos

**Usuário bloqueado**

Valida a apresentação da mensagem de erro quando é utilizado um usuário bloqueado.

**Senha inválida**

Valida a apresentação da mensagem de erro quando o usuário informa uma senha incorreta.

Dessa forma, o arquivo contempla tanto um cenário de sucesso quanto cenários de falha do processo de autenticação.

---

## `nova-aba.spec.ts`

Arquivo utilizado para praticar o controle de múltiplas páginas/abas do navegador.

O cenário:

1. Acessa o site do Playwright;
2. Localiza o link do repositório no menu;
3. Aguarda a abertura de uma nova página;
4. Captura a nova página utilizando o contexto do navegador;
5. Aguarda o carregamento;
6. Valida a URL da nova página;
7. Retorna para a página original;
8. Navega para outra URL e valida a navegação.

Para isso, é utilizado o evento `page` do `BrowserContext`, permitindo capturar a nova página aberta pelo navegador.

---

## `saucedemo.spec.ts`

Arquivo utilizado para praticar diferentes estratégias de localização de elementos e asserções.

### Localização utilizando `data-test`

O projeto configurou:

```typescript
testIdAttribute: 'data-test'
```

Com isso, é possível utilizar:

```typescript
page.getByTestId('username')
```

para localizar elementos que possuem o atributo `data-test`.

### Asserções

Também são praticadas asserções como:

```typescript
toHaveCSS()
```

```typescript
toHaveAttribute()
```

```typescript
toBeVisible()
```

Essas asserções permitem validar diferentes propriedades e estados dos elementos da página.

---

# 🔎 Localizadores

Durante os testes são utilizadas diferentes estratégias de localização de elementos, como:

```typescript
page.locator()
```

```typescript
page.getByText()
```

```typescript
page.getByRole()
```

```typescript
page.getByTestId()
```

O Playwright oferece diferentes tipos de locators e recomenda estratégias que sejam resilientes e próximas da forma como o usuário interage com a aplicação.

Neste projeto também foi configurado o atributo:

```typescript
testIdAttribute: 'data-test'
```

permitindo utilizar `getByTestId()` com elementos identificados por `data-test`.

---

# ✅ Asserções

As asserções são utilizadas para verificar se o comportamento observado durante o teste corresponde ao resultado esperado.

Alguns exemplos utilizados no projeto:

```typescript
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
```

```typescript
await expect(page.getByText('Products')).toBeVisible();
```

```typescript
await expect(checkbox).toBeChecked();
```

```typescript
await expect(dropdown).toHaveValue('2');
```

As asserções do Playwright possuem comportamento de *web-first assertions*, realizando novas tentativas automaticamente enquanto aguardam a condição esperada.

---

# 📊 Relatórios

O projeto está configurado para utilizar o **HTML Reporter**:

```typescript
reporter: 'html'
```

Após a execução dos testes, o Playwright disponibiliza um relatório HTML com os resultados da execução.

Para visualizar o relatório:

```bash
npx playwright show-report
```

---

# 🎥 Vídeos e Trace

O projeto também está configurado para gravar vídeos durante a execução:

```typescript
video: 'on'
```

Além disso, o trace está configurado para ser coletado na primeira tentativa após uma falha:

```typescript
trace: 'on-first-retry'
```

Esses recursos são úteis principalmente para investigar falhas e entender o comportamento do teste durante sua execução.

O Playwright disponibiliza o Trace Viewer para analisar informações da execução, como ações realizadas, snapshots e outras informações úteis para diagnóstico.

---

# 🧹 ESLint

O projeto utiliza **ESLint** para auxiliar na padronização e qualidade do código.

As regras estão definidas no arquivo:

```text
.eslintrc.json
```

Entre as configurações estão regras específicas do Playwright, como:

```text
playwright/missing-playwright-await
playwright/no-focused-test
playwright/no-page-pause
```

Essas regras ajudam a evitar, por exemplo:

* Operações do Playwright sem `await`;
* Uso acidental de `test.only`;
* Uso de `page.pause()` no código final dos testes.

Também são aplicadas regras relacionadas à indentação e organização do código.

---

# 🎯 Conceitos praticados

Este projeto foi construído como um laboratório de estudos para praticar conceitos fundamentais de automação com Playwright e TypeScript, incluindo:

* [x] Configuração inicial do Playwright;
* [x] Estrutura de um projeto de automação;
* [x] Criação de testes com TypeScript;
* [x] `test` e `expect`;
* [x] `test.describe`;
* [x] `test.beforeEach`;
* [x] Navegação;
* [x] Locators;
* [x] `getByRole`;
* [x] `getByText`;
* [x] `getByTestId`;
* [x] `locator`;
* [x] Preenchimento de campos;
* [x] Cliques;
* [x] Checkbox;
* [x] Dropdown;
* [x] Hover;
* [x] Asserções;
* [x] Login com sucesso;
* [x] Login com falha;
* [x] Controle de novas abas;
* [x] Execução em Chromium;
* [x] Execução em modo UI;
* [x] Relatório HTML;
* [x] Gravação de vídeo;
* [x] Trace;
* [x] ESLint.

---

# 👩‍💻 Autora

**Ludmila Ávila**

Projeto desenvolvido como parte dos estudos realizados durante o **Curso Básico de Testes Automatizados com Playwright + TypeScript**, ministrado por **Marcos Vinicius Franco**.
