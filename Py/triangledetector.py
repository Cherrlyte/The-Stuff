x = input("Input in x: ")
y = input("Input in y: ")
z = input("Input in z: ")

if x == y and x != z:
    print("Your triangle is isoceles.")
elif x != y and x == z:
    print("Your triangle is isoceles.")
elif x == y and x == z:
    print("Your triangle is equilateral.")
else:
    print("Your triangle is scalene.")
    