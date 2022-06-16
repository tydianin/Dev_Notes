# bytes are used for raw data
print(bytes(4)) # prints "b'\x00\x00\x00\x00'"

# bytes can be used to get the bytes for content
eyeRoll = bytes("🙄", "utf-8")
print(eyeRoll) # prints "b'\xf0\x9f\x99\x84"

# use decode to get the original content
print(eyeRoll.decode("utf-8")) # prints 🙄

# use bytearray to turn it into an... array
eR2 = bytearray('🙄', "utf-8")
print(eR2) # prints bytearray(b'\xf0\x9f\x99\x84')

# with the bytearray, we can then slice and edit
eR2[3] = int('85', 16)
print(eR2.decode("utf-8")) # prints 🤷‍♀️