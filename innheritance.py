class person:
    def __init__(self, fname, lname):
       self.firstname = fname
       self.lastname = lname
       
    def printname(self):
      print(self.firstname, self.lastname)

x = person("john", "doe")
x.printname()

class student(person):
   pass

x = student("mike", "olsen")
x.printname()