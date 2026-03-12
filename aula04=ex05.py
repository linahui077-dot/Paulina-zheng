c=int(input("digite codigo do produto:"))
if 0<=c<=16:
     print("codigo invalido")
if c==1:
        print("alimento nao perecivel")
else:
    
        if 2<=c<=4:
            print("alimento perecivel")
        else:
            if 5<=c<=6:
                print("classificacao vestuario")
            else:
                if c==7:
                    print("higiene pessoal")
                else:
                    if 8<=c<=15:
                        print("limpeza e utensilios domesticos")
