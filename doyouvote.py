age = int(input("O quão velho és tua pessoa?\nResposta: "))

if age < 1:
    print("Estás de brincadeira com minha cara, não estás?")
elif age >= 1 and age < 16:
    print("Não podes votar pois és muito novo.")
elif age < 18:
    print("Podes votar apenas se quiser.")
elif age >= 18 and age < 120:
    print("És obrigado a votar.")
else:
    print("Não podes votar pois estás morto.")