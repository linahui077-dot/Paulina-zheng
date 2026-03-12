altura=float(input("Digite o seu altura:"))
sexo=input("Digite o seu sexo(M/H):")
m=(62.1*altura)-44.7
h=(72.7*altura)-58
if sexo=="M":
    print("o seu peso ideal eh:",m)
else:
    if sexo=="H":
        print("o seu peso ideal eh:",h)

    