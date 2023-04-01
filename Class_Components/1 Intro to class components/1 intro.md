# 2  before ....  reasons to use a class component instead of a function component . 
    -State 
    -To hook to different life cycle methods of a component .. 

# LIFE CYCLE METHODS ..
    -Any given component throughout it's lifetime goes through different phases ... 
        -Mounting phase 
            -when the component is created 
        -Updating phase  
            -happens anytime props or state is changed ... 
        -UnMounting phase 
            -when the component is removed ... 

    -With life cycle methods in class components 
        -we can hook into different aspects of each of these phases and run code when neccessary .. 

# AVAILABLE LIFE CYCLE METHODS 
# -Mounting phase 
    -render() 
    -componentDidMount()
# -Updating phase 
    -render() 
    -componentDidUpdate() 
# -UnMounting phase 
    -componentWillUnmount() 


# ..........................................

# render() 
    -It's used to paint elements to the screen 
    -Gets called  : 
        -When component first mounts 
        -Everytime props or state changes 

    