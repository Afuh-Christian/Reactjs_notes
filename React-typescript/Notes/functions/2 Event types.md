# FormEvent ..... 
- There are many others but this is the most preferable .... 



interface Props {
    todos: string;
    setTodo: Dispatch<SetStateAction<string>>;
    handleAdd: (e:FormEvent) => void;
}