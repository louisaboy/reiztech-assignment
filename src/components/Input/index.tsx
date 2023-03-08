import * as C from './styles';

export const Input = () => {
    return (
        <C.InputArea>
            <input 
                type="text"
                placeholder="Search by Country" 
            />
            <select>
                <option value="Filter by Region" > Filter by Region </option>
                <option value="Filter by Smaller Area" > Filter by Smaller Area </option>
            </select>
        </C.InputArea>
    )
}