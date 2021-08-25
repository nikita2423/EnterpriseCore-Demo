import React, { useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, FormControl, FormGroup, InputGroup, Animation, ButtonToolbar, ControlLabel, Toggle, Icon } from 'rsuite';
import { dispatchUpdatePopulation } from '../../model/dispatch';

import './SettingsDrawer.css'

const { Collapse } = Animation;

const Panel = ({ ...props }) => (
    <div
        {...props}
        style={{
            backgroundColor: '#0005',
            borderRadius: '10px',
            padding: '20px',
            marginTop: '10px',
            marginBottom: '20px'
        }}
    >
        {props.children}
    </div>
);

const CollapsableMenu = (parentProps) => {
    const { isOpen, handleCollapseToggle, heading, children } = parentProps;
    return <div className='collapsable-menu'>
        <Button className='collapse-button' onClick={handleCollapseToggle}><><h6><code>ID Year: {heading}</code></h6></><Icon icon={isOpen ? 'chevron-down' : 'chevron-right'} /></Button>
        <Collapse in={isOpen}>{(props) => <Panel {...props}>{children}</Panel>}</Collapse>
    </div>


}

const ConfigurationForm = ({ data = {}, year = 2021 }) => {
    const dispatch = useDispatch();

    const allKeys = useMemo(() => {
        return Object.keys(data).filter(item => typeof data[item] === 'object');
    }, [data])

    const formDefaultValue = useMemo(() => {
        const defaultValues = {};
        allKeys.forEach(key => {
            defaultValues[key] = data[key]?.value;
        })
        return defaultValues
    }, [allKeys, data])

    const [formValues, setFormValues] = useState(formDefaultValue);
    const [isHidden, setIsHidden] = useState(data?.isHidden);

    const [isOpen, setIsOpen] = useState(false);

    const handleCollapseToggle = () => {
        setIsOpen(current => !current);
    }

    const handleSubmit = () => {
        const updatedData = { ...data };
        Object.keys(formValues).forEach(item => {
            updatedData[item] = {
                ...updatedData[item],
                value: updatedData[item]?.type === 'number' ? parseInt(formValues[item], 10) : formValues[item]
            }
        })
        updatedData.isHidden = isHidden
        dispatch(dispatchUpdatePopulation(year, updatedData))
        handleCollapseToggle()
    }

    return (
        <Form className='update-form' formValue={formValues} onChange={newData => setFormValues({ ...newData })} formDefaultValue={formDefaultValue}>
            <CollapsableMenu heading={year} isOpen={isOpen} handleCollapseToggle={handleCollapseToggle}>
                {allKeys.map((eachKey, index) => {
                    const { value, isDisabled, type } = data[eachKey];
                    return (
                        <FormGroup key={eachKey + value}>
                            <InputGroup inside className='input-group'>
                                <ControlLabel className='form-labels'>
                                    {eachKey}
                                </ControlLabel>
                                <FormControl
                                    name={eachKey}
                                    placeholder="FormControl in InputGroup"
                                    plaintextDefaultValue={data[eachKey]?.value}
                                    disabled={isDisabled}
                                />
                            </InputGroup>
                        </FormGroup>
                    );
                })}
                <ButtonToolbar className='button-toolbar'>
                    <FormGroup className='toggle-button'>
                        <FormControl name='isHidden' accepter={() => <Toggle defaultChecked={!isHidden} size="md" checkedChildren="Enabled" unCheckedChildren="Hidden" onChange={v => setIsHidden(!v)} />}></FormControl>
                    </FormGroup>
                    <Button appearance='primary' onClick={handleSubmit} style={{ width: '50%' }} >
                        Save
                    </Button>
                </ButtonToolbar>
            </CollapsableMenu>
        </Form>
    );
}

export default ConfigurationForm