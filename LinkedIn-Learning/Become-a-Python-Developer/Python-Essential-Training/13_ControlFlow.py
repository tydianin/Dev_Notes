import datetime
# if, elif, else

# single-line if
n = 5
print('Fizz' if n % 3 == 0 else n)

# ternary operator
fizzBuzz = 'Fizz' if n % 3 == 0 else n

# while, break, continue

# pass can be used to skip a segment of indentation without causing an error
while datetime.now().second != 2:
  pass

print("pass")

# break statements only break the current loop. You have to account for outer loops

# continue is used inside an if statement to prevent code from executing if a condition is met

while True:
  if datetime.now().second < 2:
    continue
  break

print("continue break")