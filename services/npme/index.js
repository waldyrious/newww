
exports.register = function npmE (service, options, next) {

  service.method('npme.sendData', require('./methods/sendData')(options));

  service.method('npme.getCustomer', require('./methods/getCustomer')(options));

  service.method('npme.createCustomer', require('./methods/createCustomer')(options));

  next();
};

exports.register.attributes = {
  name: "newww-service-npme",
  version: "1.0.0"
}


