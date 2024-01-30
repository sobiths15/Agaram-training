# i=1
# while(i<6):
#     print(i)
#     i=i+1

#prime number

# num=int(input("num:"))
# if num>1:
#     for i in range(2,num):
#         if num%i==0:
#             print("not prime")
#             break
#     else:
#         print("prime")   
# else:
#     print("not prime")       

#multiplication table

# def mul():
#     num=int(input("num:"))
#     for i in range(1,11):
#         # print(i,"*",num,"=",num*i)
#         print(f"{i}*{num}= {num*i} ")
# mul()

#factorial

# num=int(input("num:"))
# fact=1
# for i in range(1,num+1): 
#     fact=fact*i
# print(fact)

# fibonacci series

# num=int(input("num:"))
# n1=0
# n2=1
# for i in range(num):
#     print(n1)
#     n3=n1
#     n1=n2
#     n2=n1+n3

# swap two numbers without using third variable

# x=10
# y=20
# x,y=y,x
# print("x=",x,"y=",y)

# import datetime
# now=datetime.datetime.now()
# print(now)

# reverse string

# string="sobith"
# print(string[::-1])


# reverse numbers

# num=123452217
# print(str(num)[::-1])

# print 10 to 1

# for i in range(10,0,-1):
#     print(i)

# Amstrong number

# num=int(input("enter num:"))
# num_length=len(str(num))
# armstrong_num=sum(int(digit)** num_length for digit in str(num))
# if num==armstrong_num:
#     print("armstrong number")
# else:
#     print("not armstrong number")

