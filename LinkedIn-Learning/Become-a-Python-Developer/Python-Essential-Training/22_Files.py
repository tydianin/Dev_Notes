# working with files in code requires communicating directly to the OS
# we have to let the OS know our intention with the file to prevent mixups

# we indicate the file and the access type (read)
f = open("10_01_file.txt", 'r')

print(f)
# prints "<_io.TextIOWrapper name='10_01_file.txt' mode='r' encoding='UTF-8'>"

# readline() reads up to a delineator (default is newline)
f.readline() # returns "'Beautiful is better than ugly.\n'"