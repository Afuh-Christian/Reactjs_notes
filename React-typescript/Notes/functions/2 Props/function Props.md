# usestate function 


interface Props {
    todos: string;
    setTodo: Dispatch<SetStateAction<string>>;
}


# Normal function 

interface Props {
    todos: string;
    handleAdd: () => void;
}


# full code ... 
interface Props {
    todos: string;
    setTodo: Dispatch<SetStateAction<string>>;
    handleAdd: () => void;
}
