# lists are like type-agnostic vectors
num_list = [1, 2, 3, 4]
str_list = ["one", "two", "three"]
mix_list = [1, "two", False, [1.23, 'x']]

# len for number of items (top most count)
len(mix_list) # returns "4"

# lists consist of ordered, non-unique elements
list_num = [4, 3, 2, 1]

list_num == num_list # returns "False"

# sets are as they are in math
set1 = {1, 2, 3, 4}
set2 = {1, 1, 2, 2}
set3 = {2, 1}

# sets consist of unique, unordered elements
set1 == set2 # returns "False"
set2 == set3 # returns "True"

# tuples are immutable arrays, good for speed and space, uneditable in runtime
num_tuple = (1, 2, 3)

# dictionaries are sets with keys
dict_test = {
    "apple": "A red fruit",
    "bear": "A scary animal",
    "apple": "Sometimes a green fruit"
}

print(f"dict_test: {dict_test}") # prints "{'apple': 'A red fruit',
                                 #          'bear': 'A scary animal',
                                 #          'apple: Sometimes a green fruit'}"
                                 
print("apple:", dict_test["apple"]) # prints "{'apple': 'Sometimes a green fruit'}"