num = int(input("Input a number: "))

for i in range(2, num-1):
    if num%i == 0:
        print("Number is NOT prime")
        print(f"Reason = {num}/{i} leaves {num%i}")
        quit()
print("Number is prime!")
            