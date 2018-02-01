# CommonJS, AMD and Browser (global) usage of circuit-sdk

> circuit.js is included in this repo just until the umd-capable version is officially published to npm and unpkg

As the repo indicates, the circuit-sdk is now available as UMD module, meaning it can be used as CommonJS or AMD module, and also still as browser global `Circuit` object.

In addition the JS SDK and Node.js SDK now come in a single, common module, the`circuit.js` file.

This repo contains example apps using the Circuit JS SDK:
* a CommonJS node app
* an AMD browser app
* a browser app with regular global script include of the SDK


## Install
```bash
  npm i -g http-server
  npm i -g concurrently
  git clone https://github.com/circuit/umd.git
  cd umd
  npm run commonjs   // to run CommonJS node app
  npm run amd        // to run AMD browser app
  npm run global     // to run Browser global app
```

> The `client_id`'s in the examples are for the circuitsandbox and require the app to run on http://localhost:7000 as defined in `package.json`
