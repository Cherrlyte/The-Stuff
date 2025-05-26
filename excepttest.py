import os, time
while True:
    try:
        age = int(input("O quão velho és?\nDigite aqui: "))
    except:
        print("Isso não é um nùmero, favor tente novamente.")
        time.sleep(.8)
        os.system("start https://tinyurl.com/m4cz7c2d")
        continue
    else:
        if age < 0:
            print("Estas de brincadeira com minha cara.")
            time.sleep(.8)
            os.system("start https://tinyurl.com/4v6mjrpp")
        elif age == 0:
            print("Eres um feto, despeja-se.")
        elif age > 0 and age <= 10:
            print("Eres um criançote, despeja-se.")
        elif age > 10 and age <= 20:
            print("És um adolescente, Olá!")
        elif age >= 21 and age < 64:
            print("És um adulto, Olá!")
        else:
            print("Estas bem velho não? Olá mesmo assim!")
        break
    