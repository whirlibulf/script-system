function System() {
}

System.prototype.init = function (engine) {
  console.log("Script system loaded");
  this.engine = engine;
};

System.prototype.update = function (dt) {
  var entities, i, component;

  entities = this.engine.getAll("script");
  for (i = 0; i < entities.length; ++i) {
    component = this.engine.get(entities[i], "script");
    for (j = 0; j < component.scripts.length; ++j) {
      components.scripts[j].update(this.engine, entities[i], dt);
    }
  }
};

module.exports = System;
