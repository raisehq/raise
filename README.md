# Raise Web monorepo

|                                                                                       | Purpose                        | Version |     |     |
| ------------------------------------------------------------------------------------- | ------------------------------ | ------- | --- | --- |
| [Client](https://bitbucket.org/herodevteam/raise/src/master/packages/client/)         | Our main app                   | 0.0.1   |     |     |
| [Onboarding](https://bitbucket.org/herodevteam/raise/src/master/packages/onboarding/) | SignUp / SignIn flow component | 0.0.1   |     |     |
| [Components](https://bitbucket.org/herodevteam/raise/src/master/packages/components/) | Storybook UI repository        | 0.0.1   |     |     |

## Preinstall

You will need:

1. Typescript
2. Yarn
3. Lerna

All installed in **global**

## Install

The project uses Lerna to handle the cross-dependency and the code shared around all projects (you can find them at packages folder). It's **very important to NOT run npm i within them**, Lerna will handle this at the root of the project. So, first step:

```bash
npx lerna bootstrap
```

This will download, build all the packages and create the symlinks across all projects, you don't need to care about anything else.

## Usage

The commands below should be run at the root of the monorepo.

### Run @raise/client

Start `@raise/client` in development pointing to integration
```bash
yarn run dev:int
```

Start `@raise/client` in development pointing to localhost
```bash
yarn run dev
```
### Watch all packages and run @raise/client
(Experimental: The first screen will be blank, refresh and all should work)

In case you need to work in a dependency and need to check the client at the same time, you can watch all packages with the next command. 

```bash
yarn run dev-all
```
Watch all pointing to integration
```bash
yarn run dev-all:int
```

With this one, for instance, we will run the task storybook

```bash
lerna run storybook
```

Keep in mind that Lerna will search into every package defined, so if it finds two int taskes, it will run booth. To avoid this we can use the **--scope** command

```bash
lerna run int --scope="@raise/client"
```
