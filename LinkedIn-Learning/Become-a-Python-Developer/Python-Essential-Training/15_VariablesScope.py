# scope is review

# we can use locals() to list the current local variables within the scope
def fu(num1, num2, operation="sum"):
  print(locals())


fu(1, 2, operation="multiply")
# prints {'num1': 1, 'num2': 2, 'operation': 'multiply'}

# you can also use globals(), but this will be messy

# python defaults to global scope for anything declared outside a function
message = 'Some global data'
varA = 2


def func1(varA, varB):
  print(varA)
  print(message)
  print(locals())


def func2(varC, varB):
  print(varA)
  print(message)
  print(locals())

func1(1, 2) # prints "1
            #         Some global data
            #         {'varA': 1, 'varB': 2}"
func2(3, 4) # prints "2
            #         Some global data
            #         {'varC': 3, 'varB': 4}"