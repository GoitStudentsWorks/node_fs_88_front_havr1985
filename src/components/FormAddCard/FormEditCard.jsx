import { Formik } from "formik";
import * as Yup from "yup";
import Modal from "react-modal";
import { useModal } from "../../hooks/useModal";
import { SharedModal } from "../../shared/SharedModal/SharedModal";
import { StyledCalendar } from "../StyledCalendar/StyledCalendar";
import icons from "../../shared/images/icons.svg";

import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledRadioInput,
  StyledTextArea,
  StyledDeadlineWrapper,
  StyledDeadlineTitle,
  StyledLabelColor,
  StyledContainerRadioBtn,
  StyledSpan,
  TextDeadlain,
  ButtonPlus,
  PlusIcon,
  AuthFormSubmitButton,
  Error,
  ErrorText,
  Container,
  IconChevron,
} from "./FormAddCard.styled";
// import Calendar from "../Calendar/Calendar";
// import { useEffect, useState } from "react";
import dayjs from "dayjs";

// import { useDispatch, useSelector } from "react-redux";

Modal.setAppElement("#root");

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  color: Yup.string().required("Color selection is required"),
  deadline: Yup.date().required("Deadline is required"),
});

export default function FormEditCard({ isModalOpen, modalStateSwapper }) {
  //{ cardId }
  // const dispatch = useDispatch();
  const { closeModal } = useModal();

  const {
    isModalOpen: isCalendarModalOpen,
    openModal: openCalendarModal,
    closeModal: closeCalendarModal,
  } = useModal();

  const customStyles = {
    overlay: {
      backgroundColor: "rgb(21, 21, 21, 0.75)",
    },
    content: {
      width: "233px",
      height: "254px",
      margin: "auto",
      padding: 0,
      border: "none",
      borderRadius: "8px",
    },
  };

  // const cardData = useSelector((state) => selectCardById(state, cardId));

  // useEffect(() => {
  //   setColor(cardData.color);
  //   setSelectedDate(cardData.deadline);
  // }, [cardData]);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // dispatch(
    //   updateCard({
    //     id: cardId,
    //     title: values.title,
    //     description: values.description,
    //     color: values.color,
    //     deadline: values.deadline,
    //   })
    // );
    setSubmitting(false);
    closeModal();
    resetForm();
  };
  return (
    <>
      {/* <button onClick={openModal}>Edit Card</button> */}
      <SharedModal
        modalIsOpen={isModalOpen}
        closeModal={modalStateSwapper}
        title="Edit card"
        maxWidth={"350px"}
      >
        <Formik
          initialValues={
            {
              // title: cardData.title,
              // description: cardData.description,
              // color: cardData.color,
              // deadline: cardData.deadline,
            }
          }
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit }) => (
            <StyledForm onSubmit={handleSubmit}>
              <Container>
                <StyledInput
                  type="text"
                  name="title"
                  onChange={handleChange}
                  value={values.title}
                  placeholder="Title"
                />
                <Error name="title" component="div" className="error" />
              </Container>
              <Container>
                <StyledTextArea
                  name="description"
                  onChange={handleChange}
                  value={values.description}
                  placeholder="Description"
                />
                <ErrorText
                  name="Description"
                  component="div"
                  className="error"
                />
              </Container>

              <StyledLabelColor>Label color</StyledLabelColor>
              <StyledContainerRadioBtn>
                <StyledLabel>
                  <StyledRadioInput
                    type="radio"
                    name="color"
                    value="blue"
                    className="blue"
                    checked={values.color === "blue"}
                    onChange={handleChange}
                  />
                  <StyledSpan className="blue"></StyledSpan>
                </StyledLabel>

                <StyledLabel>
                  <StyledRadioInput
                    type="radio"
                    name="color"
                    value="pink"
                    className="pink"
                    checked={values.color === "pink"}
                    onChange={handleChange}
                  />
                  <StyledSpan className="pink"></StyledSpan>
                </StyledLabel>
                <StyledLabel>
                  <StyledRadioInput
                    type="radio"
                    name="color"
                    value="green"
                    className="green"
                    checked={values.color === "green"}
                    onChange={handleChange}
                  />
                  <StyledSpan className="green"></StyledSpan>
                </StyledLabel>
                <StyledLabel>
                  <StyledRadioInput
                    type="radio"
                    name="color"
                    value="gray"
                    className="gray"
                    checked={values.color === "gray"}
                    onChange={handleChange}
                  />
                  <StyledSpan className="gray"></StyledSpan>
                </StyledLabel>
              </StyledContainerRadioBtn>

              <StyledDeadlineTitle>Deadline</StyledDeadlineTitle>
              <StyledDeadlineWrapper>
                <TextDeadlain onClick={openCalendarModal}>
                  {dayjs(values.deadline).format("dddd, MMMM DD")}
                </TextDeadlain>
                <IconChevron>
                  <use href={icons + "#icon-chevron-down"} />
                </IconChevron>
              </StyledDeadlineWrapper>

              <AuthFormSubmitButton type="submit">
                <ButtonPlus>
                  <PlusIcon>
                    <use href={icons + "#icon-plus"} />
                  </PlusIcon>
                </ButtonPlus>
                Edit
              </AuthFormSubmitButton>
            </StyledForm>
          )}
        </Formik>
        <Modal
          isOpen={isCalendarModalOpen}
          onRequestClose={closeCalendarModal}
          style={customStyles}
          closeTimeoutMS={750}
        >
          <StyledCalendar />
        </Modal>
      </SharedModal>
    </>
  );
}
