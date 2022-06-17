import time
# So now we know how to do multiple threads. What about multiple processes?
from multiprocessing import Process
# note: on some operating systems, you cannot run multiple processes if the function
# for that process is defined within the original program.
# to compensate, we will usually import these functions.
# alternatively, you can use the third-party module multiprocess.

# multiprocess and thread are nearly identical syntax
def longSquare(num, results):
  time.sleep(1)
  results[num] = num**2

results = {}
processes = [Process(target=longSquare, args=(n, results)) for n in range(0,10)]
[p.start() for p in processes]
[p.join() for p in processes]

print(results)  # prints "{}"
# oh, right. Threads share memory, but processes don't.

# Threading emulates parallel computing.
# The program is still on one process, being handled by one core. It just runs
# the threads simultaneously and picks up the results round-robin style.

# multiprocessing is true parallel computing. Unless you have a single-core
# processor, you are telling the OS to run each process as soon as possible
# on whatever core is available.