# python has list comprehension, aka knowing what's up in a list
myList = [1, 2, 3, 4, 5]
listTwo = [2*item for item in myList]
print(listTwo) # prints "[2, 4, 6, 8, 10]"

# essentially allows making a for loop in one line while returning a
# copy of the list that is being itterated over

# can be used to filter a list
myList = list(range(100)) # creates a list with values 0-99
filtered = [item for item in myList if item % 10 == 0]
print(filtered) # prints "[0, 10, 20, 30, 40, 50, 60, 70, 80, 90]"

filtered = [item for item in myList if item % 10 < 3]
print(filtered) # prints "[0, 1, 2, 10, 11, 12... 90, 91, 92"]

# can be used to split text by a delineator
myString = "My name is Joseph Moreno. Prepare to get hugged"
print(myString.split('.')) # prints "["My name is Joseph Moreno", "Prepare to get hugged"]

# str.split() defaults to space
print(myString.split()) # prints "["My", "name", ..., "Moreno.", ..., "hugged"]
# note that the period is kept. we can fix this

def cleaner(word):
  return word.replace('.', '').lower()

cleaned = [cleaner(word) for word in myString.split()]
print(cleaned) # prints "["my", "name", ..., "moreno", ..., "hugged"]

# this can be used for filtering by length
short = [cleaner(word) for word in myString.split() if len(cleaner(word)) < 3]
print(short) # prints "["my", "is", "to"]"

# we can nest the comprehensions
listed = [[cleaner(word) for word in sentence.split()] for sentence in myString.split('.')]
print(listed) # prints "[["my", "name", ..., "moreno"], ["prepare", ..., "hugged"]]"

# dictionaries have comprehension as well
animalList = [('a', "aardvark"), ('b', "bear"), ('c', "cat"), ('d', "dog")]
animals = {key: value for key, value in animalList}
print(animals) # prints "{'a': "aardvark", 'b': "bear", 'c': "cat", 'd': "dog"}"

# we can reverse this move as well
print(animals.items()) # prints "dict_items([('a', "aardvark"), ..., ('d', "dog")])"
animalList = list(animals.items())
print(animalList) # prints "[('a', "aardvark"), ..., ('d', "dog")]"

# possibly most important is list comprehension on the dictionary
listed = [{"letter": key, "name": value} for key, value in animals.items()]
print(listed) # prints "[{'letter': 'a', 'name': 'aardvark'},
              #        " {'letter': 'b', 'name': 'bear'}",
              # and so on