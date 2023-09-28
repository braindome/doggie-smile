import "./Catalogue.css"

const Header = ({searchInput, onSearchInputChange, onSearch}) => {

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    }

    return (
        <div className="header">
            <h1>Catalogue</h1>
            <input 
                type="text" 
                value={searchInput}
                onChange={(e) => onSearchInputChange(e.target.value)}
                onSearch={handleKeyPress}
                placeholder="Search for string..."
            />
            <button onClick={onSearch}>Search</button>

        </div>
    )
}

export default Header