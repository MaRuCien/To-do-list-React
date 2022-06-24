import React, { useState } from "react";
import '../Estilos/AgregarTarea.css'
import { AiFillDelete } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaughBeam } from '@fortawesome/free-solid-svg-icons'
import { faSadCry } from '@fortawesome/free-solid-svg-icons'
import {faFaceKissBeam} from '@fortawesome/free-solid-svg-icons'


 function AgregarTarea() {

	const [input, setInput] = useState("");
	const [tarea, setTarea] = useState([]);
	const [count, setCount] = useState(0);
	const [face, setFace] = useState(<FontAwesomeIcon icon={faLaughBeam} />)

	const agregarInformacion = () => {
		if (input != null) {
			let newArray = [...tarea, input];
			setTarea(newArray);
			setInput("");
			setCount(count + 1);
			setFace(<FontAwesomeIcon icon={faSadCry} />)
		}
	};

	const removerTarea = id => {
		tarea.splice(id, 1);
		setTarea([...tarea]);
		setCount(count - 1);
		if (count === 1) {
			setFace(<FontAwesomeIcon icon={faLaughBeam} />)
		}
		else {
			setFace(<FontAwesomeIcon icon={faFaceKissBeam} />)
		}
	};



	return (
		<>
			<div className="agregar-tarea">
				<input
					className="agregar-input"
					placeholder="    Presiona enter para agregar una tarea :)    "
					type="text"
					value={input}
					onChange={e => setInput(e.target.value)}
					onKeyPress={e => (e.key === "Enter" ? agregarInformacion() : "")}
				/>

				{tarea.map((texto, id) => (
					<div className="tarea" key={id}>
						{texto}
						<button className="boton" onClick={() => removerTarea(id)}>
							<AiFillDelete />
						</button>
					</div>
				))}
				<footer className="contador">
					{count} por hacer {face} {" "}
				</footer>
			</div>
		</>
	);
}

export default AgregarTarea;