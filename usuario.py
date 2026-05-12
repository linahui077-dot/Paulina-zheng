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
               print("5-favoritos")
               print("6-sair")


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
                if encontrado==False:
                 print("Vídeo não encontrado!")

                elif opcao2=="5":
                  favorito=input("Digite o video para colocar no favorito:")
                  arquivo=open("favorito.txt","a")
                  print("Depósito realizado com sucesso!")
                  arquivo.close()
                  
        else:
            print("Usuário ou senha incorretos!")

    elif opcao=="3":
        print("saindo...")
        break
else:
  print("opção invalida!")





