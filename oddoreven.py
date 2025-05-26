# I am NOT doing that.

number = int(input("Input your number: "))
res = number%2

if res > 0:
    print("ODD!!!!!!!!")
else:
    print("Even :)")
    
print("\nnow onto something else...\n")

if number%3 == 0:
    print("Your number is divisable by three!")
elif number%4 == 0:
    print("Your number is divisable by four!")
else:
    print("Your number sucks, isn't divisable by four OR three.")
    