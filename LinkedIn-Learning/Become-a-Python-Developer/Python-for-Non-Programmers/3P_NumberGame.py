# the user guesses a number 1-100, and we tell them if they're more, less, or equal
import random
import time
# time is used to add effect


def main():
  number = random.randint(1, 100)
  guess = 0
  counter = 0

  print("Welcome to Number Guesser!")
  print("Generating number between 1 and 100...")
  time.sleep(1)
  print("Got it! Let's begin.")

  while guess != number:
    try:
      guess = int(input("Please enter your guess: "))
    except:
      print("Error, invalid input.")
      guess = 0
    else:
      counter += 1
      print("Checking guess...")
      time.sleep(1)
      print(checkGuess(guess, number))

  print(f"Number of guesses: {counter}")

  return 0


def checkGuess(guess, number):
  if guess < number:
    return "Too low."
  elif guess > number:
    return "Too high."
  elif guess == number:
    return "You got it!"
  else:
    return "Error, please try again."


main()
