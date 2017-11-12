# repl-models

This package allows you to easily include your database models in your custom REPL. Additionally, it provides a global `lg` function for quickly logging out query results. Handily, it logs the `dataValues` sub-object from Sequelize responses.

## Quickstart

Install: `npm i repl-models`

```javascript
const repl = require('repl').start()
const models = require('../models')
require('repl-history')(repl, models)
```

## Use
```
> User.findOne().then(lg)
{ id: 5,
username: "korben-dallas",
passwordHash: "1681d5ef54d36b78bb8b97a9d6b3e320" }
```
