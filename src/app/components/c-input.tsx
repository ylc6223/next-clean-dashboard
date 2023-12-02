'use client';
export default function input({width = 290, height = 50, id, type = 'text', defaultValue = '', placeholder = ''}: {
    width?: number | string,
    height?: number | string,
    id?: string,
    type?: string,
    defaultValue?: string,
    placeholder?: string
}) {
    const divStyle = {
        width,
        height
    };

    const handleInput = (inputStr: string) => {
    }
    return (
        <div style={divStyle}>
            <label htmlFor={id}></label>
            <input
                className="box-border outline-0 w-full h-full px-[18px] py-5 bg-white rounded-[14px]  border border-[#D8E0F0] border-solid focus:border-[#3F8CFF] focus:shadow-[0_0_3px_0_#3F8CFF]"
                placeholder={placeholder} id={id} type={type} defaultValue={defaultValue}

                onChange={(e) => {
                    handleInput(e.target.value)
                }}
            />
        </div>
    )
}
