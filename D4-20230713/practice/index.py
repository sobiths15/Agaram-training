rate_of_pizza=500
no_of_pizza =2
extra_toppings=80
no_of_toppings=2
soft_drinks=45
no_of_softdrings=2
biscutis=10
no_of_biscutis=0
delivery_charge=50
gst=((rate_of_pizza*no_of_pizza)+(extra_toppings*no_of_toppings)+(soft_drinks*no_of_softdrings)+(biscutis*no_of_biscutis)+delivery_charge)*0.18
total=(rate_of_pizza*no_of_pizza)+(extra_toppings*no_of_toppings)+(soft_drinks*no_of_softdrings)+(biscutis*no_of_biscutis)+delivery_charge+gst
print(total)