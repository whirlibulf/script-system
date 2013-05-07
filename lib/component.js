function ComponentFactory(options) {
  this.id = 'script';
};

ComponentFactory.prototype.createComponent = function (options) {
  if (!options.scripts) {
    return {};
  }

  //instance.scripts should be an array of objects that have an update method
  return {
    "scripts": options.scripts
  };
};

module.exports = ComponentFactory;
