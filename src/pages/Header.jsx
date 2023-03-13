import React from "react";
import "../App.css";

const Header = () => {
  return (
    <div className="_header">
      <img
        className="_header-img"
        src="https://sport-marafon.ru/upload/blog/img/20/2072-028.jpg"
      />
      <h1 className="header_text">Республика Ингушетия</h1>
      <div className="overlay"></div>
      <p className="header__p">
        Ингушетия - самая молодая республика в составе Российской Федерации ,
        образованная 4 июня 1992 года. <br />
        Расположена на северных склонах предгорья Большого Кавказского хребта, в
        его центральной части.
      </p>
      <div className="overlay2">
        {" "}
        <h2 className="square">3 600 км² </h2>
        <p className="infoRegion">Общая площадь региона</p>
        <h2 className="numberPeople"> 518 952 </h2>
        <p className="numberPeople2023">
          Человек составляет население (на 1 января 2023)
        </p>
        <p className="styleLanguage">
          Официальный язык: <b>русский, ингушский</b>
          <p>
            Самый крупный город: <b>Назрань</b>
          </p>
        </p>
      </div>
    </div>
  );
};
export default Header;
