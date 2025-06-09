# List Creator 2022

import os, time
lis = ["Welcome to the List Toolbox!", "These are example entries, feel free to do whatever!"]

def start():
  os.system("cls")
  print("Welcome to the list toolbox!\n 1. Append \n 2. Remove \n 3. View List \n 4. Clear List\n 5. Modify Item\n 6. Read from List File\n 7. Save to List File\n 0. Exit")
  i = int(input("Option: "))
  if i == 1:
    os.system("cls")
    append()
  elif i == 2:
    os.system("cls")
    remov()
  elif i == 3:
    os.system("cls")
    check()
  elif i == 4:
    os.system("cls")
    lis.clear()
    print("List cleared!")
    wait = input("Press enter to return.")
    start()
  elif i == 5:
    os.system("cls")
    mod()
  elif i == 6:
    os.system("cls")
    read()
  elif i == 7:
    os.system("cls")
    save()
  elif i == 0:
    save()
    quit()
  else:
    print("\nWe aint got nunna that!!!!!!!!!!!!!!")
    wait = input("Press enter to return.")
    start()

def append():
  what = input('Please insert whatever you want to append: ')
  lis.append(what)
  print(f"'{what}' has been added to the list!")
  wait = input("Press enter to return.")
  start()
    
def remov():
  which = int(input("Insert the number of the item to be removed: "))
  try: 
    remtgt = lis[which]
    del lis[which]
  except:
    print("Item not found or invalid, returning...")
  else:
    print(f"Item '{remtgt}' removed!")
  wait = input("Press enter to return.")
  start()

def check():
  if len(lis) == 0:
    print("You don't have anything on your list.")
  else:
    print("The items on your list are: ")
    for i in range(len(lis)):
      print(f"{i}. {lis[i]}")
  wait = input("Press enter to return.")
  start()

def mod():
  x = int(input("Select the item you wish to modfiy: "))
  sel = lis[x]
  print(f"You are modifying '{sel}':")
  lis[x] = input()
  print(f"'{sel}' is now '{lis[x]}'")
  wait = input("Press enter to return.")
  start()
  
def read():
  global lis
  try:
    y = open("listfile.txt", "r")
  except Exception as s:
    print(f"We can't. {s}")
    time.sleep(2)
    start()
  else:
    lis = eval(y.read())
    print("Done!")
    y.close()
    time.sleep(2)
    start()
    
def save():
  try:
    y = open("listfile.txt", "w")
  except Exception as s:
    print(f"We can't. {s}")
    time.sleep(2)
    start()
  else:
    y.write(str(lis))
    print("Done!")
    y.close()
    time.sleep(2)
    start()
read()
start()