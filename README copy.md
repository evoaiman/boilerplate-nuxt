# Bateriku Web V2

<p>
 <img width="120" src="https://bateriku.com/favicon.ico" />
  <br/>
  <i>
  Bateriku provides emergency roadside assistance for car breakdowns and car battery delivery in Malaysia with nationwide coverage. Learn more here!
  </i>
  <br/>
</p>

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Typescript](https://img.shields.io/badge/-Typescript-3178c6?style=flat-square&logo=typescript&logoColor=white)
![Nuxt](https://img.shields.io/badge/-Nuxt-00c16a?style=flat-square&logo=nuxt&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Docker](https://img.shields.io/badge/-Docker-0db7ed?style=flat-square&logo=docker&logoColor=white)
![Tailwind](https://img.shields.io/badge/-Tailwinds-07B6D5?style=flat-square&logo=tailwindcss&logoColor=white)

## 🚀 Getting Started

### ☑️ System Requirements

-  Recommend using Node LTS ([latest](https://nodejs.org/en/download)).
-  **NodeJS Version**: `22` or higher.
-  **NPM Version**: `10` or higher.

```bash
# check node version
node -v
```

```bash
# check npm version
npm -v
```

## 📄 Enviroment Type

-  development (local)
-  staging (demo)
-  production (live)

#### Supported Languages

-  🇬🇧 **English**: `en` - _Default_
-  🇲🇾 **Bahasa**: `ms` -(soon)
-  🇮🇩 **Indonesia**: `id` - (soon)

## 📁 Project Structure

```sh
└── bateriku-web/
    ├── README.md
    ├── app
    │   ├── assets
    │   │   ├── lang
    │   │   └── css
    │   ├── components
    │   ├── composables
    │   ├── layouts
    │   ├── pages
    │   ├── plugins
    │   ├── utils
    │   └── app.vue
    ├── public
    │   ├── favicon.ico
    │   └── robots.txt
    ├── server
    │   └── tsconfig.json
    ├── .env.{enviroment}
    ├── package.json
    ├── Dockerfile
    ├── nuxt.config.ts
    ├── tailwind.config.ts
    └── tsconfig.json
```

## ⚙️ Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:{port}`:
default is 3000

```bash
# npm
npm run dev
```

## Staging Server

Build the application for staging:

```bash
# npm
npm run build-staging
npm run start-staging
```

## Production Server

Build the application for production:

```bash
# npm
npm run build-production
npm run start-production
```

## 🐳 Local Docker

**Using `docker`**

```sh
❯ docker build -t bateriku-web:latest --build-arg ENV_TYPE={enviroment}.
```

```sh
❯ docker run --name bateriku-web -it -p 3000:3000 bateriku-web:latest
```

## 🐳 AWS Docker

**Using `docker`**

```sh
❯ docker build --platform linux/amd64,linux/arm64 -t bateriku-web:{version} --build-arg ENV_TYPE={enviroment} .
```

```sh
❯ docker tag bateriku-web:{version} {id_aws}.dkr.ecr.ap-southeast-1.amazonaws.com/bateriku-web:{version}
```

```sh
❯ docker push {id_aws}.dkr.ecr.ap-southeast-1.amazonaws.com/bateriku-web:{version}
```

**Using `docker container`**

```sh
❯ docker pull {id_aws}.dkr.ecr.ap-southeast-1.amazonaws.com/bateriku-web:{version}
```

```sh
❯ docker run -p 3000:3000 --restart=always -d --name bateriku-web {id_aws}.dkr.ecr.ap-southeast-1.amazonaws.com/bateriku-web:{version}
```

## ✉️ Contact

##### If you have any questions or suggestions, feel free to reach out to us:

#### Email our development:

-  [Amirul M.](mailto:amirul.mustaqim@bateriku.com?subject=[GitHub]Bateriku-Web)
-  [Aiman](mailto:aiman.saharudin@bateriku.com?subject=[GitHub]Bateriku-Web)
-  [Wafi](mailto:wafi@bateriku.com?subject=[GitHub]Bateriku-Web)

#### Email our devops:

###### Ask regarding server status or deployment issues.

-  Fill here
