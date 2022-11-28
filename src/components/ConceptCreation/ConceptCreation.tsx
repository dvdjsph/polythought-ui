import React, { useState, useCallback } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { style } from "./style";
import { MuiChipsInput, MuiChipsInputChip } from 'mui-chips-input';
import { Instance, Property, Group, Aspect } from "./types";
import { handleInstances, handleProperties, handleGroups } from "./helpers";
import {v4 as uuidv4} from 'uuid';



interface Props {
    stage: number;
    setStage: (newStage: number) => void;
}

export const ConceptCreation = ({ stage = 1, setStage }: Props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //
    const [instances, setInstances] = useState<Instance[]>([]);
    const [properties, setProperties] = useState<Property[]>([]);
    const [groups, setGroups] = useState<Group[]>([]);
    const [aspects, setAspects] = useState<Aspect[]>([]);
    const [instanceCount, setInstanceCount] = useState(0);
    const [propertyCount, setPropertyCount] = useState(0);
    const [groupCount, setGroupCount] = useState(0);
    const [aspectCount, setAspectCount] = useState(0);

    const [value, setValue] = React.useState<MuiChipsInputChip[]>([])

    const handleChange = (newValue: MuiChipsInputChip[]) => {
        console.log(newValue);
        setValue(newValue)
    }
    const makeOne = (label:string = '', props?: object) => ({label, id:  uuidv4(), ...props});
    const makeSeveral = (labels:string[], props?: object) => {
        return labels.map(label => ({label, id:  uuidv4(), ...props}));
    };

    const callbackOne = useCallback(()=>{
        //const preInstances = handleInstances(value);
        const preInstances = makeSeveral(value);
        setInstances(preInstances);
        setValue([]);
        setStage(stage + 1);
    }, [value]);
    const callbackTwo = useCallback(()=>{
        const preProperties = handleProperties(value);
        const newInstance = { ...instances[instanceCount], properties: preProperties };
        const newInstances = [...instances];
        newInstances[instanceCount] = newInstance;
        console.log(newInstances);
        setProperties(preProperties);
        setInstances(newInstances);
        setValue([]);
        setStage(stage + 1);
    }, [value]);

    const callbackThree = useCallback(()=>{

        const group = makeOne();
        const newProperties = makeSeveral(value, { group });
        console.log({newProperties});
        if (propertyCount < properties.length - 1){
            setPropertyCount(propertyCount + 1);
        }
        else {
            if(instanceCount < instances.length - 1){
                setStage(stage - 1);
                setInstanceCount(instanceCount+1);
                
            }
            else {
                setStage(stage + 1);
            }
        }
        setValue([]);

    }, [value]);

    let message:React.ReactElement;
    let callback: () => void;
    let disableNext: boolean = true;

    switch(stage){
        case 1:
            const messageContent = instances.length < 1 ? "Type something you'd like to know more about and press enter." : "Keep going!  The more the merrier!";
            message = <div>{messageContent}</div>;
            callback = callbackOne;
            disableNext = instances.length <= 1;
            break;
        case 2:
            //message = <div>{instances && `What are some properties of ${instances[instanceCount].label}?`}</div>;
            const instance = instances[instanceCount].label;
            message = <div>What are some properties of <Chip  variant="outlined"  label={instance}/>?</div>
            callback = callbackTwo;
            disableNext = true;
            break;
        case 3:
            message = (<div><Chip  variant="outlined"  label={instances[instanceCount].label}/> is <Chip  variant="outlined"  label={properties[propertyCount].label}/> as opposed to:</div>)
            callback = callbackThree;
            disableNext = true;
            break;
        case 4:
            message = <div>{properties.map(property => <li>{property as unknown as React.ReactNode}</li>)} 'are types of:'</div>
            callback = console.log;
            disableNext = true;
            break;
        case 5:
            message = <div>{groups.map(group => <li>{group as unknown as React.ReactNode}</li>)} 'are instances of:'</div>
            callback = console.log;
            break;
            default:
            message = <div></div>;
            callback = console.log;
            disableNext = true;
            break;

    }

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        { message }
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <MuiChipsInput value={value} onChange={handleChange} />
                    </Typography>
                    <Button variant="contained" onClick={()=>callback()} disabled={disableNext}>Create</Button>
                </Box>
            </Modal>
        </div>
    );












};
