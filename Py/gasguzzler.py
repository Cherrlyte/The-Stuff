#Test Bench

ppl = 7.85

print("It seems you want to see how much money you'll lose after this trip.")
print("No worries! I'm here for ya.")
dis = float(input("Insert how far away you went (km): "))
kpl = float(input("Insert how much gas your car guzzles (km/l): "))
print("")

if kpl < 6:
    print(f"Are you driving a cruise ship? What kind of car does {kpl}km/l?")
    print("")

print(f"It seems you used {round(dis / kpl, 2)}L today.")
print(f"That means you just lost ${round((dis / kpl)*ppl, 2)}! Congrats!")
print("Now go reflect on that.")