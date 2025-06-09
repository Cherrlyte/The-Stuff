# Imports
import random, os, time

# The Arg guetter
class Default(dict):
    def __missing__(self, key):
        return '{'+key+'}'

# Main Functions
def greetStart(): # The greeting you see when starting the program for the first time.
  return(greetings[random.randint(0, (len(greetings)-1))])

def getPrompt():
  prompt = f"prompt: {input('Prompt: ')}"
  if bListCheck(prompt): return getPrompt()
  else: return prompt

def getResponse(prompt):
  global name
  with open('res.txt', 'a+') as rdata:
    rdata.seek(0)
    while True:
      line = rdata.readline()
      if convenienceargs['cli']:
        if line != "":
          if prompt.lower().replace("prompt: ", "") == "bye":
            return "Cya!"
          elif prompt.lower().replace("prompt: ", "") == "i want to change your name":
            print('What name do you want me to use?')
            while True:
              try:
                new = input("Input: ")
                if bListCheck(new):
                  raise Exception("NO!!!!")
              except: continue
              else:
                convenienceargs["name"] = new
                return 'Name Changed!'
          elif prompt.lower().strip() == line.lower().strip():
            nline = rdata.readline()
            if "~]:" in nline: return nline.format_map(Default(convenienceargs))
        else:
          print("Hmm... it seems I don't know how to answer to that, sorry.")
          while True:
            try:
              new = input("What would you want me to answer when you say that?\nInput: ")
              if bListCheck(new):
                raise Exception("NO!!!!")
            except: continue
            else:
              saveNew(prompt, new)
              return "New Prompt Added!"
      else:
        if line != '':
          if jacc(prompt, line) > 0.3:
            nline = rdata.readline()
            if "~]:" in nline: return nline.format_map(Default(convenienceargs))
          else: convenienceargs['previousprompt'] = prompt; return "idkmatefixthis"


def saveNew(p, n):
  with open('res.txt', 'a+') as rdata:
    rdata.write(f'\n{p}')
    rdata.write(f'\n~]: {n}')

def showResponse(response):
  if response == "Cya!":
    return 'Cya!'
  return(response.replace("~]", convenienceargs['name']))

# Misc Functions
def clear(): os.system('cls') # A function that simplifies clearing the screen.

def bListCheck(word): # A function that simplifies checking the blacklist for the utter horrors users give the chatbot.
  if noblist:
    return False
  else:
    for w in blacklist:
      if w.lower() in word.lower(): print("Oi, you can't do that here!"); return True;

def wait(timew): time.sleep(timew) # A function that simplifies a time.sleep()

def cleanText(t):
  nt = t.lower()
  blist = ["?", ".", ",", ":", "...", "\n", "prompt:", "!"]
  for i in blist:
    nt = nt.replace(i,"")
  return nt

def jacc(o, c):
  o = cleanText(o)
  c = cleanText(c)
  if len(c)<1: return 0
  else:
    kw = 0
    for w in o.split():
      if w in c.split():
        kw += 1
    print(f"{kw/(len(c.split()))}")
    return kw/(len(c.split()))


# Variables
convenienceargs = {'name': 'LilMan', 'username': '', 'cli': True, 'previousprompt': ''}
greetings = [f"Hello! My name is {convenienceargs['name']}.", "Hello!", "Hi!", "Welcome!", "wtf u doing here", "Hai!!!!!!!", "Ello!", "Welcome to Chatbotprogram12421423!", "Can you do Ctrl+C for me?"]
blacklist = ["bitch", "motherfucker", "fucker", "nigger", "nigga", "palmeirense", '~]:']
noblist = False