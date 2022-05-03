**AppSync, Amplify, Lambda, DynamoDB and React/NextJS Boilerplate**
------------------------
# TODO:
- [x] Generate Next.js
- [x] Add Tailwind library
- [x] Set up Amplify, AppSync, and DynamoDB
    - [x] Create Custom schema
    - [x] Push API to AWS
- [x] Remove Next.js so It's just React.js
- [ ] Create App with React.js
    - [ ] Create a Navbar
	- [ ] Create a form for adding data(like adding a product/order)
    - [ ] Create a landing page
    - [ ] Create an Admin page
- [ ] Add Cognito Auth(with Google, Facebook, Twitter, and Email)
- [ ] Add Jest Testing Library
- [ ] Add a ESLint
    - [ ] Enable SES for verifying the Email
---
- [ ] Add a POST and GET lambda function that connects to the DB
---
# Documentation:
---
## About this app
This is a CRUD app that allows users to order products via a form. The data is stored in DynamoDB and gets returned to the user on another page that is only visible when logged in.

## Update schema
If you want to update the schema, locate the `schema.graphql` file, nested in the Amplify directory.
Once you've updated the schema, run `amplify push` (this will take a minute).

## If you want to create a new backend API
Try `amplify add api` to create a backend API and then "amplify push" to deploy everything


## Run the local development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


