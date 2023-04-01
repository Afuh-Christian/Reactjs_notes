## this is needed when you pass a setState as props

-when you call the setState in the child component ... all the components are being rerendered ... this can cause perfomance issues

-so we need to be able to cause re-render only to the Parent and child component that are involve in the setState update

# Now we can useCallbackHook

we can wrap the app with

# React.Memo ...not a hook

    this is a higher order component that will prevent a functional component from being re-rendered if :
        -It's props or state do not change

# In this example ... Userefapp is not supposed to be rerendered

const Userefapp = () => {
console.log("Useref App")
return (<>
<br/>
<h1>UseRef</h1>
<div>
<FocuInput/>
</div>

    </>

)
}

export default React.memo(Userefapp)

# now if we have a function in the Parent that is related to another child component

-when the parent component is being rerendered , all functions are now being recreated .. so the props that were being passed to the other child is recreated so that child component also rerenders

const Parent = () => {
console.log("parent")

    const[value , setValue] = useState(false)

    const[othervalue, setothervalue] = useState(false)

# ................................................

    function SetAlter(){
      setothervalue((prev) => {
        return !prev
      })
    }

# ................................................

return (
<div> <h1>useCallback/React.memo</h1>

        <p>{value === false && <>False</> || <>True</>}
        </p>
        <p>{othervalue === false && <>False</> || <>True</>}
        </p>



        <Child setValue={setValue}/>

        <NotRenderChild SetAlter={SetAlter}/>
    </div>

)
}

export default React.memo(Parent)

# now we need to use the useCallback to prevent NotRenderChild from rendering

# usecallBack Hook

    -It will return a memoized version of a callback function that only changes if one of the dependencies has changed

    -it will cashe the function and return it if the function is not implemented

# why use callbacks

    -It is useful when passing callback to optimized child components that rely on reference equality to prevent unnecessary renders

# useCallback()

    -callback function as first parameter
    -array of dependencis as second parameter

    useCallback(()=>{},[])


# now 

# ................................................  
 const SetAlter = useCallback(()=>{

      setothervalue((prev) => {
        return !prev
      })

  },[othervalue])
# ..........................................