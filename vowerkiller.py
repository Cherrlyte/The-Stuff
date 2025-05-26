word = 'Honestamente, quem vai ganhar, vai perder, quem vai perder, também perde, o resumo é, não se ganha, apenas se perde.'

def nomore(x):
    hitlist = "áaeéiíoóuúAÁEÉIÍOÓUÚ"
    for i in hitlist:
        x = x.replace(i, "nao")
    return x
        

print(nomore(word))
        
    
