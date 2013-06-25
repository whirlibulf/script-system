function System() {
    this.components = [];
}

System.prototype.init = function (engine) {
    var that;

    console.log("Script system loaded");

    this.engine = engine;
    that = this;

    this.engine.on("componentCreated", function (type, instance) {
        var i;
        if (type === "script") {
            that.components.push(instance);

            if (component.scripts) {
                for (i = 0; i < component.scripts.length; ++i) {
                    if (component.scripts[i].init) {
                        component.scripts[i].init(engine, component._object);
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
    var entities, i, component;

    entities = this.engine.getAll("script");
    for (i = 0; i < this.components.length; ++i) {
        component = this.components[i];
        for (j = 0; j < component.scripts.length; ++j) {
            if (component.scripts[j].update) {
                component.scripts[j].update(this.engine, component._object, dt);
            }
        }
    }
};

module.exports = System;
