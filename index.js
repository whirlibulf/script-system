function System() {
}

System.prototype.init = function (engine) {
  console.log('Script system loaded');
  this.engine = engine;
};

System.prototype.update = function (dt) {
  var components, i;

  components = this.engine.getComponentInstances('script');
  for (i = 0; i < components.length; ++i) {
    for (j = 0; j < components[i].scripts.length; ++j) {
      components[i].scripts[j].update(components[i]._object, dt);
    }
  }
};

module.exports = System;
