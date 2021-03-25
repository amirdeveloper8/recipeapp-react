import React from "react";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";

const RecipeBox = (props) => {
  const { title, ingredientLines, image, calories, cautions } = props;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-lg-4 col-sm-6 col-xs-12">
      <div className="recipe-box">
        <img src={image} alt={title} />
        <div className="recipe-cont">
          <h5 onClick={openModal}>{title}</h5>
          <div className="excerpt-recipe">
            <p>
              Calories : {calories}
              <br />
              Cautions :{" "}
              {cautions.map((caution) => (
                <span key={caution} style={{ paddingLeft: 5 }}>
                  {caution}
                </span>
              ))}
            </p>
          </div>
          <div>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
            >
              <button className="close-modal-recipe" onClick={closeModal}>
                <AiOutlineCloseCircle />
              </button>
              <h5 className="title-modal-recipe">{title}</h5>
              <p className="text-modal-recipe">
                <ul className="ing">
                  ingredients :
                  {ingredientLines.map((ing) => (
                    <li key={ing}>{ing}</li>
                  ))}
                </ul>
              </p>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeBox;
