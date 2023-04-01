# Now that we have a conditional

    -if this conditional were to handle large amounts of data
    ,it will cause a delay

    e.g

      const isEven = () => {
        let i
        //Delay
        while(i < 200000000000000000) i++
        return counterOne % 2  === 0
    }

# why the delay

    -Now you notice a delay when you click add 1
    -there is also a delay when you click add 2 because the whole component gets re-render and also re-creating the isEven function

# Now to handle this delay

# useMemo .... to stop the delay in the add 2 ..counterTwo

    -A hook that will only recompute only when the cashed values when one of the dependencies have changed
    -similar to how usecallback works

# .................all this will work for the add 2..........................

    const isEven = useMemo(() => {
        let i
        //Delay
        while(i < 200000000000000000) i++
        return counterOne % 2  === 0
    },[counterOne])

# how it works

    -react uses the cashe value from the previuos rendered and compares with the current one ... if they are thesame , it does not re-render anymore ... that's why the delay doesn't affect counterTwo anymore

# ............................................

# useCallback ... cashes the provided function instance itself

# useMemo .... invokes the provided function and cashes it's result














