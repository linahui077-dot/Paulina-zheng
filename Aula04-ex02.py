a=int(input("Digite numero a:"))
b=int(input("digite numero b:"))
c=int(input("Digite numero c:"))
if (a==b)and(b==c):
    print(f"{a}={b}={c}")
else:
    if (a<b<c):
        print(f"{a}<{b}<{c}")
    else:
        if (b<c<a):
            print(f"{b}<{c}<{a}")
        else:
            if (c<b<a):
                print(f"{c}<{b}<{a}")
            else:
                if (a<c<b):
                    print(f"{a}<{c}<{b}")
                else:
                    if (b<a<c):
                        print(f"{b}<{a}<{c}")
                    else:
                        if (c<a<b):
                            print(f"{c}<{a}<{b}")
                           