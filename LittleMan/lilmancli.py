import lilman as lm

importargs = lm.convenienceargs

lm.convenienceargs['name'] = 'LilMan'
print(lm.greetStart())
while True:
  prompt = lm.getPrompt()
  answer = lm.getResponse(prompt)
  print(lm.showResponse(answer))
  if lm.showResponse(answer) == 'Cya!':
    break
