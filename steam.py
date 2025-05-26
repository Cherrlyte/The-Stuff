import os, math, time, keyboard

#Reactor Related
thrmpwr = 65
cdrainvalve = 0
presschange = 0

#Condenser Related
csteampress = 0
condpress = 0
condtemp = 0

#Deaerator Related
DAtemp = 0
DApress = 0
DAwater = 0

#Turbine Related
tsteampress = 0
tflowrate = 0

def Produce():
   global csteampress
   global thrmpwr
   global presschange
   pressco = csteampress * .15 + 1
   presschange = max((thrmpwr / 100 * 600 - 100), 0) * .3 / pressco

   if (thrmpwr / 100 * 600 - 100) > 0:
       csteampress += presschange / 500    

def Turbining():
   global csteampress
   global tsteampress
   csflowrate = Flow(csteampress, tsteampress, (cdrainvalve))
   csteampress -= csflowrate
   if csteampress < 0:
       csteampress = 0
   tsteampress += csflowrate

def stot():
   global tflowrate
   global tsteampress
   tflowrate = Flow(tsteampress, 0.101325, 10)
   tsteampress -= tflowrate
   if tsteampress < 0:
       tsteampress = 0

def Flow(press, facpress, drain):
   dens = (0.251560 + (18.2339 - 0.251560) * press / 6.9)
   sgrav = dens / 1000
   cond_press = 4.2508
   diffpress = press - (cond_press + facpress)
   return math.sqrt((abs(diffpress) / sgrav)) * drain / 10000

def DAquota():
   global DAtemp
   global DApress
   global DAwater

   degas = 0.1
   watermin = 0
   watermax = 100
   fwpumpc = 0.5

   DApress += (tflowrate * degas) * 0.001
   DAtemp += (tflowrate * degas) * 0.01
   fwflow = DApress * fwpumpc
   DAwater += tflowrate - fwflow

   if DAwater < watermin:
       DAwater = watermin
   elif DAwater > watermax:
       DAwater = watermax

def Condeser():
   global condpress
   global condtemp
   coolingrate = 500
   htc = 0.001
   Mcond_press = 0.001

   sinput = tflowrate

   condpress += sinput * 0.001
   if condpress < Mcond_press:
       condpress = Mcond_press

   condtemp += sinput * htc * (DAtemp - condtemp)

def Generate():
   k = 1000
   mpwr = tflowrate * k * tsteampress * .90
   gpwr = mpwr * .90
   return gpwr

while True:
   Produce()
   Turbining()
   stot()
   DAquota()
   Condeser()

   os.system("cls")
   print("Welcome to the ShitArse Power Generating Station!\nPlease Have the following data:\n")
   print(f"Core Thermal Power: {thrmpwr}%")
   print(f"Steam Pressure(S|E): {round(csteampress, 2)}kPa | {round(tsteampress, 2)}kPa")
   print(f"Turbine Steam Inlet: {round(Flow(csteampress, tsteampress, cdrainvalve), 3)}kg/s")
   print(f"Turbine Steam Outlet: {round(tflowrate, 3)}kg/s")
   print(f"Generated Power: {round(Generate(), 2)}kW")
   print(f"Core Outlet Valve: {cdrainvalve}%")

   if keyboard.is_pressed("e"):
       if (cdrainvalve + 10) < 110:
           cdrainvalve += 10
   elif keyboard.is_pressed("q"):
       if (cdrainvalve - 10) > -10:
           cdrainvalve -= 10

   time.sleep(1)