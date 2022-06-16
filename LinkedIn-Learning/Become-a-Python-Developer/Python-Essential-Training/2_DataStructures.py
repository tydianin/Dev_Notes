# lists are like type-agnostic vectors
num_list = [1, 2, 3, 4]
str_list = ["one", "two", "three"]
mix_list = [1, "two", False, [1.23, 'x']]

# len for number of items (top most count)
print("mix_list length: ", len(mix_list))

# lists consist of ordered, non-unique elements
list_num = [4, 3, 2, 1]

print("Is list_num equivalent to num_list?")
print(list_num == num_list)

# sets are as they are in math
set1 = {1, 2, 3, 4}
set2 = {1, 1, 2, 2}
set3 = {2, 1}

# sets consist of unique, unordered elements
print("Is set 1 equivalent to set 2?")
print(set1 == set2)

print("Is set 2 equivalent to set 3?")
print(set2 == set3)


# tuples are immutable arrays, good for speed and space
num_tuple = (1, 2, 3)
# if you attempt to edit it after declaration, you will get an error

# dictionaries are sets with keys
dict_test = {
    "apple": "A red fruit",
    "bear": "A scary animal",
    "apple": "Sometimes a green fruit"
}

print(f"dict_test: {dict_test}")
print("apple:", dict_test["apple"])
