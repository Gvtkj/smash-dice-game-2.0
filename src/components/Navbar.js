import '../styles/Header.css'
const Header = () => {
    return ( 
        <div className="header">
            <h2 className='header-title'>Smash Bros Dice Game!</h2>
            <img className="header-image" src={require('./Smash_Bros_Logo.jpg')} alt="pic" />
        </div>
     );
}
 
export default Header;