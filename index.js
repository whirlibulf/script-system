function System() {
    this.components = [];
    this.index = null;
}

System.prototype.init = function (engine) {
    var that;
    that = this;

    console.log("Script system loaded");

    this.engine = engine;
    this.index = this.engine.index(["script"]);

    this.engine.on("componentCreated", function (type, component, entity) {
        var i, script;
        if (type === "script") {
            component = engine.get(entity, "script");
            for (i = 0; i < component.scripts.length; ++i) {
                script = component.scripts[i];
                if (script.init && typeof script.init === "function") {
                    script.init.call(engine, component._entity);
                }
            }
        }
    });
};

System.prototype.update = function (dt) {
    var entities, i, component, script;

    entities = this.engine.getAll(this.index);
    for (i = 0; i < entities.length; ++i) {
        component = this.engine.get(entities[i], "script");
        for (j = 0; j < component.scripts.length; ++j) {
            script = component.scripts[j];
            if (script.update && typeof script.update === "function") {
                script.update.call(this.engine, component._entity, dt);
            }
        }
    }
};

module.exports = System;
