# import the json module
import json
# import the JSONDecodeError for exception handling
# import the JSONEncoder for class encoding
from json import JSONDecodeError, JSONEncoder


# Loading JSON

# this json string is a string, not a dictionary
jsonString = '{"a": "apple", "b": "bear", "c": "cat",}'

# we use a try json.loads() to convert to a dictionary
try:
  json.loads(jsonString)
# and we catch the exception from before
except JSONDecodeError:
  print("Could not parse JSON!")
  # this will print the error, as there is a trailing comma in the string


# Dumping JSON

# we use json.dumps() to write the dictionary to a string
pythonDict = {'a', "apple", 'b', "bear", 'c', "cat",}
json.dump(pythonDict)
# returns '{"a", "apple", "b", "bear", "c", "cat"}'

# the default json decoder is unable to correctly parse custom classes
class Animal:
  def __init__(self, name):
    self.name = name
  
pythonDict = {'a': Animal("aardvark"),}
json.dumps(pythonDict)
# returns a TypeError

# to get around this, we will make our own encorder
class AnimalEncoder(JSONEncoder):
  # we redefine default() to include the object we need encoded
  def default(self, o):
    # we check to see if the object is of the type we want
    if type(o) == Animal:
      # if so, return the attribute we want
      return o.name
    # else use the default attribute from the supersceding class
    return super().default(o)

