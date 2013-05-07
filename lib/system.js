var Emitter = require('emitter');

function System() {
  var that = this;

  this.on('register', function (engine) {
    console.log('Script system loaded');
    that.engine = engine;
  });
}

Emitter(System.prototype);

System.prototype.update = function (dt) {
  var components, i;

  components = this.engine.getComponentInstances('script');
  for (i = 0; i < components.length; ++i) {
    for (j = 0; j < components[i].scripts.length; ++j) {
      components[i].scripts[j].update(dt);
    }
  }
};

module.exports = System;
