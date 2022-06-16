import math

# slicing is used to take a single character
name = "Ryan Mitchell"
print(name[0]) # prints "R"

# you can use indexing (start, count)
print(name[:7]) # prints "Ryan Mi"
print(name[7:]) # prints "tchell"

# this applies to lists too
myList = [1, 2, 3, 4, 5]
print(myList[2:4]) # prints "[3, 4]"

# we can modify number strings using format notation
print(f"Pi is: {math.pi}.2f")

# use three quotes for multi-line string
text = """
You wished for a closed world, where you alone are comfortable.
In order to protect the weakness of your heart.
In order to protect your pleasures in life.
This is merely the result.
For people cannot live in a world that is yours alone.
They cannot live in a space that is closed off.
But you wished for the world, the world that surrounds you, to be closed off.
Your heart and mind eliminated everything you didn't like and wished for a world as solitary as possible.
And that has led to this little haven for your soul.
This is one of the many ends that could occur.
This is the end of the world that you have brought about.
And the journey towards instrumentality... will continue.
"""