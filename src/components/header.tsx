
const Header: React.FC<headerProps> = (props) => {
	const { catCount } = props; 
	return (
	<header className='header__container'>
		<h1 className='header__title header__welcome'>Welcome to React!</h1>
		<h2 className='header__title'>
			There are currently {catCount} Cats in this Cat App
		</h2>
	</header>
	)
};

interface headerProps {
	catCount:number;
}
export default Header;
