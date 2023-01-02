import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Formulario = ({ lstColaboradores, setLstColaboradores }) => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    const agregarColaborador = (e) => {
        e.preventDefault();

        setLstColaboradores([...lstColaboradores, { nombre: nombre, correo: email }]);

    }

    return (
        <div className='p-3'>
            <form onSubmit={agregarColaborador}>
                <div>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <div class="box">
                            <Form.Control type="text" id="nombre" name="nombre" placeholder='Nombre Colaborador' onChange={(e) => setNombre(e.target.value)}>
                            </Form.Control>
                        </div>
                    </Form.Group>
                </div>

                <div>
                    <Form.Group>
                        <Form.Label>Correo</Form.Label>
                        <div class="box">
                        <Form.Control type="email" id="email" name="email" placeholder='E-mail Colaborador' onChange={(e) => setEmail(e.target.value)}>
                        </Form.Control>
                        </div>
                    </Form.Group>
                </div>

                <Button variant="success" type="submit" style={{ marginTop: 20 }}>
                    Agregar Colaborador
                </Button>
            </form>
        </div>
    )
}

export default Formulario