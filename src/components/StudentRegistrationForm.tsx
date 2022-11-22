import {ChangeEvent, FormEvent, useEffect, useState} from "react";

export type StudentRegistrationFormType = {
    studentName: string,
    age: number,
    isAlreadyStudent: boolean
}

export default function StudentRegistrationForm() {

    // Einzelne States
    // const [studentName, setStudentName] = useState<string>("")
    // const [age, setAge] = useState<number>(0)
    // const [isAlreadyStudent, setIsAlreadyStudent] = useState<false>(false)

    // ...verbunden
    const emptyForm: StudentRegistrationFormType = {
        studentName: "",
        age: 0,
        isAlreadyStudent: false
    }
    const [registrationForm, setRegistrationForm] = useState<StudentRegistrationFormType>(emptyForm)

    useEffect(() => {
        console.log(registrationForm)
    }, [registrationForm])

    // Reagiere auf Formularänderungen
    function handleFormChange(event: ChangeEvent<HTMLInputElement>) {
        // Der Name des Feldes das sich verändert hat
        const fieldName = event.target.name
        const fieldType = event.target.type

        /*
        *  let fieldValue;
        *
        *  if(fieldType === "checkbox") {
        *    fieldValue = event.target.checked
        *  }
        *  else {
        *   fieldValue = event.target.value
        * }
        *
        * Diese Logik entspricht dem "ternary operator"
        * */
        const fieldValue
            = fieldType === "checkbox" ? event.target.checked : event.target.value


        // Wir kopieren den alten Formular (State) Wert
        setRegistrationForm(prevRegistrationForm => (
            {
                ...prevRegistrationForm,
                [fieldName]: fieldValue
            }
        ))
    }

    // Wird aufgerufen, wenn das Formular eingereicht wird
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        console.log("Das Formular wurde eingereicht!")
        console.log("Die Daten sind: ")
        console.log(registrationForm)

        // Was würden wir jetzt machen...?
        // Daten ans Backend schicken!
    }

    return (
        <section>
            {/* Formular Tag: */}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type={"text"}
                        name={"studentName"}
                        value={registrationForm.studentName}
                        onChange={handleFormChange}
                    />
                </label>

                <br/>
                <label>
                    Alter:
                    <input
                        type={"number"}
                        name={"age"}
                        value={registrationForm.age}
                        onChange={handleFormChange}
                    />
                </label>

                <br/>
                <label>
                    Ist bereits Student:
                    <input
                        type={"checkbox"}
                        name={"isAlreadyStudent"}
                        checked={registrationForm.isAlreadyStudent}
                        onChange={handleFormChange}
                    />
                </label>

                <br/>
                <button type={"submit"}>Formular einreichen</button>
            </form>
        </section>
    )
}