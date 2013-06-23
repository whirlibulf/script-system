function System() {
}

System.prototype.init = function (engine) {
    console.log("Script system loaded");
    this.engine = engine;

    this.engine.on("start", function () {
        var entities, i, component;

        entities = engine.getAll("script");
        for (i = 0; i < entities.length; ++i) {
            component = engine.get(entities[i], "script");
            for (j = 0; j < component.scripts.length; ++j) {
                if (component.scripts[j].init) {
                    component.scripts[j].init(engine, entities[i]);
                }
            }
        }
    });
};

System.prototype.update = function (dt) {
    var entities, i, component;

    entities = this.engine.getAll("script");
    for (i = 0; i < entities.length; ++i) {
        component = this.engine.get(entities[i], "script");
        for (j = 0; j < component.scripts.length; ++j) {
            if (component.scripts[j].update) {
                component.scripts[j].update(this.engine, entities[i], dt);
            }
        }
    }
};

module.exports = System;
