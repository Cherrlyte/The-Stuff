# THEHWHEHsgsgdafgdfagDFGFADGIOADHGIUSDHGUSHDIUGHDSOUGJDF

# Variables
intn = 1
string = "AAAAAAAAAAAAAAAAAAA"
floatn = 1.111
booln = True
nonexistent = None

#Operators
## Addition
print(1+1)
## Subtraction
print(1-1)
## Multiplication
print(1*1)
## Division
print(1/1)
## Comparing
print(1>1)
## Negation
print(not 1>1)

# Data Handlers
lis = [1,'a',2,3,4,'b']
tup = (intn,'b',2,4,5)
dictionary = {"index": intn, "piss": "k"} # In the old days, we called dicts JSON
lis.pop(3) # Removes item based on index
lis.remove("a") # Removes item based on dict/value
lis.append("EEEE") # Appends item to end of list
print(lis)
print(lis[2])

# Dicts (Part II)
ourdict = {
  "name": "Question",
  "age": 2,
  "type": int
}
print(ourdict['age'])

# Conditional
if 1 > 2:
  print("1 is somehow bigger than 2. Call the FBI")
elif 1 > 5:
  print("WHY is ONE BIGGER THAN FIVE")
else:
  print("Math proves itself again, 1 isn't bigger than two OR five")

# Function
def Add(a, b):
  return a+b
print(Add(5,6))

# Classes

class Crass:
  def __init__(self,name,type):
    self.name = name
    self.type = type
  def printt(self):
    return f"I am a {self.name} of {self.type} type"
  
new = Crass("Box", "Boxn't")
print(new.printt())