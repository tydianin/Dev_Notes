class Dog:
  # constructor
  def __init__(self, name):
    self.name = name
    self.legs = 4
  
  # method
  def speak(self):
    print(self.name + " barks")

# instantiation
my_dog = Dog("Rover")
that_dog = Dog("Revor")

# usage
my_dog.speak()
that_dog.speak()