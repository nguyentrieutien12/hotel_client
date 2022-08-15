import React from "react";
import { useEffect } from "react";
import styles from "./quiz.module.css";
import { allQuestion } from "./../../../../data/quiz";
import { useState } from "react";
export default function QuizComponent() {
  const [anwser, setAnwser] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    $(".carousel").carousel({
      interval: false,
      wrap: false,
    });
  }, []);
  const handleChange = (e) => {
    setAnwser((prevState) => [...prevState, e.target.value]);
  };
  const handleSubmitSecond = (question) => {
    list.push({ question, anwsers: anwser });
    setAnwser([]);
  };
  const showQuiz = () => {
    return allQuestion.map((quiz, index) => {
      return (
        <div
          key={index}
          className={`carousel-item ${index === 0 ? "active" : ""}`}
        >
          <h2>{quiz.question}</h2>
          <div className={styles.asw}>
            {quiz.answer.map((ans) => {
              return (
                <div className={`checkbox  ${styles.checkbox}`}>
                  <label>
                    <input
                      type="checkbox"
                      value={ans.data}
                      onChange={handleChange}
                    />
                    <div className={styles.check}>{ans.data}</div>
                  </label>
                </div>
              );
            })}
          </div>
          <div className={styles.btn_group}>
            <button
              className="carousel-control-next"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="next"
              onClick={() => handleSubmitSecond(quiz.question)}
            >
              <span className={`${styles.next_icon}`}>Next</span>
              <span
                className={`carousel-control-next-icon`}
                aria-hidden="true"
              ></span>
            </button>
          </div>

          {index === allQuestion.length - 1 && (
            <button type="button" class="btn btn-default">
              submit
            </button>
          )}
        </div>
      );
    });
  };
  return (
    <div className={`${styles.carouselExampleControls}`}>
      <div
        id="carouselExampleControls"
        data-ride="carousel"
        className="carousel slide"
      >
        <div className={`carousel-inner ${styles.carousel_inner}`}>
          {showQuiz()}
        </div>
      </div>
    </div>
  );
}
