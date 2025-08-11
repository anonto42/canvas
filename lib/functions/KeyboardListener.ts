import { useDispatch } from "react-redux";
import { setSelectedTool, setSelectedToolToArrow, setSelectedToolToDraw, setSelectedToolToEllipse, setSelectedToolToLine, setSelectedToolToRectangle, setSelectedToolToText, SystemCanvasToolsType } from '@/redux/slices/ToolsForSystemCanvasSlice';
import { APICanvasToolsType, setSelectedToolOnAPI, setSelectedToolToArrowOnAPI, setSelectedToolToRectangleOnAPI, setSelectedToolToTextOnAPI } from '@/redux/slices/ToolsForAPISlice';
import { DBCanvasToolsType, setSelectedToolToArrowDB, setSelectedToolToTableDB, setSelectedToolToTextDB } from '@/redux/slices/ToolsForDBSlice';


const handleKeyDown = (event: KeyboardEvent) => {   
    
    const dispatch = useDispatch();

    console.log('Key pressed:', event.key);

      switch(event.key) {
        case "s": 
            console.log('s key pressed!');
            dispatch(setSelectedTool());
            break;
        case "r": 
            console.log('r key pressed!');
            dispatch(setSelectedToolToRectangle());
            break;
        case "e": 
            console.log('e key pressed!');
            dispatch(setSelectedToolToEllipse());
            break;
        case "a": 
            console.log('ArrowRight key pressed!');
            break;
        case "l": 
            console.log('ArrowLeft key pressed!');
            break;
        case "d":  
            console.log('ArrowUp key pressed!');
            break;
        case "t":   
            console.log('ArrowDown key pressed!');  
            break;
        case "w":   
            console.log('ArrowDown key pressed!');  
            break;
        case "b":   
            console.log('ArrowDown key pressed!');  
            break;
        }

        return
};