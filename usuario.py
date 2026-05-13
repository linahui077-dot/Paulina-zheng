while True:
    print("MENU:")
    print("1-cadastrar")
    print("2-login")
    print("3-sair")

    opcao=input("Escolha uma opção:")
    
    if opcao=="1":
        nome=input("Digite seu nome:")
        senha=input("Digite sua senha:")
        while nome=="":
         print("O nome não pode ficar vazio!")
         nome=input("Digite seu nome novamente:")
        while len(senha)!=6:
         print("A senha deve ter 6 números.")
         senha=input("Digite sua senha novamente:")
        arquivo=open("usuario.txt","a")
        arquivo.write(nome+";"+senha+"\n")
        print("Salvou sucesso")
        arquivo.close()
        print("Usuário.cadastrado!")
    
    elif opcao=="2":
        nome=input("Digite seu nome cadastrado:")
        senha=input("Digite sua senha cadastrado:")
        arquivo=open("usuario.txt","r")
        login=False
        usuario=nome+";"+senha
        for linha in arquivo:
           linha=linha.replace("\n","")
           (f"arquivo:'{linha}'")
           (f"usuario:'{usuario}'")
           if usuario==linha:
            login=True
        arquivo.close()

        if login==True:
            print("Login realizado!")
            while True:
               print("4-buscar video")
               print("04-Mostrar pesquisas")
               print("5-favoritos")
               print("6-Mostrar favoritos")
               print("7-Remover favoritos")
               print("8-curtir vídeos")
               print("9-descurtir vídeos")
               print("0-SAIR")


               opcao2=input("Escolha uma opção:")

               if  opcao2=="4":
                busca=input("Digite o nome do vídeo:")
                arquivo=open("videos.txt","r")
                encontrado=False
                for linha in arquivo:
                 linha=linha.replace("\n","")
                 (f"arquivo:'{linha}'")
                 (f"busca:'{busca}'")
                 if busca==linha:
                  encontrado=True
                  print("Vídeo encontrado!")
                arquivo.close()
                historico=open("historico.txt","a")
                historico.write(nome+";"+busca+"\n")
                historico.close()
                if encontrado==False:
                 print("Vídeo não encontrado!")

               elif opcao2=="04":
                 arquivo=open("historico.txt","r")
                 for linha in arquivo:
                   linha=linha.replace("\n","")
                   if nome in linha:
                     print(linha)
                 arquivo.close()


               elif opcao2=="5":
                  favorito=input("Digite o nome do video para colocar no favorito:")
                  arquivo=open("favorito.txt","a")
                  arquivo.write(nome+";"+favorito+"\n")
                  arquivo.close()
                  print("Favorito adicionado com sucesso!")

               elif opcao2=="6":
                 arquivo=open("favorito.txt","r")
                 vazio=True
                 for linha in arquivo:
                   linha=linha.replace("\n","")
                   if nome in linha:
                    print(linha)
                    vazio=False
                 arquivo.close
                 if vazio==True:
                   print("Voçê ainda não possui favoritos!")

               elif opcao2=="7":
                 remover=input("Digite o vídeo para remover:")
                 arquivo=open("favorito.txt","r")
                 temp=open("temp.txt","w")
                 for linha in arquivo:
                   linha=linha.replace("\n","")
                   if linha!=nome+";"+remover:
                     temp.write(linha+"\n")
                 arquivo.close()
                 temp.close()
                 print("Favorito removido!")
               
                 

               elif opcao2=="8":
                 curtir=input("Digite o vídeo para curtir:")
                 arquivo=open("curtir.txt","a")
                 arquivo.write(nome+";"+curtir+"\n")
                 arquivo.close()
                 print("Vídeo curtido!")

               elif opcao2=="9":
                 descurtir=input("Digite o vídeo para descurtir:")
                 arquivo=open("descurtir.txt","a")
                 arquivo.write(nome+";"+descurtir+"\n")
                 arquivo.close()
                 print("Vídeo descurtido!")

               elif opcao2=="0":
                 print("Saindo...")
                 break

                  
        else:
            print("Usuário ou senha incorretos!")

    elif opcao=="3":
        print("saindo...")
        break
    else:
     print("opção invalida!")





