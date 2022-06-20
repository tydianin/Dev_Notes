# import the json module
import json
# import the JSONDecodeError for exception handling
from json import JSONDecodeError


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