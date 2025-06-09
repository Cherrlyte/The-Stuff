# Authy! Your local authenticator.
import os, time

logged = "N/A"
users = ["Guest", "Owner"]
passwords = ["", "IAmTheOwner"]

def start():
  os.system("cls")
  print("Welcome to Authy!\n 1. Create New User \n 2. Log In \n 0. Exit")
  print(f"Currently logged in as: {logged}")
  i = int(input("\nOption: "))
  if i == 1:
    os.system("cls")
    create()
  elif i == 2:
    os.system("cls")
    log()
  elif i == 0:
    quit()
  else:
    print("\nWe aint got nunna that!!!!!!!!!!!!!!")
    wait = input("Press enter to return.")
    start()

def create():
    who = input('Please insert your username: ')
    passw = input('Please insert your password: ')
    if input("Please reinsert your password: ") == passw:
        users.append(who)
        passwords.append(passw)
        print(f"'{who}' has been added to the database!")
        wait = input("Press enter to return.")
        start()
    else:
        print("The password in incorrect.")
        wait = input("Press enter to return.")
        start()

def log():
    global logged
    who = input('Please insert your username: ')
    if who in users:
        passw = input('Please insert your password: ')
        for i in range(len(users)):
            if users[i] == who: indexnum = i
        if passw == passwords[indexnum]: # type: ignore
            print(f"Welcome back, {who}!")
            logged = who
            wait = input("Press enter to return.")
            start()
        else:
            print("Password is incorrect.")
            wait = input("Press enter to return.")
            start()
    else:
        print("This user could not be found!")
        wait = input("Press enter to return.")
        start()

start()