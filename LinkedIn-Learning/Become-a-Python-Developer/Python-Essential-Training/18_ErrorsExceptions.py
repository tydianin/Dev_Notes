# Exceptions, when used correctly, act like a second layer of code
# Functions that raise exceptions are powerful when combined with custom exceptions.

import time

def causeError():
  start = time.time()

  # we can tell the program to attempt something prior to returning it
  try:
    return 1/0

  # we can specify the type of exception to catch
  except ZeroDivisionError:
    print("You cannot divide by zero.")
    
  # we can catch all other types of exception
  except Exception as e:

    # we can add a custom message to be printed
    print("Error, please try again.")

    # we can return the exception for further handling
    return e

  # we can add something that always executes
  finally:
    print("Finally always executes")

    # this can be helpful for timing, tracing, etc.
    print(f"Execution time: {time.time() - start} seconds")

causeError()

# prints "You cannot divide by zero."
# prints "Finally always executes."
# prints "Execution time: 0.504910945892334 seconds."
# returns ZeroDivisionError('division by zero')

# exception handling is order-dependant, and will execute top-down


# decorators can be used to keep things clean
def handleException(func):
  # it's important to use *args here to make sure we don't just always error
  def wrapper(*args):
    try:
      # pass the args to the correct function
      func(*args)
    except TypeError:
      print("Invalid type.")
    except ZeroDivisionError:
      print("Divide by zero.")
    except Exception:
      print("Error, please try again.")
  return wrapper

@handleException
def causeError():
  return 1/0

causeError()
# prints "Divide by zero."


# "raising" or "throwing" are useful for functions that receive invalid input
@handleException
def raiseError(n):
  if n == 0:
    raise Exception()
  print(n)

raiseError()
# prints "Error, please try again."