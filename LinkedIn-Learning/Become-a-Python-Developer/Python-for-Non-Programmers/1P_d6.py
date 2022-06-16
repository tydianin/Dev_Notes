# roll a six-sided die

import random

roll = random.randint(1, 6)
status = ""

if roll == 1:
  status = "Critical failure!"
elif roll == 6:
  status = "Fantastic success!"
else:
  status = "Nothing interesting."

print(f"{status} Roll: {roll}")
