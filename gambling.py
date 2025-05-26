import random, os, time
money = 1500

def start(mone):
    money = mone
    random.seed()
    print("\nWelcome to gamblingwebsite.com!")
    print(f"You have: ${money}")
    print("Press any key to gamble. (Every bet is $15)")
    input()
    gamble(money)
    
def gamble(mon):
    mon -= 15
    randomns = [0]*6
    for i in range(len(randomns)):
        random.seed()
        f = random.randint(1, 60)
        randomns[i] = f
        for o in range(5):
            for l in range(len(randomns)):
                if f == randomns[l]:
                    randomns[l] = random.randint(1, 60)
        
    print("The numbers have been rolled, good luck!")
    choice = [0]*6
    for l in range(len(choice)):
        choice[l] = int(input(f"Number {l+1}: "))
    print("\nNow let's see the results!")
    print("Your numbers:")
    for i in (choice):
        print(i, end=" ")
    print("\nOur numbers: ")
    time.sleep(2)
    for i in randomns:
        print(i, end=" ")
    correct = 0
    for i in range(len(choice)):
        if choice[i] == randomns[i]:
            correct += 1
    if correct == 6:
        print("\nYou won!")
        mon += 25
    else:
        print("\nYou lost :(")
    start(mon)
    
    
start(1500)