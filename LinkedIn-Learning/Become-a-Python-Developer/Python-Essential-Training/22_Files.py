# working with files in code requires communicating directly to the OS
# we have to let the OS know our intention with the file to prevent mixups


# we indicate the file and the access type (read)
f = open("10_01_file.txt", 'r')

print(f)
# prints "<_io.TextIOWrapper name='10_01_file.txt' mode='r' encoding='UTF-8'>"

# readline() reads up to a delineator (default is newline)
f.readline() # returns "'Beautiful is better than ugly.\n'"
# repeated uses of readline() toss the delineator and read up to the next one.
# it is common to use this in a loop to go through the document line-by-line.

# readlines() reads the entire REST of the text into a list to the eof indicator
f.readlines() # returns ['Complex is better than complicated.\n',
              #          'Flat is better than nested.\n',
              #          etc.]

# we can use these in conjunction with comprehension.
f = open("10_01_file.txt", 'r')
for line in f.readlines():
  print(line.strip())


# writing works the same way
f = open("10_01_output.txt", 'w')

print(f)
# prints "<_io.TextIOWrapper name='10_01_output.txt' mode='w' encoding='UTF-8'>"

# python uses a file buffer instead of writing to the file at all times.
f.write("Line 1\n")
f.write("Line 2\n")
f.close() # closing the file will trigger the buffer to be written to the file


# append is used to write without overwriting
f = open("10_01_output.txt", 'a')
f.write("Line 3\n")
f.write("Line 4\n")
f.close() # the file now has all four lines


# to make sure that close() is always called, the preferred method of editing is using *with-as*
with open("10_01_file.txt", 'a') as f:
  f.write("some stuff\n")
  f.write("some more stuff\n")