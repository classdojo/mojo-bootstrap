

module.exports = function (app) {

  app.use(require("mojo-mediator"));

  app.once("initialize", function (options) {
    app.mediator.execute("bootstrap", options, function () {
      if (app.didBootstrap) {
        app.didBootstrap(options);
      }
    });
  });

}