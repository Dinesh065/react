import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input,setInput] = useState("");   //input state is for storing the input that the user enters
    const [recentPrompt,setRecentPrompt] = useState("");  //recent state is for when we tap the sent button
    const [prevPrompts,setPrevPrompts] = useState([]);   //previous state is for storing the history 
    const [showResult,setShowResult] = useState(false);    //show state is for when the boolean data is true than the data will be hidded and result will be shown 
    const [loading,setLoading] = useState(false);   //loading state is for when result is true than loader will be displayed and once we get the data will mark false so that we can show the result
    const [resultData,setResultData] = useState("");   //for displaying our result on the web page

    const delayPara = (index,nextWord) => {
        setTimeout(function () {
            setResultData(prev=>prev+nextWord);
        },75*index)
    }

    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async (prompt) => {

        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        if(prompt !== undefined)
        {
            response = await run(prompt);
            setRecentPrompt(prompt)
        }
        else{
            setPrevPrompts(prev=>[...prev,input])
            setRecentPrompt(input)
            response = await run(input)
        }
        let responseArray = response.split("**");
        let newResponse = "" ;
        for(let i=0;i<responseArray.length; i++)
        {
            if(i==0 || i%2 !==1){
                newResponse += responseArray[i];
            }
            else{
                newResponse += "<b>"+responseArray[i]+"</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray = newResponse2.split(" ");
        for(let i=0;i<newResponseArray.length;i++)
        {
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord+" ")
        }
        setResultData(newResponse2)
        setLoading(false)
        setInput("")

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
        setInput,
        newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider