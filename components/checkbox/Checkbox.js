import Check from "../ui/icons/Check";

const Checkbox = ({ checked, disabled, defaultChecked, id, label, onChange }) => {
    return <>
        <div className="relative">
            <input
                className="peer relative appearance-none shrink-0 size-5 rounded mt-1 bg-[#565656] focus:outline-none checked:bg-[#7569FF] border-0 cursor-pointer"
                type="checkbox"
                id={id}
                checked={checked}
                defaultChecked={defaultChecked}
                disabled={disabled}
                onChange={onChange}
            />
            <Check style={"absolute inset-0 right-[0.5px] w-4 h-5 pointer-events-none hidden peer-checked:block stroke-white mt-1 outline-none"} />
        </div>

        <label htmlFor={id}>
            {label}
        </label>
    </>
}

export default Checkbox;