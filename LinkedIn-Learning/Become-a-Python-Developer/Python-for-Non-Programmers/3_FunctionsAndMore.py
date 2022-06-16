# functions in python are defined
def Hello():
  print("Hello Python")


# functions are then called
Hello()


# parameters are used to pass information into a function
def vehicleInfo(year, make, model):
  print(f"Nice, a {year} {make} {model}.")


vehicleInfo(2017, "BMW", "X3")


# return statements pass information back out of the function
def capitalize(string):
  caps = ""

  # technically we could just do string.upper(), but this is practice
  for char in string:
    char = char.upper()
    caps += char

  return caps


print(capitalize("what"))


# input() is used for stdin (as a string)
user_number = input("Enter a number: ")
print(user_number * 2)
print(int(user_number) * 2)


def upperLower(string, choice):
  if choice == "1":
    return string.upper()
  elif choice == "2":
    return string.lower()
  else:
    return "Invalid choice."


user_string = input("Enter a string: ")
user_choice = input("1 to capitalize. 2 to lowercase: ")
print(upperLower(user_string, user_choice))
