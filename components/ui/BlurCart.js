
function BlurCart({ children, borderColor, bgColor }) {
    return (
        <div className={`box-6 border-b relative overflow-hidden ${borderColor}`}>
            {children}
            <div className="flex justify-center">
                <div className={`absolute m-auto w-[50%] bottom-0 h-[20px] opacity-75 blur-[48px] ${bgColor}`}></div>
            </div>
        </div>
    )
}

export default BlurCart