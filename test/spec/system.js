describe("System", function () {
    var System = require("script-system"),
        system,
        engine;

    beforeEach(function () {
        system = new System();

        engine = {
            "on": function (event, callback) {
            }
        };

        spyOn(engine, "on");
    });

    it("should initialize with an empty component list", function () {
        expect(system.components.length).toBe(0);
    });

    describe("init", function () {
        beforeEach(function () {
            system.init(engine);
        });

        it("should listen for new components", function () {
            expect(engine.on).toHaveBeenCalled();
            expect(engine.on).toHaveBeenCalledWith("componentCreated", jasmine.any(Function));
        });

        it("should listen for removed components", function () {
            expect(engine.on).toHaveBeenCalled();
            expect(engine.on).toHaveBeenCalledWith("componentRemoved", jasmine.any(Function));
        });
    });
});
