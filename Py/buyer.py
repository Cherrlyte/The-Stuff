moolah = 15000
debt = 0
manager = False
items = ["Hot-Dawg X", "X-Salad", "The Baconator", "Good 'Ol Toast", "Pipzie Pop", "CANDU Pressurized Water Reactor", "RBMK-1000", "Samsung Galaxy Pocket Neo"]
prices = [4, 4.5, 5, 2, 1.5, 6000000000, 3740000000, 254]

import os
from time import sleep

def manmenu():
    print("Seems like you're the manager... oh well, here are some extra options for ya!")
    print("WIP, redirecting to customer prompt.")
    normalmenu()
    
def normalmenu():
    os.system("cls")
    print("Check out the menu and place down your order!")
    menu()
    what = int(input("\nChoose your item: "))
    buy(what)

def start():
    print('Welcome to the "Stomach Destroyer"! Where all you eat will feed you forever!')
    sleep(1)
    if manager:
        manmenu()
    else:
        normalmenu()

def menu():
    for i in range(len(items)):
        print(f"{i+1}. {items[i]} -- ${'{0:,}'.format(prices[i])}")

def buy(what):
    global debt
    try:
        items[what-1]
    except:
        print("That don't exist here m'boy!")
        normalmenu()
    else:
        print(f"You picked the {items[what-1]}, great choice!")
        many = int(input("Insert your quantity: "))
        print(f"You're getting {many} {items[what-1]}s, is that correct?")
        response = input("Yes or No: ")
        str.casefold(response)
        if response == "yes" or response == "y":
            debt += prices[what-1]*many
            print(f"That'll be ${'{0:,}'.format(debt)}!")
            print("Anything else? ")
            response = input("Yes or No: ")
            if response == "yes" or response == "y":
                normalmenu()
            else:
                print("Have a great day!")
        else:
            normalmenu()

start()