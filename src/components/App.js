import '../styles/App.scss';
import { useEffect, useState } from 'react';
import dataJson from '../services/data.json';
import ls from '../services/local-storage.js'; //localStorage

function App() {
  //STATES-------------------------------------------------------------------------------------
  const [data, setData] = useState(dataJson);
  const [newData, setNewData] = useState({
    name: '',
    openOnWeekdays: true,
    openOnWeekend: true,
  });

  //HANDLE-----------------------------------------------------------------------------------------
  //pending
  const handleButton = (ev) => {
    ev.preventDefault();
  };

  //pending comprobation
  const handleCheckWeek = (ev) => {
    if (ev.currentTarget.checked) {
      setNewData({ ...newData, openOnWeekdays: true });
    } else {
      setNewData({ ...newData, openOnWeekdays: false });
    }
  };
  const handleCheckWeekend = (ev) => {
    if (ev.currentTarget.checked) {
      setNewData({ ...newData, openOnWeekdays: true });
    } else {
      setNewData({ ...newData, openOnWeekdays: false });
    }
  };
  const handleButtonAdd = (ev) => {
    ev.preventDefault();
    data.push(newData);
    setData([...data]);
  };
  //ok
  const handleInput = (ev) => {
    setNewData({ ...newData, name: ev.currentTarget.value });
  };

  //RENDER---------------------------------------------------------------------------------------------
  //useEffect?
  const renderClubs = () => {
    console.log(data);
    data.map((el, i) => {
      return (
        <li key={i} className="li_container">
          <h3>
            #{i} {el.name}
            <button onClick={handleButton} className="buttonX">
              x
            </button>
          </h3>
          <p>
            <strong>Abierto entre semana: </strong>
            <small>{el.openOnWeekdays ? 'Si' : 'No'}</small>
            <strong>Abierto el fin de semana: </strong>
            <small>{el.openOnWeekend ? 'Si' : 'No'}</small>
          </p>
        </li>
      );
    });
  };

  //HTML----------------------------------------------------------------------
  return (
    <div>
      <header>
        <h2 className="title">Mis clubs</h2>
        <select name="show" id="show">
          <option value="all">Todos</option>
          <option value="week">Los que abren entre semana</option>
          <option value="weekend">Los que abren el fin de semana</option>
        </select>
      </header>
      <main>
        <section>
          <ul>{renderClubs()}</ul>
        </section>
        <section>
          <h2>Añadir un nuevo club</h2>
          <form action="">
            <label htmlFor="name">
              Nombre del club:
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nombre del club..."
                value={newData.name}
                onChange={handleInput()}
              />
            </label>
            <label htmlFor="weekOpen">
              ¿Abre entre semana?
              <input
                type="checkbox"
                name="weekOpen"
                id="weekOpen"
                onChange={handleCheckWeek()}
                checked={true}
              />
            </label>
            <label htmlFor="weekOpen">
              ¿Abre el fin de semana?
              <input
                type="checkbox"
                name="weekendOpen"
                id="weekendOpen"
                onChange={handleCheckWeekend()}
                checked={false}
              />
            </label>
            <button className="submitBtn" onClick={handleButtonAdd()}>
              Añadir un nuevo club
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
