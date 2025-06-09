# Diesel Generator
# neat

from time import sleep
from random import seed, randint
import math, os
seed()

fuel = 1500 #1500L
rpm = 0
trq = 2500
fuelcm = 50 #50L/m
pi = math.pi
pwr = 0
pwrl = 1	
buffr = 1
buffrm = 14500000

buffr = 0

while True:
	if fuel > (fuelcm / 60):
		rpm = randint(1800, 2100) # Randomize RPM
		pwr = (((2*pi*rpm*trq) / 0.85) / 60)*pwrl # (((2 x Pi x RPM x Torque) / Efficiency) / 60 (kW/m to kW/s)) * Power Level (100-0%)
		fuel = fuel - (fuelcm / 60) # FCpM / 60 == FCpS
		os.system('cls')
		print("Garisson EDG Systems\n")
		print(f"Generated Power: {math.floor(pwr) / 1000}kW") # Print generated power.
		print(f"Generator Output: {round(((pwr/60)*0.85) /1000, 2)}kWh")
		print(f"Buffer Charge: {round((buffr/buffrm)*100, 2)}% ({round(buffr/1000, 2)}kWh)") # Print generated power.
		print(f"Fuel Level: {round(math.floor(fuel) / 15, 2)}% ({round((fuel / (fuelcm/60))/60, 1)} min. Remaining)") # Print fuel percentage.
		if buffr < buffrm * 0.85:
			buffr += (pwr/10)*0.85 # (Power / 10 (conversion)) * Efficiency (85%)
		else:
			buffr = buffr
		sleep(1) # Wait a second... literally.
	else:
		print("No fuel!")
		quit()
	

