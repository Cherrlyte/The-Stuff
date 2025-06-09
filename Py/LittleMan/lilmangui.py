import os, time
from tkinter import * # type: ignore
import lilman as lm


# Base Args
lm.convenienceargs['name'] = 'LilMan'
lm.convenienceargs['username'] = "User"
lm.convenienceargs['cli'] = False
name = lm.convenienceargs['name']
username = lm.convenienceargs['username']
addnew = False
history = ''

# Window Args
mwindow = Tk()
mwindow.title(f"{name}, the shitarse chatbot.") # Will be changed when "Name Changed!" is returned.
mwindow.geometry('500x700')
mwindow.grid()


f1 = Frame(mwindow)
f1.grid(row=0, column=0)

identl = Label(f1, text="Insert your shit: ", anchor='center')
identl.grid(row=0, column=0)

entry = Entry(f1)
entry.grid(row=0, column=1)

f2 = Frame(mwindow)
f2.grid(row=1, column=0)
v = StringVar()
Label(f2, textvariable=v, justify='left').grid()

def mainLoop():
  global name, username, history, addnew
  prompt = entry.get()
  history += f'\n{username}: {prompt}'
  v.set(history)
  if addnew:
    lm.saveNew(lm.convenienceargs['previousprompt'], prompt)
    addnew=False
    history += f"\n Got it, let's continue."
    v.set(history)
  #else:
    #answer = lm.getResponse()








mwindow.mainloop()