# processes are allocated individual memory and shared storage
# by default, these resources are not shared between two processes
# to get around this, we run both programs in the same process using multiple threads
import threading
import time
from unittest import result

def longSquare(num):
  time.sleep(1)
  return num**2

[longSquare(n) for n in range(0, 5)]


# the code above works in one thread, and must complete before more code may execute
# to get around this, we use Thread objects
# we are declaring the thread with the function and a tuple
t1 = threading.Thread(target=longSquare, args=(1,))
t2 = threading.Thread(target=longSquare, args=(2,))

# next, we start the thread executions
t1.start()
t2.start()

# finally, we join them. This will pause runtime until everything is complete.
t1.join()
t2.join()


# the code above will not produce any results directly though
# to collect results, we can use a dictionary
results = {}

# we update our function to return the results to the dictionary
def longSquare(num, results):
  time.sleep(1)
  results[num] = num**2

t1 = threading.Thread(target=longSquare, args=(1,results))
t2 = threading.Thread(target=longSquare, args=(2,results))

t1.start()
t2.start()

t1.join()
t2.join()

print(results) # prints "{2: 4, 1: 1}"


# instead of writing threading, start, join, etc. 
# we can use list comprehension
def longSquare(num, results):
  time.sleep(1)
  results[num] = num**2

results = {}

threads = [threading.Thread(target=longSquare, args=(n, results)) for n in range(0,10)]
[t.start() for t in threads]
[t.join() for t in threads]
# this effectively makes 10 threads, all running in parallel, in one line

print(results)
# prints "{2: 4, 1: 1, 7: 49, 4: 16, 6: 36, 5: 25, 9: 81, 8: 64, 3: 9, 0: 0}"