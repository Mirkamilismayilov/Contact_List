/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, showModal } from '../Redux-store/features/sliceCounter';


const InfoModal = () => {

    const obj = useSelector((state) => state.counter)
    const dispatch = useDispatch();

    return (
        <>
            {obj.todos.map((item) => {

                if (item.id === obj.dataId) {
                  return  <Modal open={obj.show} className='!w-[400px] flex justify-center items-start flex-col '  /* onOk={} */ onCancel={() => dispatch(hideModal())}>
                   <h1 className='text-[25px] font-bold text-red-500 text-center'>Info!</h1>
                        <nav >
                            <ul className='w-full text-blue-400  text-[25px]'>
                                <li>
                                    {"Name: " + item.name}
                                </li>
                                <li>
                                    {"Surname: " + item.surname}
                                </li>
                                <li>
                                    {"Father's name: " + item.fatherName}
                                </li>
                                <li>
                                    {"Field: " + item.field}
                                </li>
                                <li>
                                    {"Email: " + item.mail}
                                </li>
                                <li>
                                    {"Gender: " + item.gender}
                                </li>
                            </ul>
                        </nav>
                    </Modal>
                }


            })}


        </>

    )
}

export default InfoModal
