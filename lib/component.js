function ComponentFactory(options) {
  this.id = 'script';
};

ComponentFactory.prototype.createComponent = function (options) {
  if (!options.script) {
    return {};
  }

  //The script is an object that has an update method
  if (typeof options.script === "object") {
    return {
      "script": option.script
    };
  }

  //The script is just a simple function, so return an object with an update propery
  if (typeof options.script === "function") {
    return {
      "script": {
        "update": options.script
      }
    };
  }

  return {};
};

module.exports = ComponentFactory;
