
const Header: React.FC<headerProps> = (props) => (
	<header className='header__container'>
		<h1 className='header__title header__welcome'>Welcome to React!</h1>
		<h2 className='header__title'>
			There are currently {props.catCount} Cats in this Cat App
		</h2>
	</header>
);

interface headerProps {
	catCount:number;
}
export default Header;
