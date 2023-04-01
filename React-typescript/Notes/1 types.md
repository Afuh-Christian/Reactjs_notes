# Custom types .... we can use interface or type 

#  make P1 to be a type .. Number
interface P1 extends Number{} 
or 
type P1 =  Number  


# .... 
interface P {
    name: string ; 
}

type P = {
    name: string ; 
}


# type : Is of something called alias ... 
- alias is of two types
    - type 
    - interface



# Inheritance in type .. 

type X = {
    x: string;
}

type Y = X & {
    y:number
}


- Now Y has properties .. x , y 

# type can inherite interface and vise versa

- interface inheriting type
type X = {} 
interface X1 extends X {}


 - type inheriting interface
interface Y {}
type Y1 = Y & {} 
