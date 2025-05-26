# Range Checker
# Checks ranges.

num = 0
with open('range.txt', 'r') as s:
    num = float(s.readline())

if num >= 0 and num < 25:
    print('Between 0 and 25')
elif num >= 25 and num < 50:
    print("Between 25 and 50")
elif num >= 50 and num < 100:
    print("Between 50 and 100")
else:
    print("Not in range!")
    