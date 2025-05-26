import math

class Fuel():
	manu = "HLCHMI"
	casmat = "Zirncoium/Copper Alloy"
	def __init__(self, ele, short, TPPR, SL):
		self.element = ele
		self.short = short
		self.TPPR = TPPR
		self.SL = SL
		if SL < 1:
			self.SLF = "Extremely Unsafe"
		elif SL > 1 and SL < 5:
			self.SLF = "Unsafe"
		elif SL > 5 and SL < 7:
			self.SLF = "Moderate"
		elif SL > 7 and SL <= 10:
			self.SLF = "Safe"
		else:
			self.SLF = 'Passive/Weak'
	def __str__(self):
		return(f"{self.short} Fuel Rod\n{self.element}\nAverage {self.TPPR}MW per Rod\n{self.casmat} by {self.manu}\nSafety level of {self.SL} for {self.SLF.upper()}")

class Reactor():
  def __init__(self, name, rodc, fuel, opert):
    self.fuel = fuel
    self.name = name
    self.rcount = rodc
    self.operator = opert
    self.age = 0
    self.MTPWR = (self.fuel.TPPR * self.rcount)
    self.ETPWR = math.floor(self.MTPWR/1.3)
  
  def __str__(self):
    return (f"HLC-{self.MTPWR} Boiling Water Reactor\n{self.rcount} {self.fuel.short} Fuel Rods\nRated for {self.ETPWR}MW\nOperated by {self.operator}")
   
  def SafetyCheck(self):
    print(f"raktor is sef :)")

u233 = Fuel("Highly Enriched Uranium-233", "HEU-233", 150, 4)
print(u233)
u1 = Reactor("Kepler", 25, u233, "Symtech")
print(u1)