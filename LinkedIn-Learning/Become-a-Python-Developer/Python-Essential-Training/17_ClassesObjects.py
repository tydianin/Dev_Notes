class Dog:
  _legs = 4

  # constructor
  def __init__(self, name):
    self.name = name

  # accessor
  def speak(self):
    print(f"{self.name} barks")

# child class
class Hound(Dog):
  # inherited function, overwritten results
  def speak(self):
    print(f"{self.name} yowls")
  
  def wagTail(self):
    print("thump thump thump")

# static attribute
print(Dog._legs)  # prints "4", as it's static

# instantiation
myDog = Dog("Rover")
print(myDog.name)  # prints "Rover"

# instance attribute
myDog._legs = 3
print(myDog._legs) # prints "3"


# we can extend built-in classes
class UniqueList(list):

  def __init__(self):
    # using super() here makes sure that we don't override base construction
    super().__init__()
    self.someProperty = "Unique List"
    
  def append(self, item):
    if item in self:
      return
    super().append(item)
    # use super() to utilize the parent's version of the child's method