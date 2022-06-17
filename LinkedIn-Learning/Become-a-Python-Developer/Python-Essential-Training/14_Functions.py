import math

# review
def performOperation(num1, num2, operation):
  if operation == "sum":
    return num1 + num2
  if operation == "multiply":
    return num1 * num2

performOperation(2, 3, "sum")

# you can use named parameters to disregard order
# note: keyword arguments must come after positional arguments
def performOperation(num1, num2, message, operation):
  print(message)
  if operation == "sum":
    return num1 + num2
  if operation == "multiply":
    return num1 * num2

performOperation(2, 3, operation="sum", message="order")

# you can use *args to accept multiple arguments
def printing(*args):
  print(args)

printing(1,2,3) # prints a tuple "(1, 2, 3)"

# if you need to use a keyword argument as well, you have to use **kwargs

def oneMore(*args, **kwargs):
  print(args)
  print(kwargs)

oneMore(1,2,3,operation=sum) # prints "(1, 2, 3)
                             #         {'operation': 'sum'}"

# we can use this and the math library to make things cleaner/more efficient
def calculate(*args, operation="sum"):
  if operation == "sum":
    return sum(args)
  if operation == "multiply":
    return math.prod(args)