# class person:
#     def __init__(self, name):
#        self.name = name
       
#     def greet(self):
#       print("Hello,my name is " + self.name)

# p1 = person("emil")
# p1.greet()
# class person:
#     def __init__(self, name):
#        self.name = name
       
#     def greet(self):
#       print("Hello,my name is " + self.name)

# p2 = person("Deep")
# p2.greet()
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