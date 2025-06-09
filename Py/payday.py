# We calculate your pay.
# Based on "List Toolbox", "Authy" and many more.

roles = ["operator", "assistant", "supervisor", "owner"]
origins = [1250, 2000, 3200, 25000]
perc = [0.17, 0.15, 0.09, 1.5]

who = input('Please insert your role: ').casefold()
if who in roles:
    for i in range(len(roles)):
        if roles[i] == who: indexnum = i
    final = origins[indexnum] + (origins[indexnum]*perc[indexnum])
    print(f"\nOriginal Pay: ${origins[indexnum]}")
    print(f"Addition: {perc[indexnum]*100}%")
    print(f"Adjusted Pay: ${round(final)}")
else:
    print("We couldn't find your role in the database, sorry!")