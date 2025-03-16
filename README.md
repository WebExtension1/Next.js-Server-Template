# Install packages
Run `npm i` to install packages in `/` and `/server/`

## Getting started

To run the app:
```bash
npm run dev
```

To run the server
```bash
npm run server
# or
cd server
node .
```

To run both
```bash
npm run all
```

Your app will run on [http://localhost:3000](http://localhost:3000).

Your server will receive requests at `http://localhost:3001`, or whichever port you configured in your servers .env file.

If you are hosting your server elsewhere, you can edit your .env to the intended endpoint.

You can change your call origin, used port, and database information in your servers .env file.