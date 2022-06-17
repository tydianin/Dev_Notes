# Writing exception classes keeps code clean and organized.
# Acts as documetation and separates common errors from critical errors.
class CustomException(Exception):
  pass


def causeError():
  raise CustomException("You called the causeError function!")


causeError()


# we can use these to create very extensive error classifications
class HttpException(Exception):
  statusCode = None
  message = None

  def __init__(self):
    super().__init__(
        f"Status code: {self.statusCode}. Message: {self.message}.")


class NotFound(HttpException):
  statusCode = 404
  message = "Resource not found."


class ServerError(HttpException):
  statusCode = 500
  message = "Server error."


def raiseServerError():
  raise ServerError()


raiseServerError()
# prints "Status code: 500. Message: Server Error"
