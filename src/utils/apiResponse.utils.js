class apiResponse {
  constructor(status, message, data) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

class successApiResponse extends apiResponse {
  constructor(status, message, data) {
    super(status, message, data);
    this.statusMessage = 'success';
  }
}

class errorApiResponse extends apiResponse {
  constructor(status, message, data) {
    super(status, message, data);
    this.statusMessage = 'error';
  }
}

export { successApiResponse, errorApiResponse };
