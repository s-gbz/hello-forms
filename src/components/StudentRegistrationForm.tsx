import {ChangeEvent, useState} from "react";

export default function StudentRegistrationForm() {

    // state
    const [studentName, setStudentName] = useState<string>("")

    // Reagiere auf Formularänderungen
    function handleFormChange(event: ChangeEvent<HTMLInputElement>) {
        setStudentName(event.target.value)
    }

    return (
        <section>
            {/* Formular Tag: */}
            <form>
                <label>
                    Name:
                    <input
                        type={"text"}
                        name={"studentName"}
                        value={studentName}
                        onChange={handleFormChange}
                    />
                </label>

            </form>
        </section>
    )
}