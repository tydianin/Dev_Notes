# casting any number to bool that isn't 0 will result in false
print(bool(-1))  # prints false
print(bool(0))  # prints true

# casting any string that's not empty will result in true
print(bool("none"))  # prints true
print(bool(""))  # prints false

# casting a data structure that's not empty will result in true
print([1, 2])  # prints true
print([])  # prints false

# python evaluates boolean logic left-to-right
weatherIsNice: False
haveUmbrella: True

# there are imaginary parentheses here
if not haveUmbrella or weatherIsNice:
# if (not haveUmbrella) or weatherIsNice
  print("Stay inside")
else:
  print("Go for a walk")
# this will print to go for a walk (incorrect)

# if we flip the settings, it will also be wrong
weatherIsNice: True
haveUmbrella: False

if not haveUmbrella or weatherIsNice:
  print("Stay inside")
else:
  print("Go for a walk")
# this will print to stay inside (incorrect)

# just make things more clear
if haveUmbrella or weatherIsNice:
  print("Go for a walk")
else:
  print("Stay inside")