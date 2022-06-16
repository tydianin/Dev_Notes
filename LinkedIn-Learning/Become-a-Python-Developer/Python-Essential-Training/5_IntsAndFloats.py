# imports at the top
from decimal import Decimal, getcontext

# float math results in floats.
# typecasting to int will truncate anything after decimal
print(int(14/3))

# round() can be used to round
print(round(14/3, 2))

# floats are still based on binary
print(1.2 - 1.0)

# you can change base for typecast
print(int("100", 2))
print(int("lab", 16))

# using decimal we can change attributes
getcontext()

# follow with dot notation for setting attributes
getcontext().prec=4

# call the class to get the converted number
Decimal("3.14")