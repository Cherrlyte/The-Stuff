import random
print("GAMBLE TIME NONSTOP!")
guess = 0
select = 1532487234
money = 1515

while guess != select:
    money -= 15
    print(f"\nYou have: ${money}")
    guess = int(input("Number from 1-20: "))
    random.seed()
    select = random.randint(1, 20)
    if guess == select:
        print("\nYou're right! Double the money for you!")
        money += 30
    else:
        print(f"\nWRONG. IT WAS {select}")