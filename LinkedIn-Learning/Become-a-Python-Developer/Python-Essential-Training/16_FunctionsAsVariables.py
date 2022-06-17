# functions are just variables, so we can put them in a list
text = ''' This. Is a bucket.
           Dear god.
           There's more.
           No!'''

def lower(string):
  return string.lower

def remPunc(string):
  puncs = ['.', '-', ',', '*']
  for punc in puncs:
    string = string.replace(punc, '')
  return string

def remNew(string):
  string = string.replace('\n', ' ')
  return string

procFuncs = [lower, remPunc, remNew]

for func in procFuncs:
  text = func(text)

print(text) # prints "this is a bucket dear god there's more no!"


# Lambda functions are used for small one-line functions
(lambda x: x + 3)(5) # returns 8

# this is extremely helpful for sorting things that usually aren't sorted
myList = [{"num": 3}, {"num": 2}, {"num": 3}]
sorted(myList) # returns an error
sorted(myList, key=lambda x: x["num"])
# returns "[{"num": 1} {"num": 2} {"num": 3}]"