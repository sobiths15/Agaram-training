# lists=[3,2,4,3,4,4,4,8,7,7,7,8,1,1,44,44,"ss","ss","ss","s","s",0.4,0.4,True,True]
# duplicate=[]
# for i in range(1,len(lists)):
#     if lists[i]==lists[i-1]:
#         if lists[i] not in duplicate:
#             duplicate.append(lists[i])
# print(duplicate)

# num_1=35
# num_2=4
# #addition=num_1+num_2
# #print(num_1+num_2)
# def maximum(a,b):
#     if a>b:
#         return a
#     else:
#         return b 
# print(maximum(num_1,num_2))


# def fact(num):
#     number=1
#     for i in range(2,num+1):
#         number=number*i
#         print(number)
# num=int(input("number"))
            
# fact(num)  
# a=5
# if a==6:
#     pass
# else:
#     print(False)    
sentence = input("Enter sentence: ")
longest = max(sentence.split())
long_word=len(longest)
print("Longest word is: ",long_word)

# import itertools
# def findallpair(l,s):
#     #creating combinations of elements of size 2 i.e a pair
#     for i in itertools.combinations(l,2):
#             if(sum(i)==s):
#                 print(i)
# #list containing elements in unsorted manner                
# list_1=[1,4,7,-5,9,3]
# #given value of sum
# summ=int(input("enter:"))
# #function call
# findallpair(list_1,summ)