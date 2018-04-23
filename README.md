
# Interview Project (Test-9MS2)
A project on AWS involving the following components
- Node.js API with a MongoDB database
- React.js/Redux web UI
- Mobile UI

## Current Status
1. ~~Setup from scratch a bare-bones project~~
2. ~~Understanding AWS Lambda~~
3. ~~Create Node.js API backend~~
4.  ~~Create Web UI~~

## Todo
- Fully automate Serverless with up and down commands
- (Bonus) Use React & Redux
- (Bonus) Create Mobile UI

## Setup
- Change the current working directory the within this repository
- Copy or rename `.env.sample` to `.env`
- Install Serverless `npm i -g serverless`
- Setup Serverless by running `serverless config credentials --provider aws --key <AWS KEY> --secret <AWS SECRET>`
- Run Serverless by running  `serverless deploy`
- Copy the URL provided by serverless (`https://<hash>.execute-api.us-east-1.amazonaws.com/dev`) and overwrite `API_URL` within `.env`
- Run the server by running `adonis serve`
