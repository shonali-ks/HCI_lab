import tkinter as tk


root = tk.Tk()

animals1=["dog","cat","cow"]
animals2=["horse","monkey","lion"]
animals3=["tiger","bear","gorilla"]

def button_pressed():
    button.destroy()
    label = tk.Label(root, text=" Dog\n\nCat\n\nCow\n\nHorse\n\nMonkey\n\nLion\n\nTiger\n\nBear\n\nGorilla\n\n")
    label.pack()
    root.after(8000, label.destroy)
    root.after(8000,canvas1.pack)

button = tk.Button(root, text="Press Button to see the list", command=button_pressed)
button.pack()


canvas1 = tk.Canvas(root, width = 400, height = 300)


entry1 = tk.Entry (root) 
canvas1.create_window(200, 140, window=entry1)

def getSquareRoot ():  
    x1 = entry1.get()
    label = tk.Label(root, text= "Enter all the animals you remember in the form(small cases)- animal1,animal2,..")
    label.pack()
    x=x1.split(",")
    first = 0
    middle = 0
    last = 0
    for i in x:
        if i in animals1:
            first=first+1
        elif i in animals2:
            middle=middle+1
        elif i in animals3:
            last=last+1
        else:
            x.remove(i)
    label2 = tk.Label(root, text="Following are the correct animal names\n")
    label2.pack()
    label1 = tk.Label(root, text=x)
    label1.pack()
    label3 = tk.Label(root, text="Analysis of first, middle and last respectively(percentage):-\n ")
    label3.pack()
    label4 = tk.Label(root, text=first*100/3)
    label4.pack()
    label5 = tk.Label(root, text=middle*100/3)
    label5.pack()
    label6 = tk.Label(root, text=last*100/3)
    label6.pack()
    canvas1.destroy()
    entry1.destroy()
    button1.destroy()
    
button1 = tk.Button(text='See the list', command=getSquareRoot)
canvas1.create_window(200, 180, window=button1)

root.mainloop()