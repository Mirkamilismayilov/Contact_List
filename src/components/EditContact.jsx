/* eslint-disable array-callback-return */
import { Button, Form, Input, Radio, Select } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addId, addIdEdit, editContact, fatherName, field, gender, inputValue, mail, motivation, name, surname } from '../Redux-store/features/sliceCounter';

const EditContact = () => {

    const { id } = useParams()
    let parseId = parseInt(id)
    const obj = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(obj.testEdit);
    console.log(obj.todos);
    
    /* const submit = (e) => {
        dispatch(addId(parseId))
        dispatch(inputValue(""));
        navigate("/");
        dispatch(editContact(parseId))
    } */
    const submit = () => {
        navigate("/");
        dispatch(editContact(parseId))
        
    }
    return (
        <div>
            <div className=' bg-slate-300 p-16 flex flex-col items-center justify-center'>
                <div>
                    <h1 className=' text-6xl'>FORM</h1>
                </div>
                <div className=' w-[70%] flex flex-col items-center justify-center  '>
                    {obj.todos.map((item) => {
                  
                        if (parseId === item.id) {                         
                            return <Form key={parseId} className='w-[500px]' onFinish={submit} >
                                <Form.Item key={parseId} className='mt-10' label="Name" required
                                    rules={[{ required: true, message: "Please select an name!" }]}>
                                    <Input defaultValue={item.name} required className='w-full  p-2 rounded-xl' onChange={(e) => dispatch(name(e.target.value))} placeholder="Enter your first name" />
                                </Form.Item>
                                <Form.Item key={parseId} className='mt-10' label="Surname" required>
                                    <Input defaultValue={item.surname} required className='w-full p-2 rounded-xl' onChange={(e) => dispatch(surname(e.target.value))} placeholder="Enter your last name" />
                                </Form.Item>
                                <Form.Item key={parseId} className='mt-10' label="Father's name" required>
                                    <Input defaultValue={item.fatherName} required className='w-full p-2 rounded-xl' onChange={(e) => dispatch(fatherName(e.target.value))} placeholder="Enter your father's name" />
                                </Form.Item>
                                <Form.Item key={parseId} className='mt-10' label="Email" required rules={[{ type: 'email' }]}>
                                    <Input defaultValue={item.mail} required type='email' className='w-full p-2 rounded-xl' onChange={(e) => dispatch(mail(e.target.value))} placeholder="Enter your e-mail" />
                                </Form.Item>
                                <Form.Item key={parseId} required label="Field" >
                                    <Select defaultValue={item.field} placeholder="Select your field" onChange={(e) => dispatch(field(e))} >
                                        <Select.Option value="Front-end Developer">Front-end Developer</Select.Option>
                                        <Select.Option value="Back-end Developer">Back-end developer</Select.Option>
                                        <Select.Option value="Full-stack Developer">Full-stack Developer</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item key={parseId} required label="Motivation">
                                    <TextArea defaultValue={item.motivation} required onChange={(e) => dispatch(motivation(e.target.value))} placeholder="Write about your motivation" rows={4} />
                                </Form.Item>
                                <Form.Item key={parseId} required label="Gender">
                                    <Radio.Group defaultValue={item.gender} onChange={(e) => dispatch(gender(e.target.value))}>
                                        <Radio required value=" Male "> Male </Radio>
                                        <Radio required value="Female"> Female </Radio>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item >
                                    <Button className='w-[100%] p-5 flex items-center justify-center rounded-xl bg-cyan-500 text-white' block type='primary' htmlType='submit'>Send Form</Button>
                                </Form.Item>
                            </Form>

                        }
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default EditContact
