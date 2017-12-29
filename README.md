## Personal Website

Bulid with ReactJS + NodeJS(ExpressJS) + Bootstrap

#### Running locally

``
git clone https://github.com/mauliktrapas/personal-website.git
``

install server dependencies
```
cd personal-website
npm i
```

install client dependencies
```
cd client
npm i
```

change email-id and password in routes/contact.js

```
cd ..
npm start
```

To run client and server on different port change scripts section of package.json
```
  "scripts": {
   - "start": "concurrently \"node ./bin/www\" \"npm run client\"",
   + "start": "node ./bin/www"
    "client": "node start-client.js"
  },
```