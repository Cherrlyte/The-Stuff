import requests as rs
from bs4 import BeautifulSoup as bs
lle = input("O que deseja pesquisar nas noticias?\nEntrada: ")

try:
    res = rs.get(f'https://news.google.com.br/search?q={lle}')
except Exception as err:
    print(f"nah, {err}")
else:
    sup=bs(res.content, 'html.parser')
    search = []
    search.append(lle)
    for i in sup.find_all('body'):
        for w in search:
            for pstr in i.stripped_strings:
                if w.upper() in str(pstr).upper():
                    print(f"Sobre {lle}: {pstr}\n")
