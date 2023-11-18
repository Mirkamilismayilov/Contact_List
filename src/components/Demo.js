import React from 'react';
import { Space, Table } from 'antd';
import { AiOutlineEdit } from "react-icons/ai"
import { BiTrashAlt } from "react-icons/bi"
import { BsInfoCircle } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import { contactDelete, postContact, showModal } from '../Redux-store/features/sliceCounter';
import { NavLink } from 'react-router-dom';


const App = () => {

    const obj = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    const columns = [

        {
            title: 'Name',
            dataIndex: 'name',

        },
        {
            title: 'Surname',
            dataIndex: 'surname',

        },
        {
            title: 'Fathers name',
            dataIndex: 'fatherName',

        },
        {

            title: 'Professions name',

            dataIndex: 'field',

        },
        {
            title: 'Edit Info Delete',
            key: 'Edit Info Delete',
            render: (_, item) => (
                <Space size="middle" key={item.id} className='text-[25px] flex items-center justify-center'>
                    <NavLink to={"EditContact/" + item.id}>
                        <AiOutlineEdit onClick={() => dispatch(postContact(item.id))} />
                    </NavLink>
                    <BsInfoCircle onClick={() => dispatch(showModal(item.id))} />
                    <button onClick={() => dispatch(contactDelete(item.id))}> <BiTrashAlt /></button>
                </Space>
            ),
        },
    ];
    return (

        <>
            <Table  className='mb-[400px]  ' columns={columns} dataSource={obj.todos} />
        </>
    )
}

export default App;