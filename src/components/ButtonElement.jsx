import { useState } from "react";
import { Button } from "@mui/material";

const ButtonElement = ({ props, styles, title }) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(true);
        setTimeout(() => {
            setIsPressed(false); // Отменяем состояние после небольшой задержки
        }, 200); // Задержка для имитации эффекта hover
    };

    return (
        <Button
            {...props}
            sx={{ transform: isPressed ? 'scale(1.03)' : 'scale(1)', ...styles }}
            onTouchStart={handlePress}
        >
            {title}
        </Button>
    );
}

export default ButtonElement;