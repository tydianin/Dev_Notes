# lists can be sliced like other types
myList = [1, 2, 3, 4, 5]
print(myList[3:]) # prints "[4, 5]"
print(myList[0:6:2]) # prints "[1, 3, 5]"
print(myList[::2]) # also prints "[1, 3, 5]"

# useful with range loops
myList = list(range(100))
print(myList[::25]) # prints "[0, 25, 50, 75]"

# can be used in reverse
print(myList[::-25]) # prints "[99, 74, 49, 24]"


# use append to add to the end
myList = [1, 2, 3, 4]
myList.append(5)
print(myList) # prints [1, 2, 3, 4, 5]

# use insert to add at an index
myList.insert(3, "what")
print(myList) # prints "[1, 2, 3, "what", 4, 5]"

# use remove to remove by value
myList.remove("what")
print(myList) # prints "[1, 2, 3, 4, 5]"
# if the element does not exist, you will get a ValueError

# use pop to remove an item from the end
myList.pop()
print(myList) # prints "[1, 2, 3, 4]"

# pop returns the popped value
print(myList.pop()) # prints "4"

# remember, variables are based in memory
a = [1, 2, 3, 4, 5]
b = a
a.append(6)
print(b) # prints "[1, 2, 3, 4, 5, 6]"

# we can use copy to avoid dual reference
b = a.copy
a.pop()
print(a) # prints "[1, 2, 3, 4, 5]"
print(b) # prints "[1, 2, 3, 4, 5, 6]"