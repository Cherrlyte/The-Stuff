#Thy Calculator

from time import sleep
import math

x = 0
y = 0

def add(x, y):
    return (x+y)

def sub(x,y):
    return (x-y)

def mul(x,y):
    return (x*y)

def div(x,y):
    return (x/y)

def pot(x,y):
    return (x**y)

def sqr(x):
    return (math.sqrt(x))

def BADelta(a, b, c):
    return (b**2-4*a*c)
    
def BAMain(a, b, c):
    delta = BADelta(a,b,c)
    if delta > 0:
        x1 = (-b + sqr(delta)) / 2*a
        x2 = (-b - sqr(delta)) / 2*a
        return x1, x2
    elif delta == 0:
        x = (-b + sqr(delta)) / 2*a
        return x
    else:
        print(f"There are no real roots for this thing (delta = {delta}).")
        quit()
    


print("Welcome to the thingamajig! \n")
print("Choose your stuff.")
print("1. Addition")
print("2. Subtraction")
print("3. Multiplication")
print("4. Division")
print("5. Exponential")
print("6. Square Root")
choice = int(input("Selection: "))
x = int(input("Insert first number: "))
y = int(input("Insert second number: "))

if choice == 1:
    print(f"If we add {x} and {y} together, we'll get: {add(x, y)}")    
elif choice == 2:
    print(f"If we subtract {x} and {y}, we'll get: {sub(x, y)}")    
elif choice == 3:
    print(f"If we multiply {x} and {y}, we'll get: {mul(x, y)}")    
elif choice == 4:
    print(f"If we divide {x} and {y}, we'll get: {div(x, y)}")    
elif choice == 5:
    print(f"The exponential of {x} by {y} is: {pot(x, y)}")   
elif choice == 6:
    print(f"The square root of {x} is: {sqr(x)}")
elif choice == 7:
    third = int(input("Insert third number: "))
    results = BAMain(x,y,third)
    print(results)
    print(f"Through bhaskra, the result is: {BAMain(x, y, third)}")
else:
    print("What are you even trying to ask me? I can't do your dishes.")




