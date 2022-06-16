from collections import defaultdict

# it's convention to have a trailing comma at the end of a dictionary
animals = {
  'a': "aardvark",
  'b': "bear",
  'c': "cat",
}
print(animals) # prints {'a': "aardvark", 'b': "bear", 'c':"cat"}

# dictionaries are referenced by their keys
print(animals['a']) # prints "aadrvark"

# dictionaries are modified directly
animals['d': "dog"]
print(animals['d']) # prints "dog"

animals['a': "antelope"]
print(animals['a']) # prints "antelope"

# keys and values are built-in functions
print(animals.keys()) # prints "dict_keys(['a', 'b', 'c', 'd'])"
print(animals.values()) # prints "dict_values(["antelope", "bear", "cat", "dog"])

# dict_keys and dict_values are immutable, but we can make them into a list
print(list(animals.keys())) # prints "['a', 'b', 'c', 'd']"

# we cannot access elements that do not exist
print(animals['e']) # returns a KeyError

# we can use the get function to make up for this
# syntax: key to search, default value if no result
print(animals.get('e'))  # prints "None"
print(animals.get('e', "elephant")) # prints "elephant"
print(animals.get('a')) # printes "antelope"

# dicts have len
print(len(animals)) # prints "4"

# dicts can have lists (this is a common thing, know it)
animals = {
  'a': ["aardvark", "antelope"],
  'b': ["bear"],
}

# we can use this to modify the values
animals['b'].append("bison")

# to add, we add both parts
animals['c'] = ["cat"]
# this will overwrite whatever is in animals['c'] if it exists

# for safety, use
if 'c' not in animals:
  animals['c'] = []

animals['c'].append("cat")

# we can specify the if statement above using defaultdict() from collections
animals = defaultdict(list) # do not use defaultdict([])
print(animals) # prints "defaultdict(list, {})"

animals['c'].append("elephant")
print(animals) # prints "defaultdict(list, {'e': ["elephant"]})"

print(animals['f']) # prints "[]"