items_list = [
    {'name': 'Apple', 'category': 'Fruits'},
    {'name': 'Carrot', 'category': 'Vegetables'},
    {'name': 'Banana', 'category': 'Fruits'},
    {'name': 'Broccoli', 'category': 'Vegetables'},
]
def group_by_list(list):
    # fruits_list=[]
    # veg_list=[]
    # name={"fruits"}

    # for x in list:
    #     if x["category"]=="Fruits":
    #         fruits_list.append(x["name"])
            
    #     elif x["category"]=="Vegetables":
    #         veg_list.append(x["name"])
    # print("fruits:",fruits_list)
    # print("vegetables:",veg_list)
    for i in list:
        a={}
        if i["category"] not in a:
            a[i["category"]]=[i["name"]]
        else:
            a[i["category"]>c]    





group_by_list(items_list)      '''
# def group_by(lists):
#     fruits=[]
#     vegetables=[]
#     for items in lists:
#         name=items["name"]
#         cat=items["category"]
#         if cat=="fruits":
#             fruits.append(name)
#         elif cat=="vegetables":
#             vegetables.append(name)
#     print(fruits) 
#     print(vegetables)       
#     result.update({"fruits:",Fruits})
# group_by(items_list)''''''
