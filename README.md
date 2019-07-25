# Raise Web monorepo

|            | Purpose                        | Version |     |     |
| ---------- | ------------------------------ | ------- | --- | --- |
| Client     | Our main app                   | 0.0.1   |     |     |
| Onboarding | SignUp / SignIn flow component | 0.0.1   |     |     |
| Components | Storybook UI repository        | 0.0.1   |     |     |

## Install

The project uses Lerna to handle the cross-dependency and the code shared around all projects (you can find them at packages folder). It's **very important to NOT run npm i within them**, Lerna will handle this at the root of the project. So, first step:

```bash
lerna bootstrap
```

This will download and create the symlinks across all projects, you don't need to care about anything else.

## Usage

In order to work on the packages you should run a task defined in the **local (to the projects) package.json** from the root of the project with:

```bash
lerna run int
```

This will run the task int defined in client project

With this one, for instance, we will run the task storybook

```bash
lerna run storybook
```

Keep in mind that Lerna will search into every package defined, so if it finds two int taskes, it will run booth. To avoid this we can use the **--scope** command

```bash
lerna run int --scope="@raise/client"
```
