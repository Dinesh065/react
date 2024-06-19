import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input,setInput] = useState("");   //input state is for storing the input that the user enters
    const [recentPrompt,setRecentPrompt] = useState("");  //recent state is for when we tap the sent button
    const [prevPrompts,setPrevPrompts] = useState("");   //previous state is for storing the history 
    const [showResult,setShowResult] = useState(false);    //show state is for when the boolean data is true than the data will be hidded and result will be shown 
    const [loading,setLoading] = useState(false);   //loading state is for when result is true than loader will be displayed and once we get the data will mark false so that we can show the result
    const [resultData,setResultData] = useState("");   //for displaying our result on the web page

    const onSent = async (prompt) => {
        await run(prompt)
    }


    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider