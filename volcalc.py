# Volume Calculator.
import math, os

def Cube(w, h, d): # A function, because why not?
    return (w*h*d) # Return the result. (a*b*c)
def Cyl(r, h):
  return(math.pi*(r**2)*h)
def Cone(r, h):
  return(((1/3)*math.pi*(r**2)*h))
def Pyra(ba, h):
  return((1/3)*ba*h)

print("Welcome to the volume calculator!") # Filler.
print("Choose your option:\n1-Cube\n2-Cylinder\n3-Cone\n4-Pyramid")
choice = int(input())
os.system('cls')
if choice == 1:
	# Inputs:
	width = float(input("Width: "))
	height = float(input("Height: "))
	depth = float(input("Depth: "))
	# ---------------------------
	print(f"The volume is {Cube(width, depth, height)}m²") # Print it out!
elif choice == 2:
	# Inputs:
	radius = float(input("Radius: "))
	height = float(input("Height: "))
	# ---------------------------
	print(f"The volume is {round(Cyl(radius,height), 2)}m²") # Print it out!
	print("Reminder: The result is rounded to the second decimal!")
elif choice == 3:
  # Inputs:
	radius = float(input("Radius: "))
	height = float(input("Height: "))
	# ---------------------------
	print(f"The volume is {round(Cone(radius,height), 2)}m²") # Print it out!
	print("Reminder: The result is rounded to the second decimal!")
elif choice == 4:
  # Inputs:
	base = float(input("Base Area: "))
	height = float(input("Height: "))
	# ---------------------------
	print(f"The volume is {round(Pyra(base,height), 2)}m²") # Print it out!
	print("Reminder: The result is rounded to the second decimal!")
else:
  print("We don't do that. Restart!")
  quit()

