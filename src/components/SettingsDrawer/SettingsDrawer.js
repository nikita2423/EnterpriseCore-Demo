import _ from 'lodash';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, ControlLabel, Drawer, Form, FormControl, FormGroup, InputGroup, Modal } from 'rsuite';
import { giveDefaultValues, validKeys } from '../../utils';
import { dispatchAddObject } from '../../model/dispatch';
import { dataSelector, yearListSelector } from '../../model/selector';
import ConfigurationForm from './ConfigurationForm';

// import stylesheet
import './SettingsDrawer.css'

const SettingsDrawer = ({ setIsSettingsOpen, isSettingsOpen }) => {

    const dispatch = useDispatch();
    const populationData = useSelector(dataSelector)
    const yearsData = useSelector(yearListSelector)

    const lastData = useMemo(() => {
        return populationData[Object.keys(populationData)[Object.keys(populationData).length - 1]]
    }, [populationData]);

    const addRowDefaultValue = useMemo(() => {
        return giveDefaultValues(lastData)
    }, [lastData])

    const [addFormDefaultValue, setAddFormDefaultValue] = useState(addRowDefaultValue)
    const [addModalOpen, setAddModalOpen] = useState(false);

    const handleAddModalClose = () => {
        setAddModalOpen(false)
    }

    const handleSettingsDrawerClose = () => {
        setIsSettingsOpen(false)
    }

    const handleAddRowSubmit = () => {
        const updatedData = { ...lastData };
        Object.keys(addFormDefaultValue).forEach(item => {
            updatedData[item] = {
                ...updatedData[item],
                value: updatedData[item]?.type === 'number' ? parseInt(addFormDefaultValue[item], 10) : addFormDefaultValue[item]
            }
        })
        const uniqKeyVal = updatedData['ID Year']?.value
        if (yearsData.includes(uniqKeyVal)) {
            Alert.error(`Key ID Year = ${uniqKeyVal} already exists :(`, 3000);
        } else if (_.isNaN(uniqKeyVal)) {
            Alert.error(`Key ID Year can't be empty`, 3000);
        }
        else {
            Alert.success(`Object created successfully!!`, 3000);
            dispatch(dispatchAddObject(uniqKeyVal, updatedData))
            setAddFormDefaultValue(giveDefaultValues(updatedData))
            handleAddModalClose()
        }
    }

    return (
        <Drawer
            size={'sm'}
            placement={'right'}
            show={isSettingsOpen}
            onHide={handleSettingsDrawerClose}
        >
            <Drawer.Header>
                <h3>Configure JSON</h3>
            </Drawer.Header>
            <Drawer.Body>
                <ol>{Object.keys(populationData)?.map(itemKey => {
                    const data = populationData[itemKey];
                    return <li key={itemKey}><ConfigurationForm data={data} year={itemKey} /></li>
                })}</ol>
                <Button className='add-object-button' appearance='primary' onClick={() => setAddModalOpen(true)}> Add Population Object</Button>
            </Drawer.Body>
            <Drawer.Footer>
                <Button onClick={handleSettingsDrawerClose} appearance="ghost">
                    Close
                </Button>
            </Drawer.Footer>

            <Modal show={addModalOpen} onHide={handleAddModalClose} size="xs">
                <Modal.Header>
                    <Modal.Title>Add Population Object</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        fluid
                        formDefaultValue={addRowDefaultValue}
                        onChange={(newFormValue) => setAddFormDefaultValue({ ...newFormValue })}
                    >
                        {validKeys.map((eachKey, index) => {
                            const { value, isDisabled, type } = lastData?.[eachKey] || {};

                            return (
                                <FormGroup key={eachKey + value} >
                                    <InputGroup inside className='input-group'>
                                        <ControlLabel className='form-labels'>
                                            {eachKey}
                                        </ControlLabel>
                                        <FormControl
                                            name={eachKey}
                                            placeholder="FormControl in InputGroup"
                                            plaintextDefaultValue={lastData?.[eachKey]?.value}
                                            disabled={eachKey === 'ID Year' ? false : isDisabled}
                                        />
                                    </InputGroup>
                                </FormGroup>
                            );
                        })}
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button style={{ width: '40%' }} onClick={handleAddRowSubmit} appearance="primary">
                        Confirm
                    </Button>
                    <Button style={{ width: '40%' }} onClick={handleAddModalClose} appearance='ghost'>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </Drawer >

    )
}

export default SettingsDrawer;