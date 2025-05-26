# For those too lazy for multiplication.
num = int(input('Insert number: '))

if num > 10 or num < 1:
    print("This number is above 10 or lower than 1, so we're not doing it.")
    print("Why? Don't bother.")
    quit()

for x in range(1, 11):
    print(f"{num} x {x} = {num*x}")