🔥 Fire Hydrant Design System
=============================

## Deploying storybook to Chromatic
Hosting for Storybook is provided by [Chromatic](https://www.chromatic.com/apps); permissions for the project are mirrored from those on [Github](https://github.com/firehydrant/design-system/settings/access).

In other words- whatever access you have on Github, you should also have on Chromatic.

Deploying to Chromatic requires the following:

1. Set ```CHROMATIC_PROJECT_TOKEN``` environment variable to [project token provided by Chromatic](https://www.chromatic.com/docs/cli#required-options)

2. Run deploy script
    ```shell 
    npm run chromatic
    ```
---

Alternatively, you may pass the project token manually using the ```--project-token``` option
```shell
npm run chromatic --project-token <your-project-token>
```

### Easy environment variables with ```direnv```
Though it is not required, using [```direnv```](https://direnv.net/) may simplify your life. 

From the website:
> Before each prompt, direnv checks for the existence of a .envrc file in the current and parent directories. If the file exists (and is authorized), it is loaded into a bash sub-shell and all exported variables are then captured by direnv and then made available to the current shell.