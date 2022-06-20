# import the csv module
import csv

# this is used later
primes = []
for number in range(2, 99999):
  for factor in range(2, int(number**0.5)):
    if number % factor == 0:
      break
  else:
    primes.append(number)


# Reading Data

# reading works similarly to textiowrapper
with open("10_02_us.csv", 'r') as f:

  # we can specify a delimiter in order to break up the data (hopefully it's cleaned)
  reader = csv.reader(f, delimiter='\t')

  # reader() keeps track of the position in the file, so we can use it to skip a header
  next(reader)

  # just like readline(), we can use a loop to read the entire file
  for row in reader:
    print(row)

# instead of using next(), we can also cast the reader to a list and use list syntax
with open("10_02_us.csv", 'r') as f:
  reader = list(csv.reader(f, delimiter='\t'))
  for row in reader[1:]:
    print(row)

# the CSV module does understand the concept of headers though, and can turn the file into a list of dictionaries
with open("10_02_us.csv", 'r') as f:
  reader = csv.DictReader(f, delimiter='\t')
  for row in reader:
    print(row)


# Filtering Data

# to filter data, we usually cast the dictionary to a list object
with open("10_02_us.csv", 'r') as f:
  data = list(csv.DictReader(f, delimiter='\t'))

# from here, we can extropolate our data similar to a sql query
data = [row for row in data if int(row['postal code']) in primes and row['state code'] == "MA"]


# Writing Data

# works similarly to reading
with open("10_02_ma_prime.csv", 'w') as f:
  writer = csv.writer(f)
  for row in data:
    writer.writerow([row["place name"], row["county"]])