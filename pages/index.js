function Home(){
    return (
        <div className="menu-grid">
            <input type="checkbox" id="checkbox-1"/>
            <div className="pos-menu shadow-menu">
                <div className="background-menu"></div>
            </div>
            <label htmlFor="checkbox-1" className="l-btn1">
                    <span></span>
                    <span></span>
                    <span></span>
            </label>
            <label htmlFor="checkbox-1" className="l-btn2"></label>
        </div>
        
    )
}
export default Home