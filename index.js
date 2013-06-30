function System() {
    this.components = [];
}

System.prototype.init = function (engine) {
    var that;

    console.log("Script system loaded");

    this.engine = engine;
    that = this;

    this.engine.on("componentCreated", function (type, component) {
        var i, script;
        if (type === "script") {
            that.components.push(component);

            if (component.scripts) {
                for (i = 0; i < component.scripts.length; ++i) {
                    script = component.scripts[i];
                    if (script.init && typeof script.init === "function") {
                        script.init.call(engine, component._object);
                    }
                }
            }
        }
    });

    this.engine.on("componentRemoved", function (type, id) {
        if (type === "script") {
            that.components.length = 0;
            that.components = that.engine.getAll("script");
        }
    });
};

System.prototype.update = function (dt) {
    var entities, i, component, script;

    entities = this.engine.getAll("script");
    for (i = 0; i < this.components.length; ++i) {
        component = this.components[i];
        for (j = 0; j < component.scripts.length; ++j) {
            script = component.scripts[j];
            if (script.update && typeof script.update === "function") {
                script.update.call(this.engine, component._object, dt);
            }
        }
    }
};

module.exports = System;
