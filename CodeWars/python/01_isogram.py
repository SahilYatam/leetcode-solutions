'''
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
'''

def is_isogram(string):
    words = string.lower()

    my_set = set()

    for word in words:
        if word in my_set:
            return False
        my_set.add(word)
    
    return True

st1 = "moOse"
st2 = "Dermatoglyphics"

print(is_isogram(st2))