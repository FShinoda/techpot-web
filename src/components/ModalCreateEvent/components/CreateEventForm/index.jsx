import React, { useState } from 'react'
import './style.css'

// Redux
import { useSelector } from 'react-redux';

// Material UI
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Today } from '@material-ui/icons';

// AntD
import { Form, Select, DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        paddingBottom: '20px',

    },
    button: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),

    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: "30px",
    },
}));

const CreateEventForm = ({ values, eventInfoForm, activeStep, isLastStep, handleBack, handleNext, criarEvento }) => {

    const classes = useStyles();

    const [form] = Form.useForm();

    const [buttonClicked, setButtonClicked] = useState('');

    const categoriesList = useSelector(state => state.entitie.event.categoriesList);

    const onFinish = formValues => {
        let formData = { 'eventInfoForm': formValues };
        if (buttonClicked === 'next') {
            isLastStep ? criarEvento(formData) : handleNext(formData)
        }
        else {
            handleBack(formData)
        }
    }

    const tipoEventoValues = [
        {
            "value": 1,
            "name": "Online"
        },
        {
            "value": 2,
            "name": "Presencial"
        },

    ];


    return (
        <>
            <Form
                form={form}
                name="createEvent"
                onFinish={onFinish}
                initialValues={eventInfoForm ? {
                    eventName: eventInfoForm.eventName || '',
                    eventDesc: eventInfoForm.eventDesc || '',
                    eventType: eventInfoForm.eventType || '',
                    eventCategory: eventInfoForm.eventCategory || '',
                    eventDate: eventInfoForm.eventDate || '',
                } : null}
                style={{ width: "100%" }}
                scrollToFirstError
            >
                <div className="createEvent-container">

                    <div className="createEvent-info-container font-techpot">
                        <div className="createEvent-info-nome  modalcreateEventContainerPadrao">
                            <Form.Item
                                name="eventName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'O nome do evento ?? obrigat??rio',
                                    },
                                ]}

                            >
                                <input placeholder='Titulo do Evento' icon={<Today />} />
                            </Form.Item>
                        </div>

                        <div className="createEvent-info-desc  modalcreateEventContainerPadrao">
                            <Form.Item
                                name="eventDesc"
                                rules={[
                                    {
                                        required: true,
                                        message: 'A descri????o do evento ?? obrigat??rio',
                                        max: 90
                                    },
                                ]}

                            >
                                <textarea placeholder='Descri????o do Evento' wordCount="90" />
                            </Form.Item>
                        </div>

                        <div className="createEvent-date-container">
                            {/* TODO -> Fixed this field (Required = true) */}
                            <Form.Item
                                name="eventDate"
                                rules={[
                                    {
                                        type: 'array',
                                        required: false,
                                        message: 'A data do evento ?? obrigat??rio',
                                    },
                                ]}

                            >
                                {/* <div className="createEvent-date"> */}
                                    <RangePicker placeholder={["Data inic??o", "Data Fim"]} showTime bordered={false} />
                                {/* </div> */}
                            </Form.Item>

                        </div>

                        <div className="createEvent-info-privacy  modalcreateEventContainerPadrao">
                            <Form.Item
                                name="eventType"
                                rules={[
                                    {
                                        required: true,
                                        message: 'O tipo do evento ?? obrigat??rio',
                                    },
                                ]}

                            >
                                <Select placeholder="Tipo" size="large">
                                    {tipoEventoValues.map((tipo) => (
                                        <Select.Option className="font-techpot" key={tipo.value} value={tipo.value}>{tipo.name}</Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>
                        <div className="createEvent-info-privacy  modalcreateEventContainerPadrao">
                            <Form.Item
                                name="eventCategory"
                                rules={[
                                    {
                                        required: true,
                                        message: 'A categoria do evento ?? obrigat??rio',
                                    },
                                ]}

                            >
                                <Select placeholder="Categoria" size="large">
                                    {categoriesList.map((categoria) => (
                                        <Select.Option className="font-techpot" key={categoria.category_id} value={categoria.category_id}>{categoria.category_name}</Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="createEvent-navButtons-Container">
                    <Button type="submit" disabled={activeStep === 0} onClick={() => setButtonClicked('back')} className={classes.button}>
                        Voltar
                    </Button>

                    <Button
                        type="submit"
                        variant="contained"
                        style={{ backgroundColor: "#d0094d", color: "#fff" }}
                        onClick={() => setButtonClicked('next')}
                        className={classes.button}
                    >
                        {isLastStep ? 'Criar' : 'Pr??ximo'}
                    </Button>
                </div>
            </Form>
        </>

    )
}

export default CreateEventForm;

