module.exports = (repl, models) => {
  if (!models) console.warn("No models passed to repl-models");

  // model globals
  repl.context.models = models;
  Object.keys(models).forEach(modelName => {
    repl.context[modelName] = models[modelName];
  });

  // logger
  repl.context.lg = data => {
    // pull dataValues out of Sequelize models
    if (Array.isArray(data)) {
      if (data.length && data[0].dataValues) {
        data = data.map(item => item.dataValues);
      }
    } else {
      if (data && data.dataValues) {
        data = data.dataValues;
      }
    }
    console.log(data);
  };
};
