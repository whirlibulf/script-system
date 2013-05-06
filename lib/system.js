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
    if (components[i].script) {
      compinents[i].script.update(dt);
    }
  }
};

module.exports = System;
