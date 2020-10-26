
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'


import { makeStyle } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
//radio
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//check box

import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    discriptionStyle: {
        marginTop: -14
    },
    firstContainer: {
        borderRadius: '5px',
        width: '100%',
        backgroundColor: "#f2f2f2",
        borderTop: '7px solid purple',
        borderLeft:'7px solid blue',
        paddingLeft: '10px',
        paddingBottom: '10px'
    },
    SecondContainer:{
        borderLeft:'7px solid blue',
        width: '100%',
        borderRadius: '5px',
        paddingLeft: '10px',
        paddingBottom: '10px',
        backgroundColor: "#f2f2f2",
        paddingTop:"10px"
    }
}));
const useStyle = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      minWidth: 120,
    },
  }));
function DeliveryForm() {

    const [formTitle, setformTitle] = useState("");
    const [isFormEntered, setFormEntered] = useState(false)
    const [isFormDisEntered, setFormDisEntered] = useState(false)
    const [formDiscription, setformDiscription] = useState("")
    const [question, setQuestion] = useState("")
    const [isQuestionEntered, setQuestionEntered] = useState(false)
    const [answer, setAnswer] =useState("")

    //select state variable

    const [selectType, setSelectType] = useState('');
    const [open, setOpen] = useState(false);

    //radio button state variable
     const [radioOptions,setRadioOptions] = useState([]);

     const [checkBoxOptions,setCheckBoxOptions]=useState([]);


     //check box handlers
     const handleCheckBox = (e)=>{
        e.preventDefault();
        if(checkBoxOptions.length < 5) {
         const checkBoxOptionsClone = [...checkBoxOptions];
         checkBoxOptionsClone.push("option ")
          setCheckBoxOptions(checkBoxOptionsClone)
        }
   

 }

     //selectType handelers
    const handleChange = (event) => {
        setSelectType(event.target.value);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };

      //radio handlers
       const handleRadio = (e)=>{
           e.preventDefault();
           if(radioOptions.length < 5) {
            const radioOptionsClone = [...radioOptions];
            radioOptionsClone.push("option ")
             setRadioOptions(radioOptionsClone)
           }
      

    }

    //styles
    const classes = useStyles();
    const classes2 = useStyle();


    return (
        <div>

            <form className={classes.root}>
                <div className={classes.firstContainer}>
            
                    {isFormEntered ? <div> <h2>{formTitle}</h2> </div> :
                        <TextField label="Form Title"
                            value={formTitle}
                            onChange={e => {
                                setformTitle(e.target.value)
                            }}
                            onKeyPress={e => {
                                if (e.key === 'Enter') setFormEntered(true)
                            }} />}


                    {isFormDisEntered ?
                        <div> <h3>{formDiscription}</h3></div> :
                        <>
                            <br />
                            <TextField label="description"
                                className={classes.discriptionStyle}
                                value={formDiscription}
                                onChange={e => {
                                    setformDiscription(e.target.value)
                                }}
                                onKeyPress={e => {
                                    if (e.key === 'Enter') setFormDisEntered(true)

                                }} /> </>
                            }
                </div>
                <div className={classes.SecondContainer}>
                <h2>Qusetions</h2>
                {isQuestionEntered ?
        <div style={{ width: '100%' }}> 
            <Grid container spacing={3}>
                <Grid item>
                <h3>{question}</h3>

                </Grid>
                <Grid item>
                <FormControl className={classes2.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">SelectType</InputLabel>
                    <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={selectType}
                    onChange={handleChange}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"short answer"}>short answer</MenuItem>
                    <MenuItem value={"MCQ"}>MCQ</MenuItem>
                    <MenuItem value={"Check box"}>Check box</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
            </Grid>
            
      {selectType=="short answer" &&
      <TextField label="short answer"
                    value={answer}
                    onChange={e=>{
                        setAnswer(e.target.value)
                        }}
                       />
                       }
                       {selectType=="MCQ" &&  (
                       <>
                       <button onClick={handleRadio}>add Options</button>
                        {radioOptions && radioOptions.map((ele,i) => {
                            return(
                                <div>
                                <RadioGroup>
                          <FormControlLabel value="option" control={<Radio />} label={`${ele}${i+1}`} />
                          </RadioGroup>
                        </div>
                            )
                        })}
                       
                       </>
                       )
                      }
                      {selectType == "Check box" && (
                          <>
                          <button onClick={handleCheckBox}>add check box options</button>
                         {checkBoxOptions && checkBoxOptions.map((ele,i)=>{
                             return(
                                 <div>
                                       <Checkbox
                                   
                                 inputProps={{ 'aria-label': 'primary checkbox' }}
                             /><span>{`${ele}${i+1}`}</span>
                                 </div>
                             )
                         })}
                          
                          </>
                      )

                      }
                      
                       
                      
                    </div>
                     :
                    <>
                        <br />
                        <TextField label="Enter the question"

                            value={question}
                            onChange={e => {
                                setQuestion(e.target.value)
                            }}
                            onKeyPress={e => {
                                if (e.key === 'Enter') setQuestionEntered(true)

                            }} /> </>

                }

</div>

            </form>

        </div >
    )

}
export default DeliveryForm