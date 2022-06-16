# triple quotes are used for multi-line strings
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
print(text)

# len gives the amount of characters in the string (length of memory)
char_count = len(text)

# split will turn the large string into a list of strings.
words = text.split()

# using len and split will give the amount of words in the list.
word_count = len(text.split())


# we can use dictionaries to count words (basically a hashmap)
word_occurs = {}

for word in text.split():
  if word in word_occurs:
    word_occurs[word] += 1
  word_occurs[word] = 1

print(word_occurs)
