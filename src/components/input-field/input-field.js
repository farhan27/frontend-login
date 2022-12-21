export const InputField = ({ register, type, name, label }) => {
    return (
        <div className="mb-4">
            <label className="flex text-gray-700 text-sm font-bold mb-2">{label} </label>
            <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type={type} {...register ? { ...register(name) } : name = { name }} aria-label={`${name}-input`} />
        </div>

    )
}