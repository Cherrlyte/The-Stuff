import string
import time
import os

temp = ""
prev = ""
char = string.printable
final = "Hello World" + chr(111111)
for i in final:
  if i.isprintable and not i.isprintable == False:
    for x in range(0, 1114111):
      print(f"{temp + chr(x)}", end="\n")
      if chr(x) != i:
       time.sleep(.02)
      else:
        temp += chr(x)
        break
    time.sleep(len(temp)/2)
  else:
    print("WRONG!")
    break
print(f"Final: {final}\nResult: {temp}")