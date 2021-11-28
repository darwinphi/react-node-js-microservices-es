# React +  Node.js Microservices with Event Sourcing
A simple project using Node.js as event bus/store.

To install all dependencies run this from the root directory
```
npm run install-all
```
To run 
```
npm run start-all-service
```
To run then `Query service`
```
cd query && npm start
```

I separate the `Query service` when running all services so we can test the event syncing.
