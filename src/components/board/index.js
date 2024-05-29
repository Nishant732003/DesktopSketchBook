import { useRef,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Board = () => {
    const canvasRef = useRef(null);
    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
    const { color, size } = useSelector((state) => state.toolBox[activeMenuItem]);
    useEffect(() => {
        if (!canvasRef) {
            return;
        }
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, []);
    console.log(color, size);
    return (
        <canvas ref={canvasRef}>

        </canvas>
    );
}
export default Board;