# lists in python are conditionless, sorted vectors using brackets
tech = ["Computer", True, 5]
print(tech)

# lists use zero-indexing
print(tech[0])

# len gives the length of the list
print(len(tech))

# append adds an item to the end of the list
tech.append("Smart Phone")
print(tech)

# insert adds an item at a specified index
tech.insert(2, "Laptop")
print(tech)

# del removes an item at a specified index
del(tech[3])
print(tech)


# for loops repeat for a specified range
for number in range(10):
  print(number)

# for is type agnostic, as it refers to the list or range itself
for item in tech:
  print(item)


# dictionaries are a key-value pair using braces
vehicles = {"Truck": 1997, "Touring": 2003, "Sedan": 2012, "Van": 1999}
print(vehicles)

# use a key for printing a single item
print(vehicles["Truck"])

# use brackets for appending a value
vehicles["SUV"] = 2017
print(vehicles)

# use del to remove a value
del(vehicles["Van"])
print(vehicles)

# use len for length
print(len(vehicles))
