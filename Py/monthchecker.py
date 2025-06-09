monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
got = int(input("Please input your month of choice: "))

if got > 12 or got < 1:
    print("That's not a month, that's bogus!")
else:
    print(f"Your month ({got}) is {monthlist[got-1]}")
    


