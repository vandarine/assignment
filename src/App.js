import './App.css';
import './css/style.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


function App() {
  const [name, setName] = useState('')
  const [input, setInput] = useState('')
  const [img, setImg] = useState([])
  const [measure1, setMeasure1] = useState('')
  const [measure2, setMeasure2] = useState('')
  const [measure3, setMeasure3] = useState('')
  const [measure4, setMeasure4] = useState('')
  const [measure5, setMeasure5] = useState('')
  const [ingredients1, setIngredients1] = useState('')
  const [ingredients2, setIngredients2] = useState('')
  const [ingredients3, setIngredients3] = useState('')
  const [ingredients4, setIngredients4] = useState('')
  const [ingredients5, setIngredients5] = useState('')
  const [instructions, setIstructions] = useState('')

  

  async function search() {
    try {
      const address = URL + input;
      const response = await fetch(address);
      console.log(response);
  
      if(response.ok){
        const json = await response.json();
        console.log(json);
        setName(json.drinks[0].strDrink);
        setImg(json.drinks[0].strDrinkThumb);
        setMeasure1(json.drinks[0].strMeasure1);
        setMeasure2(json.drinks[0].strMeasure2);
        setMeasure3(json.drinks[0].strMeasure3);
        setMeasure4(json.drinks[0].strMeasure4);
        setMeasure5(json.drinks[0].strMeasure5);
        setIngredients1(json.drinks[0].strIngredient1);
        setIngredients2(json.drinks[0].strIngredient2);
        setIngredients3(json.drinks[0].strIngredient3);
        setIngredients4(json.drinks[0].strIngredient4);
        setIngredients5(json.drinks[0].strIngredient5);
        setIstructions(json.drinks[0].strInstructions);
      } else {
        alert('Error retrieving coctail.');
      }
    } catch (err) {
      alert(err);
    }
  }

  // useEffect(() => {
  //   axios.get(URL)
  //     .then((response)=> {
  //       const coctail = response.data.drinks;
  //       // setName(coctail.strDrink);
  //       setMeasure1(coctail.strMeasure1);
  //       setIngredients1(coctail.strIngredient1);
  //       setIstructions(coctail.strInstructions);
  //     }).catch (error => {
  //       alert (error);
  //     })

  // }, [])
  

  return (
    <div className="container">
      <div className="col-md-8">
        <h2>Coctail of the day</h2>
        <div className="input-group">
          <input type="text" value={input} placeholder="Search by name" className="form-control" onChange={e => setInput(e.target.value)} />
          <div className="input-group-prepend">
            <button type="button" className="btn btn-secondary" onClick={search}>Search</button>
          </div>
        </div>

            <h3>{name}</h3>
            <img src={img} className="rounded max-width=50%"></img>
            <h4>Ingredients</h4>
            <p>{measure1}  {ingredients1}</p>
            <p>{measure2}  {ingredients2}</p>
            <p>{measure3}  {ingredients3}</p>
            <p>{measure4}  {ingredients4}</p>
            <p>{measure5}  {ingredients5}</p>
            <h4>Instructions</h4>
            <p>{instructions}</p>
      </div>
    </div>
  );
}

export default App;
