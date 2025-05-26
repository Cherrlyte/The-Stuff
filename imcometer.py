#Test Bench

def imc(weight, height):
    return (weight / height**2)

print("Let's get this over with.")
w = float(input("How much do you weigh (kg): "))
h = float(input("How tall are you (m): "))
im = imc(w, h)

print(f"Your BMI is {round(imc(w, h), 2)}.")
if im < 17:
    print("Hah, stick.")
if im > 17 and im < 18.4:
    print("You're skinny, like a stick. (Level 1 Skinny)")
elif im > 18.4 and im < 24.9:
    print("You're actually pretty great! Good job! (Adequate)")
elif im > 24.9 and im < 29:
    print("You're almost fat.")
else:
    print("You're fat. Just like that.")