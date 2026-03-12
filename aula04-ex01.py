a=int(input("codigo de origem:"))
if 1<=a<=30:
    if a==1:
     print("procedencia eh Sul")
    else:
     if a==2:
        print("procedencia eh Norte")
     else:
        if a==3:
           print("procedencia eh Leste")
        else:
           if a==4:
              print("procedencia eh Oeste")
           else:
              if (a==5)or(a==6):
                 print("procedencia eh Nordeste")
              else:
                 if (a==7)or(a==8)or(a==9):
                    print("procedencia eh sudeste")
                 else:
                    if (10<=a<=20):
                       print("procedencia eh Centro Oeste")
                    else:
                       if (25<=a<=30):
                          print("procedencia eh Noroeste")
else:
   print("produto importado")
              
    
         
