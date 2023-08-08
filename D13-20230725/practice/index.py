'''fruits=["apple","orrage","grapes"]
#print(fruits)
#add
fruits.append("pineplle")
fruits.insert(1,"dragon")
#fruits[1]="banana"
print(fruits)

row_1=["anish","ss"]
row_2=["aa","sss"]
two_rows=row_1+row_2
print(two_rows)

details={
    "name":"karka",
    "place":"putheri"
}
details["phone"]=1234567890
details["place"]="update putheri"
#details.append("plan":"full stack")
details.update({"plan":"full stack","email":"ss@gmail.com"})
print(details)'''
friends_name_place=[{"name":"sheik mohamad","place":"ervadi","hobbies":["cricket","football","travelling"]},
{"name":"sham","place":"monday market","hobbies":["movies watching","cricket","travelling"]},
{"name":"dharma","place":"thirunelveli","hobbies":["kabadi","running","travelling"]},
{"name":"bobathi","place":"parvathipuram","hobbies":["writing","dancing","travell"]},
{"name":"bowarna","place":"vellamadam","hobbies":["craft","gardenning","drawing"]},
{"name":"shalini","place":"kulachel","hobbies":["reading","dance","drawing"]},
{"name":"renisha","place":"marthandam","hobbies":["music","drawing","gardenning"]},
{"name":"sobith","place":"kaliyakavilai","hobbies":["playing","movies watching","travel"]}]
friends_name_place.append({"name":"sobith","place":"kaliyakavilai","hobbies":["playing","movies watching","travel"]})
print(friends_name_place)

''' for friends in friends_name_place:
     friends["hobbies"].append("coding")
 print(friends_name_place)
 hobbies_detail=input("enter hobbie") 
 for friend in friends_name_place:
     for fri in friend["hobbies"]:
         if hobbies_detail==fri:
            print(str.split(friend["name"]))'''
            
for x in friends_name_place:
    for y in x:
        # if y=="drawing":
        #     print("eligible")
        # else:
        #    print("not eligible")  
        print(y[name])              