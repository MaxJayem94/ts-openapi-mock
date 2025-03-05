# ts-openapi-mock

This repository is a setup to run a mock server using an openapi yaml file. The commands from the package json can be used to create TS types and services for Angular, as well as a docker compose start command to create a mock serve around an api sepc page.

For further information rear this [Medium Article]("https://medium.com/@maxjanssenmueller/mock-together-83046826ca2f").

To install required dependencies run: `npm install`

Then start the mock server with (make sure you have [Docker](https://docs.docker.com/desktop/setup/install/mac-install/] installed) installed):
`npm run api:mock`

Navigate to [localhost:56002]("http://localhost:56002/") to see the generated api spec of your mock server. 

Try requesting [/customers]("http://localhost:56001/customers") to fetch mock data.

run `npm run api-gen-mock` to generate Typescript Types and Services for your Frontend App. They will be located under `./generated`-Folder.


