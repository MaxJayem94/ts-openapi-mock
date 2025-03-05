# ts-openapi-mock

This repository is a setup to run a mock server using an openapi yaml file. The commands from the package json can be used to create TS types and services for Angular, as well as a docker compose start command to create a mock serve around an api sepc page.

to start run

`npm install`

then start the mock server with:

`npm run api:mock`

navigate to (localhost:56002)("http://localhost:56002/") to see the generated api spec of your mock server. 

try requesting (/customers)("http://localhost:56001/customers") to fetch mock data.

run `npm run api-gen-mock` to generate Typescript Types and Services for your Frontend App. They will be located under `./generated`-Folder.
