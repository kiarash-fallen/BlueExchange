
function IconContainer({ children, border, color }) {
    return (
        <span className={`relative bg-[rgb(50,50,50)] w-fit border-b rounded-[10px] p-2 text-white ${border}`}>
            {children}
            <span className={`w-1/3 h-2 absolute bottom-0 blur-lg rounded-xl flex ${color}`}></span>
        </span>

    )
}

export default IconContainer;