qtd=int(input("Digite a quantidade de numeros e serem testados:"))
i=1
total_primos=0

while i<=qtd:
    numero=int(input(f"DIgite p numero{i}:"))
    if numero > 1:
        divisor=1
        quantidade_divisores=0
        while divisor<=numero:
            if numero%divisor==0:
                quantidade_divisores=quantidade_divisores+1
                divisor=divisor+1
                if quantidade_divisores==2:
                    total_primos=total_primos+1
                    i=i+1
                    print("Vc digitou",total_primos,"numeros de um total de ",qtd,"numeors")