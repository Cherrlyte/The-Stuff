function bmiCalc(){
  const height = document.getElementById('bmih').value
  const weight = document.getElementById('bmiw').value
  document.getElementById('bmif').innerHTML = `BMI Final: ${weight/((height/100)**2)}`
}

function iHateThisButton(){
  const stupid = `Quem um dia irá dizer que não existe razão
Nas coisas feitas pelo coração
E quem me irá dizer que não existe razão
Eduardo abriu os olhos, mas não quis se levantar
Ficou deitado e viu que horas eram
Enquanto Mônica tomava um conhaque
No outro canto da cidade, como eles disseram
Eduardo e Mônica um dia se encontraram sem querer
E conversaram muito mesmo pra tentar se conhecer
Carinha do cursinho do Eduardo que disse
Tem uma festa legal e a gente quer se divertir
Festa estranha, com gente esquisita
Eu não tô legal, não aguento mais birita
E a Mônica riu e quis saber um pouco mais
Sobre o boyzinho que tentava impressionar
E o Eduardo, meio tonto só pensava em ir pra casa
É quase duas e eu vou me ferrar
Eduardo e Mônica trocaram telefone
Depois telefonaram e decidiram se encontrar
O Eduardo sugeriu uma lanchonete
Mas a Mônica queria ver um filme do Godard
Se encontraram então no Parque da Cidade
A Mônica de moto e o Eduardo de camelo
O Eduardo achou estranho e melhor não comentar
Mas a menina tinha tinta no cabelo
Eduardo e Mônica era nada parecido
Ela era de Leão e ele tinha dezesseis
Ela fazia medicina e falava alemão
E ele ainda nas aulinhas de inglês
Ela gostava do Bandeira e do Bauhaus
De Van Gogh e dos Mutantes
De Caetano e de Rimbaud
E o Eduardo gostava de novela
E jogava futebol-de-botão com seu avô
Ela falava coisas sobre o Planalto Central
Também magia e meditação
E o Eduardo ainda tava no esquema
Escola, cinema, clube, televisão
E, mesmo com tudo diferente
Veio meio de repente
Uma vontade de se ver
E os dois se encontravam todo dia
E a vontade crescia
Como tinha de ser
Eduardo e Mônica fizeram natação, fotografia
Teatro e artesanato e foram viajar
A Mônica explicava pro Eduardo
Coisas sobre o céu, a terra, a água e o ar
Ele aprendeu a beber, deixou o cabelo crescer
E decidiu trabalhar
E ela se formou no mesmo mês
Que ele passou no vestibular
E os dois comemoraram juntos
E também brigaram juntos muitas vezes depois
E todo mundo diz que ele completa ela e vice-versa
Que nem feijão com arroz
Construíram uma casa uns dois anos atrás
Mais ou menos quando os gêmeos vieram
Batalharam grana, seguraram legal
A barra mais pesada que tiveram
Eduardo e Mônica voltaram pra Brasília
E a nossa amizade dá saudade no verão
Só que nessas férias não vão viajar
Porque o filhinho do Eduardo
Tá de recuperação ah-ah-ah
E quem um dia irá dizer que existe razão
Nas coisas feitas pelo coração
E quem me irá dizer
Que não existe razão`
  const n1 = document.getElementById("name1").value != "" ? document.getElementById("name1").value : "Seu Jão"
  const n2 = document.getElementById("name2").value != "" ? document.getElementById("name2").value : "Tua Prima"
  document.getElementById("ihatethisthing").innerHTML = `${stupid.replaceAll("Eduardo", n1).replaceAll("Mônica", n2)}`
}