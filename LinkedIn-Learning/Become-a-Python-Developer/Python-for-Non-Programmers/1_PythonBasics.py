# print() is used for standard output
print("Hello World")


# variables are pieces of data that can change over time
course = 430
print(course)
course = 440
print(course)


# integers and floats are the two primitive number types
temp = -20
weight = 246.7


# you can manipulate variables
temp += 23
weight /= 2


# strings are used to store textual data
# python allows using single quotes for strings
shirt = 'black'

# or double quotes
store = "Day's Inn"

# the backslash acts as the escape character
quote = "Today's quote is \"don't mess it up\"."


# use f (format) to place variables in the string
day = 15
name = "Wednesday"
month = "June"
temp = 95.5

# then use braces to add the variables to the print statement
print(f"Today is {name}, {day} {month} and it is {temp} degress.")


# expressions and statements are used for logical evaluations
watch_on_charger = True
watch_charge = 80

print(f"Watch is at {watch_charge}% battery")

if watch_charge < 80:
  print("The watch needs to charge.")

if watch_on_charger != False:
  print("The watch is charging.")
else:
  print("The watch is not charging.")
