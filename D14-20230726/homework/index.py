userDtails = [{
    "name" : "saravana",
    "e_mail" : "saravana@gmail.com",
    "password" : "saravan@123",
    "hobbies":["cricket","chess","volly"]
},
{
    "name" : "benish",
    "e_mail" : "benish@gmail.com",
    "password" : "benish@123",
    "hobbies":["cricket","chess","volly"]
},
{
    "name" : "kabeesh",
    "e_mail" : "kabeesh@gmail.com",
    "password" : "kabeesh@123",
    "hobbies":["cricket","chess","volly"]
},
{
    "name" : "naathan",
    "e_mail" : "naathan@gmail.com",
    "password" : "naathan@123",
    "hobbies":["cricket","chess","volly"]
},
{
    "name" : "ss",
    "e_mail" : "ss",
    "password" : "ss",
    "hobbies":["cricket","chess","volly"]
}]

'''log_in_or_register=input("enter log in or register:")

# def e_mail(a,b):
#     for e
# for email in userDtails:
#     for mail_name in email["e_mail"]:
#         if log_in_mail==mail_name:
#                 print(email["name"])
#         #for pass_name in email["password"]:    
#          def userDtails_of(a,b):
#             # if log_in_mail==mail_name:
            #     if log_in_pass==pass_name:
            #         confirm_pass=input("enter:")
            #         if confirm_pass==pass_name:
            #             print(email["name"])
def login(userDtails):     
    log_in_mail=input("enter mail:")
    log_in_pass=input("enter pass:")

    for x in userDtails:
        if log_in_mail!=x["e_mail"]:
            print("wrong mail")
        
              
            if log_in_pass!=x["password"]:          
                print("wrong pass") 
            else:
                pass   
        elif x["e_mail"]==log_in_mail and x["password"]==log_in_pass:
            print("you log in succusfull,user name is:",x["name"])
            break             
           # break        
   # else:
    #    print("wrong mail or pass")            

def register(userDtails):
    enter_name=input("enter name:")
    enter_e_mail=input("enter mail:")
    enter_password=input("enter pass:")
    confirm_pass=input("enter confirm pass:")
    if confirm_pass==enter_password:
        userDtails.append({"name":enter_name,"e_mail":enter_e_mail,"password":enter_password})
        print("registration succesfull")
        print(userDtails)
if log_in_or_register=="log in":
    login(userDtails)
elif log_in_or_register=="register":
    register(userDtails)  '''
email=input("enter mail:")
pass_word=input("enter pass:")
def Details(userDtails):
    for users in userDtails:
        if (users["e_mail"]==email):
            if (users["password"]==pass_word):
                print(users.update({"logIn":True}))
                print(users)  
                loginuser()
        else:
            print(users.update({"logIn":False}))   
            print(users)  
        def loginuser():
            for logged in users:
                if logged["logIn"]==True:
                    print(logged["name"],logged["e_mail"],logged["hobbies"])                      
Details(userDtails)            