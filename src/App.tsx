import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import  Cat  from './data/cat';
import CatCard from './components/cat_card';
import catData from './data/cat-data';
import {v4 as uuidv4 } from 'uuid';



function App(): JSX.Element {

const [ cats, setCats] = useState<Array<Cat>>(catData);
const catCount = cats.length;
	
console.log("our pretties are ",cats);
console.log("cat count is ",catCount);
	return (
		<>
			<Navbar />
			<Header catCount={catCount} />

			<main>
				<div className='cards__wrapper'>
			
					{cats.map((element, index) => <CatCard 
					    name={element.name}
						species={element.species}
						favFoods={element.favFoods}
						birthYear={element.birthYear}
						key = {element.id}
						catIndex={index} />)}

</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
