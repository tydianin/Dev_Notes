# we can use sets to easily remove duplicate values
myList = ['a', 'b', 'b', 'c', 'c']
myList = list(set(myList))
print(myList) # prints "['a', 'b', 'c']"

# since set contents are randomized, they cannot be indexed
mySet = set(myList)
print(mySet[0]) # returns a TypeError

# you can still add elements to the set
mySet.add('d')
print(mySet) # prints "{'a', 'b', 'c', 'd'}"

# sets are subject to membership
result = 'a' in mySet
print(result) # prints "True"
result = 'z' in mySet
print(result) # prints "False"

# sets have len and pop
while len(mySet):
  print(mySet.pop()) # returns random elements until empty

# sets can have specific elements removed
mySet = {'a', 'b', 'b', 'c', 'c'}
mySet.discard('a')
print(mySet) # prints "{'b', 'c'}"


# tuples are ordered and indexed, but immutable
myTup = ('a', 'b', 'c')
print(myTup) # prints "('a', 'b', 'c')"
print(myTup[0]) # prints "'a'"
myTup[0] = 'd' # returns a TypeError

# return statements with multiple elements return as a tuple
def returnMultiple():
  return 1,2,3

a, b, c = returnMultiple()
print(a) # prints "a"