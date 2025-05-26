import math
times = int(input("Insert the peak of your vertical pyramid: "))
for l in range(times):
    x = "*"*l
    print(x)
for l in range(times-2, 0, -1):
    x = "*"*l
    print(x)    
    