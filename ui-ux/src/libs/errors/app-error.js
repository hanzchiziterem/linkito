class AppErorr extends Error {
  constructor(message, statusCode = 400, isOperational = true) {
    super(message);

    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default AppErorr;
