a=int(input("lado a:"))
b=int(input("lado b:"))
c=int(input("lado c:"))
if(a<b+c)and(b<a+c)and(c<b+a):
    if(a==b)and(b==c):
        print("triagulo equilatero")
    else:
        if (a==b)or (a==c) or(b==c):
            print("triangulo isoceles")
        else:
            print("triangulo escaleno")
else:
    print("n eh u triangulo")
    
